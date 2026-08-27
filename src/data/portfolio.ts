export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  githubUrl: string;
  appUrl: string;
  client: string;
  projectDate: string;
  technologies: string[];
  detailImages: string[];
  detailsDescription: string[];
}

export interface PortfolioFilter {
  label: string;
  filter: string;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  filters: PortfolioFilter[];
  items: PortfolioItem[];
}

export const portfolioData: PortfolioData = {
  title: "Portfolio",
  subtitle:
    "A showcase of my work, demonstrating my skills and expertise in creating innovative and effective solutions for various projects.",
  filters: [
    { label: "All", filter: "*" },
    { label: "Web App", filter: ".filter-app" },
    { label: "Mobile App", filter: ".filter-product" },
  ],
  items: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con panel de administración",
      category: "filter-app",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      githubUrl: "https://github.com/username/ecommerce-platform",
      appUrl: "https://ecommerce-demo.vercel.app",
      client: "TechStore Inc.",
      projectDate: "Enero 2024",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      detailImages: [
        "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
        "/assets/img/portfolio/app-1.jpg",
      ],
      detailsDescription: [
        "Plataforma de comercio electrónico completa diseñada para una tienda de tecnología. Incluye catálogo de productos, carrito de compras, sistema de pagos con Stripe, y panel de administración para gestionar inventario y pedidos.",
        "El sistema fue construido con Next.js 14 y TypeScript para garantizar rendimiento y type-safety. Se implementó SSR para mejorar el SEO y la carga inicial de las páginas.",
        "El panel de administración permite a los vendedores gestionar productos, ver estadísticas de ventas en tiempo real, y procesar pedidos. Se utilizó PostgreSQL para la base de datos con Prisma como ORM.",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real",
      category: "filter-product",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
      githubUrl: "https://github.com/username/task-manager",
      appUrl: "https://taskflow-demo.vercel.app",
      client: "StartupXYZ",
      projectDate: "Marzo 2024",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      detailImages: [
        "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
        "/assets/img/portfolio/product-1.jpg",
      ],
      detailsDescription: [
        "Aplicación de gestión de tareas diseñada para equipos remotos. Permite crear proyectos, asignar tareas, establecer plazos y colaborar en tiempo real con actualizaciones instantáneas.",
        "La arquitectura backend utiliza Node.js con Express y Socket.io para la comunicación en tiempo real. Redis se implementó para caché de sesiones y colas de mensajes.",
        "El frontend fue construido con React y Context API para el manejo de estado. Se implementó drag & drop para reorganizar tareas y un sistema de notificaciones en tiempo real.",
      ],
    },
    {
      id: 3,
      title: "Brand Identity System",
      description: "Sistema de identidad visual completo para marca de tecnología",
      category: "filter-branding",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
      githubUrl: "https://github.com/username/brand-identity",
      appUrl: "https://brand-showcase.vercel.app",
      client: "InnovateTech",
      projectDate: "Febrero 2024",
      technologies: ["Figma", "Illustrator", "After Effects", "CSS", "SVG"],
      detailImages: [
        "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
        "/assets/img/portfolio/branding-1.jpg",
      ],
      detailsDescription: [
        "Desarrollo de un sistema de identidad visual completo para una empresa de tecnología emergente. El proyecto incluyó logo, paleta de colores, tipografía, y guidelines de marca.",
        "Se crearon más de 50 assets digitales incluyendo iconos, ilustraciones y plantillas para redes sociales. Todas las piezas fueron diseñadas en Figma con componentes reutilizables.",
        "El sistema fue documentado en un brand book interactivo que incluye ejemplos de uso, especificaciones técnicas y mejores prácticas para la implementación de la marca en diferentes medios.",
      ],
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Aplicación móvil para seguimiento de rutinas de ejercicio y nutrición",
      category: "filter-app",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
      githubUrl: "https://github.com/username/fitness-tracker",
      appUrl: "https://fitness-app-demo.vercel.app",
      client: "FitLife Co.",
      projectDate: "Abril 2024",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Node.js"],
      detailImages: [
        "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
        "/assets/img/portfolio/app-1.jpg",
      ],
      detailsDescription: [
        "Aplicación móvil multiplataforma para el seguimiento de rutinas de ejercicio y planes de nutrición. Los usuarios pueden registrar entrenamientos, monitorear progreso y recibir recomendaciones personalizadas.",
        "Se implementó con React Native para alcanzar tanto iOS como Android con una sola base de código. Firebase proporciona autenticación, base de datos en tiempo real y notificaciones push.",
        "El sistema de gráficos con Chart.js muestra el progreso del usuario a lo largo del tiempo, incluyendo peso, medidas corporales y rendimiento en ejercicios específicos.",
      ],
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description: "Panel de analytics con visualización de datos en tiempo real",
      category: "filter-product",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
      githubUrl: "https://github.com/username/analytics-dashboard",
      appUrl: "https://analytics-demo.vercel.app",
      client: "DataViz Corp.",
      projectDate: "Mayo 2024",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "ClickHouse"],
      detailImages: [
        "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
        "/assets/img/portfolio/product-1.jpg",
      ],
      detailsDescription: [
        "Dashboard de analytics empresarial con visualización de datos en tiempo real. Permite monitorear KPIs, generar reportes automáticos y tomar decisiones basadas en datos.",
        "El frontend utiliza Vue.js con D3.js para gráficos interactivos personalizados. La comunicación con el backend se realiza mediante WebSockets para actualizaciones en tiempo real.",
        "El backend está construido con Python y FastAPI, procesando millones de eventos diarios con ClickHouse como base de datos analítica para consultas de alto rendimiento.",
      ],
    },
    {
      id: 6,
      title: "Restaurant Branding",
      description: "Identidad visual completa para cadena de restaurantes gourmet",
      category: "filter-branding",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
      githubUrl: "https://github.com/username/restaurant-brand",
      appUrl: "https://restaurant-brand.vercel.app",
      client: "Gourmet Bites",
      projectDate: "Junio 2024",
      technologies: ["Figma", "Photoshop", "InDesign", "Blender", "CSS"],
      detailImages: [
        "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
        "/assets/img/portfolio/branding-1.jpg",
      ],
      detailsDescription: [
        "Creación de identidad de marca completa para una cadena de restaurantes gourmet. El proyecto abarcó desde el concepto hasta la implementación en todos los puntos de contacto.",
        "Se diseñaron menús, tarjetas de presentación, señalética, embalajes y un sitio web que refleja la elegancia y calidad del restaurante. Se utilizaron colores cálidos y tipografía sofisticada.",
        "El proyecto incluyó renders 3D del diseño de interiores y mockups de los materiales impresos para presentación al cliente. Se entregaron más de 200 archivos listos para producción.",
      ],
    },
    {
      id: 7,
      title: "Learning Platform",
      description: "Plataforma de e-learning con sistema de cursos y progreso",
      category: "filter-app",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
      githubUrl: "https://github.com/username/learning-platform",
      appUrl: "https://learn-demo.vercel.app",
      client: "EduTech Academy",
      projectDate: "Julio 2024",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
      detailImages: [
        "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
        "/assets/img/portfolio/app-1.jpg",
      ],
      detailsDescription: [
        "Plataforma de e-learning completa con sistema de cursos, lecciones video, quizzes y seguimiento de progreso. Incluye panel de instructor y sistema de pagos por curso.",
        "La arquitectura采用了 Next.js App Router con Server Components para mejorar el rendimiento. Prisma ORM gestiona la base de datos PostgreSQL con esquemas optimizados para consultas complejas.",
        "Los videos se almacenan en AWS S3 con streaming adaptativo. Se implementó un sistema de certificates digitales generados automáticamente al completar un curso.",
      ],
    },
    {
      id: 8,
      title: "Social Media Toolkit",
      description: "Kit de herramientas para gestión de contenido en redes sociales",
      category: "filter-product",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
      githubUrl: "https://github.com/username/social-toolkit",
      appUrl: "https://social-toolkit.vercel.app",
      client: "MediaPro Agency",
      projectDate: "Agosto 2024",
      technologies: ["Svelte", "Supabase", "Tailwind CSS", "Canvas API", "Cron"],
      detailImages: [
        "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
        "/assets/img/portfolio/product-1.jpg",
      ],
      detailsDescription: [
        "Herramienta integral para la gestión de contenido en redes sociales. Permite programar publicaciones, analizar métricas y gestionar múltiples cuentas desde un solo panel.",
        "Construido con Svelte para un rendimiento óptimo y Supabase como backend即服务. El sistema de programación utiliza cron jobs para publicar contenido automáticamente.",
        "Se implementó un editor de imágenes integrado con Canvas API que permite crear y editar publicaciones directamente en la plataforma sin necesidad de herramientas externas.",
      ],
    },
    {
      id: 9,
      title: "Corporate Website",
      description: "Sitio web corporativo con sistema de gestión de contenido",
      category: "filter-branding",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
      githubUrl: "https://github.com/username/corporate-site",
      appUrl: "https://corporate-demo.vercel.app",
      client: "Global Solutions Ltd.",
      projectDate: "Septiembre 2024",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Framer Motion", "Vercel"],
      detailImages: [
        "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
        "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
        "/assets/img/portfolio/branding-1.jpg",
      ],
      detailsDescription: [
        "Sitio web corporativo moderno con CMS headless para facilitar la actualización de contenido por parte del equipo de marketing. Incluye sección de servicios, casos de éxito y blog.",
        "Next.js proporciona rendering estático para páginas de contenido y SSR para contenido dinámico. Sanity CMS permite editar contenido en tiempo real con preview instantáneo.",
        "Se implementaron animaciones suaves con Framer Motion y un diseño responsive que se adapta perfectamente a todos los dispositivos. El sitio obtuvo una puntuación de 98 en Lighthouse.",
      ],
    },
  ],
};
