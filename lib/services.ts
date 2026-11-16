export type ServiceIconKey =
  | "fintech"
  | "education"
  | "government"
  | "ai"
  | "chatbot"
  | "crm";

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ServiceIconKey;
  cta: {
    label: string;
    href: string;
  };
};

export const services: Service[] = [
  {
    id: "fintech",
    number: "01",
    title: "Fintech and Finance",
    description:
      "Technology solutions for payments, financial analytics, digital financial services and streamlined financial operations.",
    icon: "fintech",
    cta: { label: "Discuss a fintech project", href: "/contact" },
  },
  {
    id: "education",
    number: "02",
    title: "Education",
    description:
      "Digital solutions that improve learning experiences, simplify educational administration and support modern learning environments.",
    icon: "education",
    cta: { label: "Modernise learning", href: "/contact" },
  },
  {
    id: "government",
    number: "03",
    title: "State and Local Government",
    description:
      "Technology solutions that optimize government operations, improve public service delivery and strengthen citizen engagement.",
    icon: "government",
    cta: { label: "Improve public services", href: "/contact" },
  },
  {
    id: "ai",
    number: "04",
    title: "AI Solutions",
    description:
      "Intelligent solutions that help businesses automate processes, generate insights and improve decision-making.",
    icon: "ai",
    cta: { label: "Automate with AI", href: "/contact" },
  },
  {
    id: "chatbot",
    number: "05",
    title: "Chatbots",
    description:
      "Custom chatbot solutions for customer engagement, automated support, instant responses and improved customer experiences.",
    icon: "chatbot",
    cta: { label: "Build a chatbot", href: "/contact" },
  },
  {
    id: "crm",
    number: "06",
    title: "CRM Integration",
    description:
      "CRM implementation and integration solutions that help businesses manage customer relationships, sales pipelines, customer information and team productivity.",
    icon: "crm",
    cta: { label: "Integrate your CRM", href: "/contact" },
  },
];
