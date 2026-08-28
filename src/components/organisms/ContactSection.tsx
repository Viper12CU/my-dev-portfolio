"use client";

import { useState } from "react";
import { contactData } from "@/data/contact";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContactInfoItem from "@/components/molecules/ContactInfoItem";
import Icon from "@/components/atoms/Icon";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: keyof FormData, value: string): string | undefined {
  const v = value.trim();
  switch (name) {
    case "name":
      if (!v) return "El nombre es requerido.";
      if (v.length < 2) return "El nombre debe tener al menos 2 caracteres.";
      return undefined;
    case "phone":
      if (!v) return undefined; // opcional
      // Permite +, dígitos, espacios, guiones, paréntesis y puntos
      if (!/^\+?[\d\s\-().]+$/.test(v))
        return "Formato de teléfono no válido.";
      const digits = v.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 15)
        return "El teléfono debe tener entre 7 y 15 dígitos.";
      return undefined;
    case "email":
      if (!v) return "El email es requerido.";
      if (!emailRegex.test(v)) return "Ingresa un email válido.";
      return undefined;
    case "message":
      if (!v) return "El mensaje es requerido.";
      if (v.length < 10) return "El mensaje debe tener al menos 10 caracteres.";
      return undefined;
    default:
      return undefined;
  }
}

function validateAll(data: FormData): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(data) as (keyof FormData)[]).forEach((key) => {
    const err = validateField(key, data[key]);
    if (err) errors[key] = err;
  });
  return errors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // validación en vivo si el campo ya fue tocado o ya tiene error
    if (touched[name as keyof FormData] || errors[name as keyof FormData]) {
      const err = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
    if (status === "success" || status === "error") {
      setStatus("idle");
      setSubmitError(null);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const isLoading = status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAll(formData);
    setErrors(validationErrors);
    setTouched({ name: true, phone: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje. Intenta de nuevo.");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (err) {
      setStatus("error");
      setSubmitError(err instanceof Error ? err.message : "Error inesperado al enviar.");
    }
  };

  return (
    <section id="contact" className="contact section">
      <SectionTitle
        title={contactData.title}
        subtitle={contactData.subtitle}
      />

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            {contactData.info.map((item, i) => (
              <ContactInfoItem key={i} item={item} />
            ))}
          </div>

          <div className="col-lg-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="Your Name *"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "error-name" : undefined}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <small
                      id="error-name"
                      className="text-danger d-block mt-1"
                      style={{ color: "#df1529", fontSize: "13px" }}
                    >
                      {errors.name}
                    </small>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    name="phone"
                    placeholder="Your Phone (optional)"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "error-phone" : undefined}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputMode="tel"
                    autoComplete="tel"
                    disabled={isLoading}
                  />
                  {errors.phone && (
                    <small
                      id="error-phone"
                      className="text-danger d-block mt-1"
                      style={{ color: "#df1529", fontSize: "13px" }}
                    >
                      {errors.phone}
                    </small>
                  )}
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    name="email"
                    placeholder="Your Email *"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <small
                      id="error-email"
                      className="text-danger d-block mt-1"
                      style={{ color: "#df1529", fontSize: "13px" }}
                    >
                      {errors.email}
                    </small>
                  )}
                </div>
                <div className="col-md-12">
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    name="message"
                    rows={6}
                    placeholder="Message *"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "error-message-field" : undefined}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  />
                  {errors.message && (
                    <small
                      id="error-message-field"
                      className="text-danger d-block mt-1"
                      style={{ color: "#df1529", fontSize: "13px" }}
                    >
                      {errors.message}
                    </small>
                  )}
                </div>
                <div className="col-md-12 text-center">
                  <div
                    className="error-message"
                    style={{ display: status === "error" ? "block" : "none" }}
                  >
                    {submitError}
                  </div>
                  <div
                    className="sent-message"
                    style={{ display: status === "success" ? "block" : "none" }}
                  >
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                    <Icon name="Send" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
