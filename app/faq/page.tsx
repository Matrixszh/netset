import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import ShapeGrid from "@/components/ShapeGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";

export const metadata: Metadata = {
  title: "FAQ | IQRATI",
  description:
    "Frequently asked questions about IQRATI — our services, how we approach projects, the organisations we work with and how to get started.",
};

const faqs: FaqItem[] = [
  {
    question: "What services does IQRATI provide?",
    answer:
      "IQRATI delivers technology solutions across fintech and finance, education, state and local government, AI solutions, chatbots and CRM integration — covering everything from payments and learning platforms to automation, customer engagement and sales operations.",
  },
  {
    question: "How does IQRATI approach a new project?",
    answer:
      "We begin by understanding your goals and challenges, then design and deliver solutions engineered for measurable results. Strategy, design and engineering work as one accountable team from first conversation to launch.",
  },
  {
    question: "Which industries and organisations does IQRATI work with?",
    answer:
      "We work with businesses, educational institutions and government organisations, as well as teams adopting AI, chatbots and CRM to improve how they operate and serve their customers.",
  },
  {
    question: "How can I start a project with IQRATI?",
    answer:
      "Reach out through our contact form, email Faizanali.35157@gmail.com, or call +1 (331) 246-6413. We respond to every serious enquiry with the right next step for your goals.",
  },
];

export default function FaqPage() {
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
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
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

      <SiteNavbar />

      <main className="relative z-10">
        <section className="px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
          <div className="mx-auto flex min-h-[52vh] max-w-[1600px] items-center justify-center text-center">
            <div className="flex flex-col items-center">
              <SplitText
                tag="p"
                text="IQRATI FAQ"
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
                text={"FREQUENTLY\nASKED."}
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
                text="Answers to the questions we hear most often about working with IQRATI."
                className="mt-8 block max-w-[640px] text-[14px] leading-8 text-black/70 sm:text-[15px]"
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
          <div className="mx-auto max-w-[1600px]">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center border border-black/10 bg-gradient-to-br from-[#10d7d1]/10 via-white to-[#f0eee8] p-6 text-center sm:p-10">
            <SplitText
              tag="p"
              text="STILL HAVE QUESTIONS?"
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
              text="LET'S TALK IT THROUGH."
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
                  className="inline-flex h-11 min-w-[220px] items-center justify-center border border-[#10d7d1] bg-[#10d7d1] px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-black transition-colors hover:bg-[#10d7d1]/90"
                >
                  <SplitText
                    tag="span"
                    text="Contact Us"
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
                    text="Email Us"
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
