"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import Beams from "@/components/Beams";
import DotGrid from "@/components/DotGrid";
import Globe, { type GlobeLocation } from "@/components/Globe/Globe";
import ServiceIcon from "@/components/ServiceIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";

type SpotlightSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
  imagePosition: "left" | "right";
  imageSrc: string;
};

function SpotlightSection({
  eyebrow,
  title,
  description,
  meta,
  imagePosition,
  imageSrc,
}: SpotlightSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      className="border-t border-black/10 bg-[#f0eee8]"
    >
      <div className="grid min-h-[640px] md:grid-cols-2">
        <motion.div
          style={{ y: textY }}
          className={[
            "flex items-center px-6 py-14 sm:px-10 md:px-14",
            imagePosition === "right" ? "md:order-1" : "md:order-2",
          ].join(" ")}
        >
          <div className="max-w-[520px]">
            <SplitText
              tag="p"
              text={eyebrow}
              className="text-[10px] font-semibold tracking-[0.28em] text-black/60"
              textAlign="left"
              splitType="chars"
              delay={10}
              duration={0.45}
              from={{ opacity: 0, y: 12 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="h3"
              text={title}
              className="mt-6 text-[34px] font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#171717] sm:text-[48px] md:text-[58px]"
              textAlign="left"
              splitType="words, chars"
              delay={12}
              duration={0.65}
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="p"
              text={description}
              className="mt-6 max-w-[440px] text-[14px] leading-8 text-black/70 sm:text-[15px]"
              textAlign="left"
              splitType="words"
              delay={10}
              duration={0.55}
              from={{ opacity: 0, y: 12 }}
              to={{ opacity: 1, y: 0 }}
            />
            {meta ? (
              <SplitText
                tag="p"
                text={meta}
                className="mt-6 max-w-[440px] border-t border-black/10 pt-5 text-[11px] font-semibold uppercase leading-6 tracking-[0.18em] text-[#8a6b00]"
                textAlign="left"
                splitType="words"
                delay={8}
                duration={0.5}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
            ) : null}
          </div>
        </motion.div>

        <div
          className={[
            "relative min-h-[360px] overflow-hidden",
            imagePosition === "right" ? "md:order-2" : "md:order-1",
          ].join(" ")}
        >
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-x-0 -top-[12%] -bottom-[12%] bg-cover bg-center"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${imageSrc}')` }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/45 to-black/75" />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {

const spotlightSections: SpotlightSectionProps[] = projects.map(
  (project, index) => ({
    eyebrow: `// ${project.category.toUpperCase()}`,
    title: project.name,
    description: project.description,
    meta: `Client: ${project.client} — ${project.results}`,
    imagePosition: index % 2 === 0 ? "right" : "left",
    imageSrc: project.image,
  }),
);
  const globeLocations: GlobeLocation[] = [];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f7f6f2] text-[#171717]">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(900px 520px at 50% 0%, rgba(255,215,0,0.08), rgba(247,246,242,0) 60%), radial-gradient(900px 520px at 50% 20%, rgba(124,58,237,0.04), rgba(247,246,242,0) 65%), linear-gradient(180deg, #f7f6f2, #f7f6f2)",
        }}
      />

      <SiteNavbar />

      <main className="relative z-10 mx-auto w-full flex-1">
        <section >
          <div className="relative overflow-hidden h-[100vh] bg-[#f7f6f2] px-4 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20">
            <div className="pointer-events-none absolute inset-0">
              <Beams
                beamWidth={3}
                beamHeight={30}
                beamNumber={20}
                lightColor="#FFD700"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={30}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.035),transparent_18%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/40" />

            <div className="relative pt-40 md:pt-10">
              <SplitText
                tag="h1"
                text={"SMART\nSOLUTIONS\nFOR A\nDIGITAL\nWORLD"}
                className="mx-auto block max-w-full text-center text-[56px] font-black uppercase leading-[0.82] tracking-[-0.06em] text-[#171717] sm:text-[86px] md:text-[100px] lg:text-[116px]"
                textAlign="center"
                splitType="lines"
                delay={16}
                duration={0.8}
                from={{ opacity: 0, y: 36 }}
                to={{ opacity: 1, y: 0 }}
              />

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <Link
                  href="/about"
                  className="inline-flex h-[42px] min-w-[142px] items-center justify-center border border-black/25 bg-transparent px-5 text-sm font-semibold tracking-[0.35em] text-[#171717] transition-colors hover:bg-black/5"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-[42px] min-w-[142px] items-center justify-center border border-black/25 bg-transparent px-5 text-sm font-semibold tracking-[0.35em] text-[#171717] transition-colors hover:bg-black/5"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-0 sm:mt-0">
          <div className="bg-white px-6 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-3">
                <SplitText
                  tag="p"
                  text="// THE COMPANY"
                  className="pt-2 text-[10px] font-semibold tracking-[0.28em] text-black/60"
                  textAlign="left"
                  splitType="chars"
                  delay={10}
                  duration={0.45}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>

              <div className="md:col-span-8 md:col-start-5">
                <SplitText
                  tag="p"
                  text="Technology designed to make businesses faster, smarter, and more connected."
                  className="max-w-[720px] text-[30px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#171717] sm:text-[44px] md:text-[58px] lg:text-[66px]"
                  textAlign="left"
                  splitType="words, chars"
                  delay={12}
                  duration={0.65}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <SplitText
                  tag="p"
                  text="At IQRATI, the journey began with a simple idea — to make technology accessible, efficient, and empowering for businesses of all sizes. We believe in the power of innovation to transform businesses and create meaningful digital experiences. Our team focuses on understanding client needs, turning challenges into opportunities, and delivering technology solutions that produce measurable results."
                  className="mt-8 max-w-[720px] text-[14px] leading-[1.85] tracking-[-0.01em] text-black/70 md:text-[15px]"
                  textAlign="left"
                  splitType="words"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 12 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="h-[100vh] border-y border-black/10 bg-[#f0eee8] px-6 py-16 sm:px-10 sm:py-20 md:px-14 ">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-[640px]">
              <SplitText
                tag="p"
                text="// GLOBAL DELIVERY"
                className="text-[10px] font-semibold tracking-[0.3em] text-[#806000]"
                textAlign="left"
                splitType="chars"
                delay={10}
                duration={0.45}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h2"
                text="IQRATI — SMART SOLUTIONS FOR A DIGITAL WORLD."
                className="mt-6 max-w-[320px] text-[26px] font-black uppercase leading-[0.94] tracking-[-0.05em] text-[#171717] sm:max-w-[520px] sm:text-[42px] md:max-w-none md:text-[64px]"
                textAlign="left"
                splitType="words, chars"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="p"
                text="From payments and financial analytics to AI-powered automation, IQRATI connects distributed teams, markets and audiences into one coordinated digital experience."
                className="mt-6 max-w-[330px] text-[14px] leading-7 text-black/70 sm:max-w-[560px] sm:text-[16px] sm:leading-8"
                textAlign="left"
                splitType="words"
                delay={10}
                duration={0.55}
                from={{ opacity: 0, y: 12 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <div className="pb-15 relative mt-10 flex h-[20vh] w-full items-center justify-center overflow-visible px-4 sm:h-[45vh] sm:px-0 lg:mt-0 ">
              <div className="pt-25 relative mx-auto flex h-full h-[20vh] w-full items-center justify-center sm:min-h-[45vh] ">
                <Globe
                  locations={globeLocations}
                  autoRotate={true}
                  rotationSpeed={0.5}
                  showAtmosphere={false}
                  showStars={true}
                  enableZoom={false}
                  className="mx-auto justify-center sm:w-[40vw] w-[90vw] h-full h-[320px] px-4  lg:px-10"
                  />
              </div>
      </div>
        </div>
    </section>

      <section className="pb-20 bg-white">
          <SplitText
            tag="h2"
            text="Services"
            className="py-10 text-center text-[34px] font-black uppercase tracking-[-0.04em] text-[#171717] sm:text-[52px]"
            textAlign="center"
            splitType="chars"
            delay={12}
            duration={0.6}
            from={{ opacity: 0, y: 14 }}
            to={{ opacity: 1, y: 0 }}
          />

          <div className="mt-10 px-5 grid gap-6 md:grid-cols-3 md:gap-6">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="min-h-[275px] border border-black/10 bg-[#f7f6f2] p-7 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#FFD700] hover:shadow-amber-500 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <SplitText
                      tag="p"
                      text={service.number}
                      className="text-[18px] font-semibold tracking-[-0.04em] text-black/80"
                      textAlign="left"
                      splitType="chars"
                      delay={10}
                      duration={0.45}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                    <ServiceIcon
                      icon={service.icon}
                      className="h-[19px] w-[19px] text-[#806000]"
                    />
                  </div>
                  <SplitText
                    tag="h3"
                    text={service.title}
                    className="mt-14 text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#171717]"
                    textAlign="left"
                    splitType="words, chars"
                    delay={10}
                    duration={0.6}
                    from={{ opacity: 0, y: 16 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                  <SplitText
                    tag="p"
                    text={service.description}
                    className="mt-5 max-w-[250px] text-[13px] leading-7 text-black/70"
                    textAlign="left"
                    splitType="words"
                    delay={8}
                    duration={0.5}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                  <Link
                    href={service.cta.href}
                    className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#806000] transition-colors hover:text-[#664b00]"
                  >
                    {service.cta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}

          </div>
        </section>

        {spotlightSections.map((section) => (
          <SpotlightSection key={section.title} {...section} />
        ))}

        <section >
          <div className="relative overflow-hidden px-6 py-14 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0">
              <DotGrid
                dotSize={5}
                gap={15}
                baseColor="#d8d3c8"
                activeColor="#FFD700"
                proximity={120}
                shockRadius={250}
                shockStrength={10}
                resistance={750}
                returnDuration={1.5}
                className="h-full w-full p-0"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-white/55" />

            <div className="relative">
              <SplitText
                tag="h2"
                text={"READY TO BUILD WITH\nIQRATI?"}
                className="block text-center text-[24px] font-black uppercase leading-[1.05] tracking-[-0.03em] sm:text-6xl"
                textAlign="center"
                splitType="lines"
                delay={14}
                duration={0.7}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-black/20 bg-white/80 px-5 text-[12px] font-semibold tracking-[0.22em] text-[#171717] backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <SplitText
                    tag="span"
                    text="START A PROJECT"
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
