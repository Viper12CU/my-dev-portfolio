export type { ServiceItem, ServiceProcess, ServicesData } from "./types";

export { fullStackWebDevelopment } from "./fullStackWebDevelopment";
export { frontendUx } from "./frontendUx";
export { backendApiDevelopment } from "./backendApiDevelopment";
export { crossPlatformMobileDevelopment } from "./crossPlatformMobileDevelopment";
export { databaseSolutions } from "./databaseSolutions";
export { aiAutomationAgents } from "./aiAutomationAgents";

import type { ServiceItem, ServicesData } from "./types";
import { fullStackWebDevelopment } from "./fullStackWebDevelopment";
import { frontendUx } from "./frontendUx";
import { backendApiDevelopment } from "./backendApiDevelopment";
import { crossPlatformMobileDevelopment } from "./crossPlatformMobileDevelopment";
import { databaseSolutions } from "./databaseSolutions";
import { aiAutomationAgents } from "./aiAutomationAgents";

export const services: ServiceItem[] = [
  fullStackWebDevelopment,
  frontendUx,
  backendApiDevelopment,
  crossPlatformMobileDevelopment,
  databaseSolutions,
  aiAutomationAgents,
];

export const servicesData: ServicesData = {
  title: "Services",
  subtitle:
    "I offer a range of services to help you build and enhance your digital presence, from web development to design and optimization.",
  items: services,
};

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((item) => item.slug === slug);
}
