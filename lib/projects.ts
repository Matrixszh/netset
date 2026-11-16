export type Project = {
  id: string;
  name: string;
  category: string;
  client: string;
  description: string;
  features: string[];
  results: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "nexaconnect",
    name: "NexaConnect",
    category: "AI Agents for Customer Support",
    client: "IT service provider",
    description:
      "Developed AI-powered virtual agents to automate customer support operations, handle common queries and improve response efficiency.",
    features: [
      "AI-powered virtual agents",
      "Automated customer query handling",
      "Improved support workflows",
      "Faster customer response",
    ],
    results:
      "40% reduction in response time and improved customer satisfaction.",
    image: "/img4.jpg",
    imageAlt: "NexaConnect AI customer support agents case study",
  },
  {
    id: "lumencraft",
    name: "LumenCraft Interiors",
    category: "Responsive Business Websites",
    client: "Boutique interior design firm",
    description:
      "Developed a responsive, SEO-optimized business website to showcase interior design projects and generate new customer enquiries.",
    features: [
      "Responsive website design",
      "Portfolio presentation",
      "SEO optimization",
      "Online consultation bookings",
    ],
    results: "Increased website traffic and customer engagement.",
    image: "/img2.jpg",
    imageAlt: "LumenCraft Interiors responsive website case study",
  },
  {
    id: "shopivia",
    name: "Shopivia",
    category: "Ecommerce Solutions",
    client: "Online fashion brand",
    description:
      "Developed a scalable ecommerce platform with integrated inventory and payment functionality.",
    features: [
      "Ecommerce platform",
      "Inventory management",
      "Payment integration",
      "Personalized product recommendations",
    ],
    results: "60% increase in monthly sales.",
    image: "/img3.jpg",
    imageAlt: "Shopivia scalable ecommerce platform case study",
  },
  {
    id: "velofinance",
    name: "VeloFinance",
    category: "CRM Integration for Sales Teams",
    client: "Fintech startup",
    description:
      "Implemented a custom CRM integration to streamline sales operations and centralize customer information.",
    features: [
      "Lead tracking",
      "Centralized customer data",
      "Sales workflow optimization",
      "Actionable sales insights",
    ],
    results: "Improved sales workflows and operational efficiency.",
    image: "/img6.png",
    imageAlt: "VeloFinance CRM integration case study",
  },
];
