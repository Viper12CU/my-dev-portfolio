export interface ServiceProcess {
  step: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: string;
  svgPath: string;
  variant: string;
  detailImage: string;
  features: string[];
  longDescription: string[];
  technologies: string[];
  process: ServiceProcess[];
  deliverables: string[];
  duration: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface ServicesData {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}
