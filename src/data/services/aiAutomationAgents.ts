import type { ServiceItem } from "./types";

export const aiAutomationAgents: ServiceItem = {
  slug: "ai-automation-agents",
  title: "AI Automation & Agents",
  description:
    "Intelligent automations and AI agents built with n8n to streamline repetitive workflows, connect tools, and help teams work more efficiently.",
  icon: "Cpu",
  svgPath:
    "M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572",
  variant: "item-indigo",
  detailImage: "/assets/img/services.jpg",
  features: [
    "Workflow automation with n8n and custom integrations",
    "AI-powered agents for data processing and decision-making",
    "Tool connection (CRM, email, databases, APIs)",
    "Custom logic and conditional branching",
    "Monitoring and error handling for production workflows",
  ],
  longDescription: [
    "I build intelligent automations and AI agents that streamline repetitive workflows and connect your tools seamlessly. Using n8n and custom integrations, I create systems that handle routine tasks so your team can focus on what matters.",
    "From simple data syncing to complex multi-step workflows with AI decision-making, I design automations that are reliable, observable, and easy to modify as your needs evolve.",
  ],
  technologies: ["n8n", "OpenAI API", "Node.js", "Webhooks", "REST APIs", "Docker"],
  process: [
    { step: "Audit", description: "Mapping your current workflows, identifying bottlenecks and automation opportunities." },
    { step: "Design", description: "Architecting the automation flow, triggers, error handling, and data mapping." },
    { step: "Build", description: "Implementing workflows in n8n with custom nodes, AI integrations, and testing." },
    { step: "Deploy", description: "Production setup with monitoring, alerting, and documentation for your team." },
  ],
  deliverables: [
    "Production-ready automation workflows",
    "AI agent configuration and prompts",
    "Error handling and monitoring setup",
    "Workflow documentation",
    "30 days of optimization support",
  ],
  duration: "1-3 weeks",
  cta: {
    text: "Automate Your Workflow",
    href: "/#contact",
  },
};
