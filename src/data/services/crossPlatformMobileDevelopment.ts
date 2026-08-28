import type { ServiceItem } from "./types";

export const crossPlatformMobileDevelopment: ServiceItem = {
  slug: "cross-platform-mobile-development",
  title: "Cross-Platform Mobile Development",
  description:
    "Cross-platform mobile applications built with Flutter for consistent, responsive experiences across Android and iOS.",
  icon: "Phone",
  svgPath:
    "M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762",
  variant: "item-pink",
  detailImage: "/assets/img/services.jpg",
  features: [
    "Single codebase for Android and iOS",
    "Custom UI with Flutter widgets and animations",
    "Native performance with platform-specific optimizations",
    "Push notifications and deep linking",
    "App Store and Play Store deployment support",
  ],
  longDescription: [
    "I build cross-platform mobile applications using Flutter that deliver native-like performance on both Android and iOS from a single codebase. From concept to deployment, I handle UI design, business logic, and platform integration.",
    "Whether you need a consumer-facing app or an internal tool, I focus on smooth animations, fast load times, and a consistent experience across all devices.",
  ],
  technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "SQLite", "GetX/Bloc"],
  process: [
    { step: "Planning", description: "Defining platform requirements, screen flows, and native feature needs." },
    { step: "UI/UX Design", description: "Creating platform-adaptive designs that follow Material Design and Cupertino guidelines." },
    { step: "Development", description: "Building the app with Flutter widgets, state management, and API integrations." },
    { step: "Publishing", description: "App Store and Play Store submission, screenshots, metadata, and release management." },
  ],
  deliverables: [
    "Cross-platform mobile application",
    "Source code with setup instructions",
    "App Store & Play Store listings",
    "Push notification system",
    "30 days of post-launch support",
  ],
  duration: "4-10 weeks",
  cta: {
    text: "Build Your App",
    href: "/#contact",
  },
};
