"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SplitText from "@/components/SplitText";

type SiteFooterProps = {
  brandClassName?: string;
};

const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

const contactLinks = [
  { label: "Faizanali.35157@gmail.com", href: "mailto:Faizanali.35157@gmail.com" },
  { label: "+1 (331) 246-6413", href: "tel:+13312466413" },
  { label: "Start a Project", href: "/contact" },
];

const footerBrandThemes = {
  "/": "text-[#806000]",
  "/about": "text-[#7C3AED]",
  "/contact": "text-[#b42318]",
} as const;

export default function SiteFooter({
  brandClassName,
}: SiteFooterProps) {
  const pathname = usePathname();
  const resolvedBrandClassName =
    brandClassName ??
    footerBrandThemes[pathname as keyof typeof footerBrandThemes] ??
    "text-black/80";

  return (
    <footer className="relative z-10 border-t border-black/10 bg-[#f0eee8] text-[#171717]">
      <div className="mx-auto w-full max-w-full px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <SplitText
              tag="p"
              text="IQRATI"
              className={`block text-[12px] font-semibold tracking-[0.35em] ${resolvedBrandClassName}`}
              textAlign="left"
              splitType="chars"
              delay={18}
              duration={0.7}
              from={{ opacity: 0, y: 8 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="p"
              text="Smart Solutions for a Digital World. Fintech, education, government, AI, chatbots and CRM — engineered to make technology accessible, efficient and empowering."
              className="mt-4 block max-w-[420px] text-[12px] leading-5 text-black/65"
              textAlign="left"
              splitType="words"
              delay={14}
              duration={0.6}
              from={{ opacity: 0, y: 8 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>

          <div className="grid gap-8 text-[12px] text-black/70 sm:grid-cols-3 md:col-span-6">
            <div>
              <SplitText
                tag="p"
                text="Sitemap"
                className="block text-[10px] font-medium tracking-[0.32em] text-black/65"
                textAlign="left"
                splitType="chars"
                delay={14}
                duration={0.6}
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <div className="mt-4 space-y-3">
                {sitemapLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="block hover:text-black">
                    <SplitText
                      tag="span"
                      text={item.label}
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <SplitText
                tag="p"
                text="Social"
                className="block text-[10px] font-medium tracking-[0.32em] text-black/65"
                textAlign="left"
                splitType="chars"
                delay={14}
                duration={0.6}
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <div className="mt-4 space-y-3">
                {socialLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="block hover:text-black">
                    <SplitText
                      tag="span"
                      text={item.label}
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <SplitText
                tag="p"
                text="Contact"
                className="block text-[10px] font-medium tracking-[0.32em] text-black/65"
                textAlign="left"
                splitType="chars"
                delay={14}
                duration={0.6}
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <div className="mt-4 space-y-3">
                {contactLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="block hover:text-black">
                    <SplitText
                      tag="span"
                      text={item.label}
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-black/10 pt-6 text-[11px] text-black/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="right-justify">© 2026 IQRATI LLC. All rights reserved.</div>
          Smart Solutions for a Digital World.
        </div>
      </div>
    </footer>
  );
}
