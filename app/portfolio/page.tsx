import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShapeGrid from "@/components/ShapeGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";
import { projects, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio | IQRATI",
  description:
    "Selected IQRATI client work — NexaConnect, LumenCraft Interiors, Shopivia and VeloFinance. AI customer support, responsive websites, ecommerce and CRM integration.",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-black/10 bg-white transition-colors duration-300 hover:border-[#8a6b00]/45">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span className="absolute left-5 top-5 text-[11px] font-semibold tracking-[0.28em] text-[#FFD700]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <SplitText
          tag="p"
          text={project.category}
          className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#806000]"
          textAlign="left"
          splitType="chars"
          delay={8}
          duration={0.45}
          from={{ opacity: 0, y: 8 }}
          to={{ opacity: 1, y: 0 }}
        />

        <SplitText
          tag="h3"
          text={project.name}
          className="mt-3 text-[26px] font-black uppercase leading-[0.98] tracking-[-0.04em] text-[#171717] sm:text-[32px]"
          textAlign="left"
          splitType="words, chars"
          delay={10}
          duration={0.6}
          from={{ opacity: 0, y: 14 }}
          to={{ opacity: 1, y: 0 }}
        />

        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
          Client: {project.client}
        </p>

        <p className="mt-5 text-[13px] leading-7 text-black/70 sm:text-[14px]">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="border border-black/10 bg-[#f7f6f2] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-black/70"
            >
              {feature}
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-black/10 pt-5 text-[12px] font-semibold uppercase leading-6 tracking-[0.1em] text-[#806000] sm:text-[13px]">
          {project.results}
        </p>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f7f6f2] text-[#171717]">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 16%, rgba(255,215,0,0.09), transparent 28%), linear-gradient(180deg, rgba(0,0,0,0.015), rgba(255,255,255,0) 25%), linear-gradient(180deg, #f7f6f2, #f7f6f2)",
          backgroundSize: "100% 100%, 100% 100%, 100% 100%",
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
        <ShapeGrid
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#FFD700"
          hoverFillColor="#e8e5dc"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(255,215,0,0.06),transparent_26%)]" />

      <SiteNavbar />

      <main className="relative z-10">
        <section className="px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
          <div className="mx-auto flex min-h-[70vh] max-w-[1600px] items-center justify-center text-center">
            <div className="flex flex-col items-center">
              <SplitText
                tag="p"
                text="IQRATI PORTFOLIO"
                className="block text-[11px] font-medium uppercase tracking-[0.38em] text-[#806000]"
                textAlign="center"
                splitType="chars"
                delay={14}
                duration={0.55}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h1"
                text={"SELECTED\nWORK."}
                className="mt-8 block max-w-[980px] text-[54px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#171717] sm:text-[86px] md:text-[112px] lg:text-[138px]"
                textAlign="center"
                splitType="lines"
                delay={16}
                duration={0.8}
                from={{ opacity: 0, y: 28 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="p"
                text="A look at the platforms, websites and integrations IQRATI has delivered across fintech, ecommerce and customer support."
                className="mt-8 block max-w-[680px] text-[14px] leading-8 text-black/70 sm:text-[15px]"
                textAlign="center"
                splitType="words"
                delay={14}
                duration={0.6}
                from={{ opacity: 0, y: 14 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1600px] border-t border-black/10 pt-10">
            <div className="mb-10 flex flex-col items-center text-center">
              <SplitText
                tag="p"
                text="CASE STUDIES"
                className="block text-[11px] font-medium uppercase tracking-[0.38em] text-[#806000]"
                textAlign="center"
                splitType="chars"
                delay={14}
                duration={0.55}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h2"
                text="Projects delivered end to end."
                className="mt-5 block max-w-[900px] text-[38px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#171717] sm:text-[62px]"
                textAlign="center"
                splitType="words, chars"
                delay={14}
                duration={0.7}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center border border-black/10 bg-gradient-to-br from-[#FFD700]/10 via-white to-[#f0eee8] p-6 text-center sm:p-10">
            <SplitText
              tag="p"
              text="GET STARTED"
              className="block text-[11px] font-medium uppercase tracking-[0.38em] text-[#806000]"
              textAlign="center"
              splitType="chars"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="h2"
              text="YOUR PROJECT COULD BE NEXT."
              className="mt-5 block max-w-[840px] text-[38px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#171717] sm:text-[62px]"
              textAlign="center"
              splitType="words, chars"
              delay={14}
              duration={0.7}
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
            />
            <div className="mt-10 flex w-full justify-center">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 min-w-[220px] items-center justify-center border border-[#FFD700] bg-[#FFD700] px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-black transition-colors hover:bg-[#FFD700]/90"
                >
                  <SplitText
                    tag="span"
                    text="Start A Project"
                    className="text-[10px] font-medium uppercase tracking-[0.26em] text-black"
                    textAlign="center"
                    splitType="chars"
                    delay={5}
                    duration={0.38}
                    from={{ opacity: 0, y: 6 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-11 min-w-[220px] items-center justify-center border border-black/20 bg-transparent px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-[#171717] transition-colors hover:bg-black/5"
                >
                  <SplitText
                    tag="span"
                    text="Explore Services"
                    className="text-[10px] font-medium uppercase tracking-[0.26em] text-[#171717]"
                    textAlign="center"
                    splitType="chars"
                    delay={5}
                    duration={0.38}
                    from={{ opacity: 0, y: 6 }}
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
