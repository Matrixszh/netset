"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimate } from "motion/react";
import Ferrofluid from "@/components/Ferrofluid";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";

const PAGE_TITLE = "About Us | IQRATI";
const PAGE_DESCRIPTION =
  "IQRATI LLC — Smart Solutions for a Digital World. Learn about our company overview, mission, vision, approach, commitment to innovation and focus on customer success.";

type PillarCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  className: string;
  heightClassName: string;
  imagePosition: "center" | "top";
};

const archiveCards: PillarCard[] = [
  {
    id: "01",
    title: "OUR MISSION",
    subtitle: "Why We Exist",
    description:
      "To make technology accessible, efficient and empowering for businesses of all sizes — delivering smart digital solutions that help organisations operate better, serve their customers and grow with confidence.",
    imageSrc: "/img5.jpg",
    className: "md:col-span-7 md:row-span-2",
    heightClassName: "min-h-[420px] md:min-h-[520px]",
    imagePosition: "center",
  },
  {
    id: "02",
    title: "OUR VISION",
    subtitle: "Where We Are Going",
    description:
      "A digital world where every business, institution and community can harness technology to unlock its full potential and create meaningful digital experiences.",
    imageSrc: "/img6.png",
    className: "md:col-span-5",
    heightClassName: "min-h-[420px] md:min-h-[520px]",
    imagePosition: "center",
  },
  {
    id: "03",
    title: "OUR APPROACH",
    subtitle: "How We Work",
    description:
      "We start by understanding your goals, turn challenges into opportunities, and deliver solutions engineered for measurable results — combining strategy, design and engineering into one accountable team.",
    imageSrc: "/img7.jpg",
    className: "md:col-span-12",
    heightClassName: "min-h-[240px] md:min-h-[300px]",
    imagePosition: "center",
  },
];

const metrics = [
  { value: "INNOVATION", label: "COMMITMENT TO INNOVATION", accent: true },
  { value: "CUSTOMER", label: "FOCUS ON CUSTOMER SUCCESS" },
  { value: "PARTNERSHIP", label: "LONG-TERM PARTNERSHIPS" },
];

export default function AboutPage() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = PAGE_TITLE;
      let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", PAGE_DESCRIPTION);
    }
  }, []);

  const toggleCard = useCallback((id: string) => {
    setActiveCardId((curr) => (curr === id ? null : id));
    animate("html", { opacity: [1, 1] }, { duration: 0 });
  }, [animate]);

  const revealCard = useCallback((id: string) => {
    setActiveCardId(id);
  }, []);

  const hideCard = useCallback((id: string) => {
    setActiveCardId((curr) => (curr === id ? null : curr));
  }, []);

  return (
    <div ref={scope} className="relative min-h-screen overflow-x-hidden bg-[#f7f6f2] text-[#171717]">
      <div className="pointer-events-none fixed inset-0  opacity-100">
        <Ferrofluid
          colors={["#7C3AED", "#7C3AED", "#7C3AED"]}
          speed={0.1}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction
          mouseStrength={1}
          mouseRadius={0.35}
          mixBlendMode="screen"
          className="h-full w-full"
        />
      </div>
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,23,23,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,23,0.025) 1px, transparent 1px), radial-gradient(circle at 50% 16%, rgba(124,58,237,0.06), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.4), rgba(247,246,242,0) 24%), linear-gradient(180deg, rgba(247,246,242,0.7), rgba(247,246,242,0.92))",
          backgroundSize: "72px 72px, 72px 72px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />

      <SiteNavbar />

      <main className="relative z-10">
        <section className="px-5 pb-20 pt-38 sm:px-8 sm:pb-24 sm:pt-38">
          <div className="mx-auto flex flex-col items-center text-center">
            <SplitText
              tag="p"
              text="ABOUT IQRATI / 01"
              className="block text-[10px] font-medium uppercase tracking-[0.34em] text-[#7C3AED]"
              textAlign="center"
              splitType="chars"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 8 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-8 mx-auto max-w-[980px]">
              <SplitText
                tag="h1"
                text="SMART"
                className="block text-[45px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#171717] sm:text-[88px] md:text-[118px]"
                textAlign="center"
                splitType="chars"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h1"
                text="SOLUTIONS"
                className="block text-[45px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#171717] sm:text-[88px] md:text-[118px]"
                textAlign="center"
                splitType="chars"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <SplitText
              tag="p"
              text="At IQRATI, the journey began with a simple idea — to make technology accessible, efficient, and empowering for businesses of all sizes. We believe in the power of innovation to transform businesses and create meaningful digital experiences. Our team focuses on understanding client needs, turning challenges into opportunities, and delivering technology solutions that produce measurable results."
              className="mt-5 block max-w-[620px] text-[13px] leading-6 text-black/70 sm:text-[14px]"
              textAlign="center"
              splitType="words"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 12 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/services"
                className="inline-flex h-11 min-w-[170px] items-center justify-center border border-black/10 bg-white px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-black transition-colors hover:bg-[#f0eee8]"
              >
                <SplitText
                  tag="span"
                  text="Explore Services"
                  className="block"
                  textAlign="center"
                  splitType="chars"
                  delay={8}
                  duration={0.45}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 min-w-[170px] items-center justify-center border border-black/20 bg-transparent px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-[#171717] transition-colors hover:bg-black/5"
              >
                <SplitText
                  tag="span"
                  text="Schedule a Consultation"
                  className="block"
                  textAlign="center"
                  splitType="chars"
                  delay={8}
                  duration={0.45}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </Link>
            </div>

            
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto ">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <h2 className="text-[38px] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#171717] sm:text-[58px]">
                <SplitText
                  tag="span"
                  text="MISSION"
                  className="block"
                  textAlign="left"
                  splitType="chars"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 12 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  tag="span"
                  text=" & VISION"
                  className="block"
                  textAlign="left"
                  splitType="chars"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 12 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </h2>

              <SplitText
                tag="p"
                text="Technology designed to make businesses faster, smarter and more connected."
                className="block max-w-[260px] text-[11px] leading-5 text-[#7C3AED]"
                textAlign="left"
                splitType="words"
                delay={10}
                duration={0.5}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <div className="mt-6 h-px w-full bg-black/10" />

            <div className="mt-8 grid gap-6 md:grid-cols-12">
              {archiveCards.map((card) => {
                const isActive = activeCardId === card.id;

                return (
                  <article
                    key={card.id}
                    onMouseEnter={() => revealCard(card.id)}
                    onMouseLeave={() => hideCard(card.id)}
                    onClick={() => toggleCard(card.id)}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                    }}
                    className={`group relative cursor-pointer select-none overflow-hidden border border-black/10 bg-[#24212b] ${card.className}`}
                    aria-expanded={isActive}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleCard(card.id);
                      }
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-cover transition-transform duration-500 ease-out ${
                        card.imagePosition === "center" ? "bg-center" : "bg-top"
                      } group-hover:scale-105`}
                      style={{ backgroundImage: `url('${card.imageSrc}')` }}
                    />

                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-out ${
                        isActive ? "opacity-100" : "opacity-95"
                      }`}
                      style={{
                        background: isActive
                          ? "linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.88) 48%, rgba(0,0,0,0.95) 100%)"
                          : "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.34) 55%, rgba(0,0,0,0.74) 100%)",
                      }}
                    />

                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0,0,0,0.20), rgba(0,0,0,0.72))",
                      }}
                    />

                    <div
                      className={`relative flex h-full flex-col justify-end p-5 pb-12 sm:p-6 sm:pb-16 md:pb-6 ${card.heightClassName}`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <SplitText
                            tag="p"
                            text={`${card.id} / ${card.subtitle}`}
                            className="block text-[9px] font-medium uppercase tracking-[0.28em] text-[#7C3AED]"
                            textAlign="left"
                            splitType="chars"
                            delay={8}
                            duration={0.45}
                            from={{ opacity: 0, y: 8 }}
                            to={{ opacity: 1, y: 0 }}
                          />
                          <SplitText
                            tag="h3"
                            text={card.title}
                            className="mt-2 block text-[20px] font-semibold uppercase tracking-[-0.03em] text-white sm:text-[28px]"
                            textAlign="left"
                            splitType="chars"
                            delay={10}
                            duration={0.55}
                            from={{ opacity: 0, y: 10 }}
                            to={{ opacity: 1, y: 0 }}
                          />
                        </div>

                        <span className="hidden select-none text-[9px] font-semibold uppercase tracking-[0.28em] text-white/55 md:block">
                          {isActive ? "Release to close" : "Hover to reveal"}
                        </span>
                      </div>

                      <motion.div
                        key={`${card.id}-desc-${isActive ? "on" : "off"}`}
                        initial={{ opacity: 0, y: 18 }}
                        animate={
                          isActive
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 18 }
                        }
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                          delay: isActive ? 0.02 : 0,
                        }}
                        className="pointer-events-none mt-0 overflow-hidden md:mt-0"
                      >
                        <p
                          className={`max-w-[640px] text-[11px] leading-[1.65] text-white/78 sm:text-[12px] sm:leading-[1.72] md:text-[13px] ${
                            isActive ? "pointer-events-auto" : ""
                          }`}
                        >
                          {card.description}
                        </p>
                      </motion.div>

                      <div className="pointer-events-none absolute inset-x-5 bottom-4 flex items-center justify-between gap-3 md:hidden sm:inset-x-6 sm:bottom-6">
                        <span className="select-none text-[9px] font-semibold uppercase tracking-[0.28em] text-white/55">
                          {isActive ? "Tap to close" : "Tap to reveal"}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-10 ">
          <div className="mx-auto overflow-hidden border border-black/10 bg-white">
            <div className="relative grid gap-10 px-6 py-10 sm:grid-cols-3 sm:px-8 sm:py-12">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(460px 180px at 15% 55%, rgba(126,44,255,0.12), rgba(255,255,255,0) 60%), radial-gradient(320px 160px at 76% 52%, rgba(255,255,255,0.45), rgba(255,255,255,0) 65%), linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0) 55%), linear-gradient(180deg, rgba(255,255,255,0.94), rgba(247,246,242,0.96))",
                }}
              />

              {metrics.map((metric) => (
                <div key={metric.label} className="relative">
                  <SplitText
                    tag="p"
                    text={metric.value}
                    className={`block text-[34px] font-black tracking-[-0.05em] sm:text-[44px] ${
                      metric.accent
                        ? "text-[#7C3AED]"
                        : "text-[#171717]"
                    }`}
                    textAlign="center"
                    splitType="chars"
                    delay={10}
                    duration={0.55}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                  <SplitText
                    tag="p"
                    text={metric.label}
                    className="mt-1 block text-[9px] font-medium uppercase tracking-[0.3em] text-black/60"
                    textAlign="center"
                    splitType="chars"
                    delay={8}
                    duration={0.45}
                    from={{ opacity: 0, y: 8 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto overflow-hidden border border-black/10 bg-white">
            <div className="relative flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-8 sm:py-12">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(460px 180px at 50% 20%, rgba(126,44,255,0.12), rgba(255,255,255,0) 60%), radial-gradient(320px 160px at 50% 80%, rgba(255,255,255,0.45), rgba(255,255,255,0) 65%), linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0) 55%), linear-gradient(180deg, rgba(255,255,255,0.94), rgba(247,246,242,0.96))",
                }}
              />

              <SplitText
                tag="h2"
                text="READY TO BUILD WITH IQRATI?"
                className="relative mx-auto block max-w-[800px] text-[28px] font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#171717] sm:text-[42px]"
                textAlign="center"
                splitType="chars"
                delay={10}
                duration={0.55}
                from={{ opacity: 0, y: 12 }}
                to={{ opacity: 1, y: 0 }}
              />

              <SplitText
                tag="p"
                text="Let's discuss your current technology and business goals."
                className="relative mx-auto block max-w-[480px] text-[13px] leading-6 text-black/70 sm:text-[14px]"
                textAlign="center"
                splitType="words"
                delay={10}
                duration={0.5}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />

              <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex h-11 min-w-[200px] items-center justify-center border border-black/20 bg-white px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-black transition-colors hover:bg-[#f0eee8]"
                >
                  <SplitText
                    tag="span"
                    text="Schedule a Consultation"
                    className="block"
                    textAlign="center"
                    splitType="chars"
                    delay={8}
                    duration={0.45}
                    from={{ opacity: 0, y: 8 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </Link>
              </div>

              <div className="relative mt-2 flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-black/60">
                <span>
                  Contact: <span className="text-black/80">IQRATI LLC</span>
                </span>
                <a
                  href="mailto:Faizanali.35157@gmail.com"
                  className="text-[#7C3AED] normal-case tracking-normal hover:text-[#9b6ef0]"
                >
                  Faizanali.35157@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
