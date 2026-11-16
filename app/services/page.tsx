import type { Metadata } from "next";
import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import ShapeGrid from "@/components/ShapeGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";
import { services, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | IQRATI",
  description:
    "IQRATI delivers technology solutions across fintech and finance, education, state and local government, AI, chatbots and CRM integration.",
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="border border-black/10 bg-white p-6 text-center transition-colors duration-300 hover:border-[#10d7d1]/50 sm:p-8">
      <div className="flex items-center justify-center gap-6">
        <span className="h-px w-full max-w-[180px] bg-black/10" />
        <SplitText
          tag="p"
          text={service.number}
          className="text-[15px] font-semibold tracking-[0.18em] text-[#007c78]"
          textAlign="center"
          splitType="chars"
          delay={8}
          duration={0.42}
          from={{ opacity: 0, y: 8 }}
          to={{ opacity: 1, y: 0 }}
        />
        <span className="h-px w-full max-w-[180px] bg-black/10" />
      </div>

      <div className="mx-auto mt-7 flex h-16 w-16 items-center justify-center border border-[#10d7d1]/30 bg-[#10d7d1]/5 text-[#007c78]">
        <ServiceIcon icon={service.icon} className="h-7 w-7" />
      </div>

      <SplitText
        tag="h3"
        text={service.title}
        className="mx-auto mt-6 max-w-[760px] text-[28px] font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#171717] sm:text-[38px]"
        textAlign="center"
        splitType="words, chars"
        delay={10}
        duration={0.58}
        from={{ opacity: 0, y: 14 }}
        to={{ opacity: 1, y: 0 }}
      />

      <SplitText
        tag="p"
        text={service.description}
        className="mx-auto mt-5 max-w-[720px] text-[15px] leading-8 text-black/70 sm:text-[16px]"
        textAlign="center"
        splitType="words"
        delay={8}
        duration={0.5}
        from={{ opacity: 0, y: 10 }}
        to={{ opacity: 1, y: 0 }}
      />

      <div className="mt-8 flex justify-center">
        <Link
          href={service.cta.href}
          className="inline-flex h-11 items-center justify-center border border-[#10d7d1]/40 px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-[#007c78] transition-colors hover:bg-[#10d7d1]/10"
        >
          <SplitText
            tag="span"
            text={service.cta.label}
            className="text-[10px] font-medium uppercase tracking-[0.26em] text-[#007c78]"
            textAlign="center"
            splitType="chars"
            delay={5}
            duration={0.38}
            from={{ opacity: 0, y: 6 }}
            to={{ opacity: 1, y: 0 }}
          />
        </Link>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f7f6f2] text-[#171717]">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 16%, rgba(16,215,209,0.07), transparent 28%), linear-gradient(180deg, rgba(0,0,0,0.015), rgba(255,255,255,0) 25%), linear-gradient(180deg, #f7f6f2, #f7f6f2)",
          backgroundSize: "100% 100%, 100% 100%, 100% 100%",
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
        <ShapeGrid
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#10d7d1"
          hoverFillColor="#e8e5dc"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(141,184,169,0.08),transparent_26%)]" />

      <SiteNavbar />

      <main className="relative z-10">
        <section className="px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
          <div className="mx-auto flex min-h-[78vh] max-w-[1600px] items-center justify-center text-center">
            <div className="flex flex-col items-center">
              <SplitText
                tag="p"
                text="IQRATI SERVICES"
                className="block text-[11px] font-medium uppercase tracking-[0.38em] text-[#007c78]"
                textAlign="center"
                splitType="chars"
                delay={14}
                duration={0.55}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h1"
                text={"SMART SOLUTIONS\nFOR A DIGITAL\nWORLD."}
                className="mt-8 block max-w-[980px] text-[54px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#171717] sm:text-[86px] md:text-[112px] lg:text-[138px]"
                textAlign="center"
                splitType="lines"
                delay={16}
                duration={0.8}
                from={{ opacity: 0, y: 28 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>
          </div>
        </section>

        <section className="px-5 pb-10 sm:px-8">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center border-t border-black/10 pt-10 text-center">
            <SplitText
              tag="p"
              text="OUR SERVICES"
              className="block text-[11px] font-medium uppercase tracking-[0.38em] text-[#007c78]"
              textAlign="center"
              splitType="chars"
              delay={14}
              duration={0.55}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="h2"
              text="Six service areas, engineered end to end."
              className="mt-5 block max-w-[900px] text-[38px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#171717] sm:text-[62px]"
              textAlign="center"
              splitType="words, chars"
              delay={14}
              duration={0.7}
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="p"
              text="From fintech and government to AI, chatbots and CRM integration — every IQRATI service is built to make technology accessible, efficient and empowering for your business."
              className="mt-6 block max-w-[760px] text-[14px] leading-8 text-black/70 sm:text-[15px]"
              textAlign="center"
              splitType="words"
              delay={14}
              duration={0.6}
              from={{ opacity: 0, y: 16 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center border border-black/10 bg-gradient-to-br from-[#10d7d1]/10 via-white to-[#f0eee8] p-6 text-center sm:p-10">
            <SplitText
              tag="p"
              text="GET STARTED"
              className="block text-[11px] font-medium uppercase tracking-[0.38em] text-[#007c78]"
              textAlign="center"
              splitType="chars"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="h2"
              text="READY TO BUILD WITH IQRATI?"
              className="mt-5 block max-w-[840px] text-[38px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#171717] sm:text-[62px]"
              textAlign="center"
              splitType="words, chars"
              delay={14}
              duration={0.7}
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="p"
              text="Let's discuss your current technology and business goals."
              className="mt-6 block max-w-[620px] text-[14px] leading-8 text-black/70 sm:text-[15px]"
              textAlign="center"
              splitType="words"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 12 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-10 flex w-full justify-center">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 min-w-[220px] items-center justify-center border border-[#10d7d1] bg-[#10d7d1] px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-black transition-colors hover:bg-[#10d7d1]/90"
                >
                  <SplitText
                    tag="span"
                    text="Schedule A Consultation"
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
                  href="mailto:Faizanali.35157@gmail.com"
                  className="inline-flex h-11 min-w-[220px] items-center justify-center border border-black/20 bg-transparent px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-[#171717] transition-colors hover:bg-black/5"
                >
                  <SplitText
                    tag="span"
                    text="Get In Touch"
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
