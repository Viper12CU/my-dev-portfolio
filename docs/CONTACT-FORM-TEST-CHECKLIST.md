# Checklist de Testing Manual - Formulario de Contacto

## Pre-requisitos
- [ ] Servidor de desarrollo corriendo (`pnpm dev`)
- [ ] Abrir consola del navegador (F12)
- [ ] Tener una herramienta para enviar requests HTTP (curl, Postman, Thunder Client)

---

## 1. Rate Limiting

### Test RL-1: Límite de 5 requests por minuto
1. Abrir `http://localhost:3000`
2. Ir a la sección de Contact
3. Llenar el formulario con datos válidos y enviarlo (1)
4. Repetir 4 veces más (total: 5 envíos exitosos)
5. Enviar una 6ta vez
6. **Esperado:** La 6ta vez retorna error 429 "Too many requests"
7. **Verificar en consola:** `Retry-After` header con segundos restantes

### Test RL-2: Reset después de 60 segundos
1. Completar el Test RL-1 (quedarse bloqueado)
2. Esperar 60 segundos
3. Enviar el formulario nuevamente
4. **Esperado:** El envío es exitoso (200 OK)

### Test RL-3: IPs diferentes son independientes
1. Abrir el formulario en una pestaña normal
2. Abrir una pestaña de incógnito
3. Enviar 5 veces desde la pestaña normal hasta bloquear
4. Enviar desde la pestaña de incógnito
5. **Esperado:** El envío desde incógnito es exitoso (misma IP = mismo contador, pero verificar si se usa proxy)

---

## 2. Protección Honeypot

### Test HP-1: Bot que rellena el campo oculto
1. Abrir `http://localhost:3000`
2. Abrir DevTools → Console
3. Ejecutar:
   ```javascript
   document.querySelector('input[name="website"]').value = 'bot-spam';
   document.querySelector('input[name="website"]').dispatchEvent(new Event('input', { bubbles: true }));
   ```
4. Llenar el formulario normalmente y enviar
5. **Esperado:** Retorna 200 OK pero el mensaje NO se envía por WhatsApp
6. **Verificar:** No llega mensaje de WhatsApp

### Test HP-2: Usuario humano no rellena el campo
1. Llenar el formulario manualmente (sin tocar el campo oculto)
2. Enviar
3. **Esperado:** El envío es exitoso y SÍ se envía el mensaje por WhatsApp

---

## 3. Time Check (Anti-bot temporal)

### Test TC-1: Submit instantáneo (< 3 segundos)
1. Abrir `http://localhost:3000` (recargar para reiniciar el timer)
2. Inmediatamente (en menos de 3 segundos), ejecutar en consola:
   ```javascript
   document.querySelector('form').requestSubmit();
   ```
3. **Esperado:** Retorna 200 OK pero el mensaje NO se envía

### Test TC-2: Submit normal (> 3 segundos)
1. Abrir `http://localhost:3000`
2. Esperar 4 segundos
3. Llenar el formulario y enviar
4. **Esperado:** El envío es exitoso y SÍ se envía el mensaje

---

## 4. Origin/Referer Check (CSRF)

### Test OR-1: Request con Origin inválido
1. Abrir terminal
2. Ejecutar:
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -H "Origin: https://evil.com" \
     -d '{"name":"Test","email":"test@test.com","message":"This is a test message for the form","formLoadedAt":'$(($(date +%s%3N)-5000))'}'
   ```
3. **Esperado:** Retorna 403 Forbidden

### Test OR-2: Request sin Origin (permitido)
1. Ejecutar:
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","message":"This is a test message for the form","formLoadedAt":'$(($(date +%s%3N)-5000))'}'
   ```
2. **Esperado:** Retorna 200 OK (o 400/429 por otras validaciones, pero NO 403)

---

## 5. Sanitización de Input

### Test SN-1: Caracteres especiales de formato
1. Llenar el nombre con: `*Bold* _Italic_`
2. Llenar el mensaje con: `~Strike~ text and \`code\``
3. Enviar el formulario
4. **Esperado:** El mensaje de WhatsApp llega sin caracteres `*`, `_`, `~`, `` ` ``
5. **Verificar:** El nombre llega como "Bold Italic" y el mensaje sin formato especial

### Test SN-2: Límites de longitud
1. Abrir DevTools → Console
2. Ejecutar:
   ```javascript
   const nameInput = document.querySelector('input[name="name"]');
   const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
   nativeInputValueSetter.call(nameInput, 'A'.repeat(150));
   nameInput.dispatchEvent(new Event('input', { bubbles: true }));
   ```
3. Intentar enviar
4. **Esperado:** El campo tiene maxlength="100" que impide escribir más de 100 caracteres

### Test SN-3: Validación de formato de email
1. Ingresar `noemail` en el campo de email
2. Hacer clic en otro campo (blur)
3. **Esperado:** Aparece error "Ingresa un email válido."

### Test SN-4: Nombre muy corto
1. Ingresar solo 1 carácter en el nombre
2. Hacer blur
3. **Esperado:** Aparece error "El nombre debe tener al menos 2 caracteres."

---

## 6. Headers de Seguridad

### Test HD-1: Headers de respuesta
1. Abrir DevTools → Network
2. Enviar el formulario
3. Seleccionar la request a `/api/contact`
4. Verificar Headers de respuesta:
   - [ ] `X-Content-Type-Options: nosniff`
   - [ ] `Cache-Control: no-store, no-cache, must-revalidate`

---

## 7. Comportamiento del Formulario (UI)

### Test UI-1: Estado de carga
1. Llenar el formulario válidamente
2. Hacer clic en "Send Message"
3. **Esperado:** El botón muestra "Sending..." y se deshabilita durante el envío

### Test UI-2: Mensaje de éxito
1. Enviar un formulario válido
2. **Esperado:** Aparece "Your message has been sent. Thank you!" y los campos se limpian

### Test UI-3: Mensaje de error
1. Deshabilitar la red (DevTools → Network → Offline)
2. Enviar el formulario
3. **Esperado:** Aparece mensaje de error
4. Rehabilitar la red

### Test UI-4: Validación en tiempo real
1. Escribir un email inválido
2. Hacer clic en otro campo
3. **Esperado:** Aparece error de validación inmediatamente
4. Corregir el email
5. **Esperado:** El error desaparece

### Test UI-5: Accesibilidad - Navegación por teclado
1. Presionar Tab para navegar por el formulario
2. **Esperado:** Se puede llegar a todos los campos y al botón
3. Verificar que los campos tienen `aria-required`, `aria-invalid`, `aria-describedby`

---

## 8. Escenarios Edge Case

### Test EC-1: Mensaje con solo espacios
1. Ingresar 10 espacios en el mensaje
2. **Esperado:** Se trima y retorna error "Mensaje muy corto"

### Test EC-2: Email con espacios
1. Ingresar `test @test.com` (con espacio)
2. **Esperado:** Error "Ingresa un email válido."

### Test EC-3: Teléfono con letras
1. Ingresar `abcdefg` en el campo de teléfono
2. **Esperado:** Error "Formato de teléfono no válido."

### Test EC-4: Envío con datos mínimos válidos
1. Nombre: `Ab`
2. Email: `a@b.co`
3. Mensaje: `1234567890` (10 caracteres exactos)
4. Teléfono: vacío
5. **Esperado:** Envío exitoso

---

## Resumen de Checks

| Categoría | Tests | Estado |
|-----------|-------|--------|
| Rate Limiting | RL-1, RL-2, RL-3 | ☐ |
| Honeypot | HP-1, HP-2 | ☐ |
| Time Check | TC-1, TC-2 | ☐ |
| Origin Check | OR-1, OR-2 | ☐ |
| Sanitización | SN-1, SN-2, SN-3, SN-4 | ☐ |
| Headers | HD-1 | ☐ |
| UI | UI-1, UI-2, UI-3, UI-4, UI-5 | ☐ |
| Edge Cases | EC-1, EC-2, EC-3, EC-4 | ☐ |
