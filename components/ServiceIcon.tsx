import type { ReactNode } from "react";
import type { ServiceIconKey } from "@/lib/services";

type ServiceIconProps = {
  icon: ServiceIconKey;
  className?: string;
};

const icons: Record<ServiceIconKey, ReactNode> = {
  fintech: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <path d="M2.5 10h19" />
      <path d="M6.5 14h3" />
    </>
  ),
  education: (
    <>
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" />
      <path d="M6.5 10.5V15c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.5" />
      <path d="M21.5 8.5v5" />
    </>
  ),
  government: (
    <>
      <path d="M3 10h18L12 4 3 10Z" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 20h18" />
    </>
  ),
  ai: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  chatbot: (
    <>
      <path d="M5 5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6l-4 3.5V15H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8.5 9.5h.01M12 9.5h.01M15.5 9.5h.01" />
    </>
  ),
  crm: (
    <>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <circle cx="12" cy="17.5" r="2.2" />
      <path d="M7.6 8.6 10.8 15.5M16.4 8.6 13.2 15.5M8.4 7h7.2" />
    </>
  ),
};

export default function ServiceIcon({ icon, className }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[icon]}
    </svg>
  );
}
