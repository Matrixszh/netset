import type { Metadata } from "next";
import ContactEmailForm from "@/components/ContactEmailForm";
import SideRays from "@/components/SideRays";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";

export const metadata: Metadata = {
  title: "Contact Us | IQRATI",
  description:
    "Get in touch with IQRATI LLC. Discuss fintech, education, government, AI, chatbot and CRM projects, or send a brief. Phone +1 (331) 246-6413.",
};

const contactChannels = [
  {
    title: "Direct Contact",
    subtitle: "Primary point of contact",
    label: "IQRATI LLC",
    supporting:
      "Talk to our team about your project, your timelines and the outcomes you are aiming for.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#EF4444]"
        aria-hidden="true"
      >
        <path
          d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 20c0-4 3.6-6 8-6s8 2 8 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    actions: [
      {
        type: "email" as const,
        label: "Faizanali.35157@gmail.com",
        href: "mailto:Faizanali.35157@gmail.com",
      },
      {
        type: "phone" as const,
        label: "+1 (331) 246-6413",
        href: "tel:+13312466413",
      },
    ],
  },
  {
    title: "Start a Project",
    subtitle: "Tell us what you need",
    label: "Project Enquiries",
    supporting:
      "Share a brief and we will respond with the right approach for your goals.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#EF4444]"
        aria-hidden="true"
      >
        <path
          d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 9h8M8 13h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    actions: [
      {
        type: "book" as const,
        label: "Open the contact form",
        href: "/contact/#form",
      },
      {
        type: "email" as const,
        label: "Email the team",
        href: "mailto:Faizanali.35157@gmail.com",
      },
    ],
  },
];

const channelReasons = [
  "Fintech and finance solutions",
  "Education technology",
  "State and local government services",
  "AI solutions & automation",
  "Chatbots & customer engagement",
  "CRM integration",
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f6f2] text-[#171717]">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(239,68,68,0.08), transparent 35%), linear-gradient(180deg, rgba(0,0,0,0.015), rgba(255,255,255,0))",
        }}
      />

      <SiteNavbar />

      <main className="relative z-10">
        <section className="relative border-b border-black/10 px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-28">
          <div className="pointer-events-none absolute inset-0 opacity-75">
            <SideRays
              speed={4.4}
              rayColor1="#EF4444"
              rayColor2="#ff3333"
              intensity={2.2}
              spread={0.6}
              origin="top-right"
              tilt={0}
              saturation={1.5}
              blend={0.75}
              falloff={1.2}
              opacity={1}
              className="h-full w-full"
            />
          </div>

          <div className="mx-auto flex min-h-[540px] max-w-[1480px] flex-col items-center justify-center text-center">
            <SplitText
              tag="p"
              text="Contact IQRATI / 04"
              className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#b42318]"
              textAlign="center"
              splitType="chars"
              delay={10}
              duration={0.5}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />

            <SplitText
              tag="h1"
              text={"LET'S BUILD\nSOMETHING\nWORTH LAUNCHING."}
              className="mt-8 max-w-[1300px] text-[58px] font-black uppercase leading-[0.86] tracking-[-0.07em] text-[#171717] sm:text-[88px] md:text-[118px] lg:text-[148px]"
              textAlign="center"
              splitType="lines"
              delay={14}
              duration={0.7}
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
            />

            <SplitText
              tag="p"
              text="Tell us about your project, your timelines, and the outcomes you are engineering for. We respond to every serious inquiry within one business day."
              className="mt-8 max-w-[780px] text-[15px] leading-[1.85] text-black/70 sm:text-[17px]"
              textAlign="center"
              splitType="words"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-10 grid w-full max-w-[920px] grid-cols-1 gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/70 sm:grid-cols-2 sm:text-[11px] lg:grid-cols-3 lg:text-[12px]">
              <div className="flex items-center justify-center border border-black/10 bg-white px-4 py-3 text-center">
                Response within 24h
              </div>
              <div className="flex items-center justify-center border border-black/10 bg-white px-4 py-3 text-center">
                Confidential NDAs on request
              </div>
              <div className="flex items-center justify-center border border-black/10 bg-white px-4 py-3 text-center sm:col-span-2 lg:col-span-1">
                Global client roster
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-3">
              <SplitText
                tag="p"
                text="Get in touch"
                className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#b42318]"
                textAlign="center"
                splitType="chars"
                delay={10}
                duration={0.5}
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h2"
                text={"TWO WAYS TO\nSTART THE CONVERSATION."}
                className="mt-6 mx-auto max-w-[900px] text-[34px] font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#171717] sm:text-[46px] lg:text-center lg:text-[58px]"
                textAlign="center"
                splitType="lines"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 16 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            {contactChannels.map((channel) => (
              <article
                key={channel.title}
                className="flex flex-col border border-black/10 bg-white px-5 py-6 sm:px-6 sm:py-7"
              >
                <div className="mb-6 sm:mb-7">{channel.icon}</div>

                <SplitText
                  tag="p"
                  text={channel.subtitle}
                  className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#b42318] sm:text-[10px]"
                  textAlign="left"
                  splitType="chars"
                  delay={8}
                  duration={0.45}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  tag="h3"
                  text={channel.label}
                  className="mt-3 text-[18px] font-semibold uppercase tracking-[-0.025em] text-[#171717] sm:text-[20px] lg:text-[22px]"
                  textAlign="left"
                  splitType="chars"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  tag="p"
                  text={channel.supporting}
                  className="mt-4 text-[12px] leading-[1.75] text-black/70 sm:text-[13px] lg:text-[14px]"
                  textAlign="left"
                  splitType="words"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <div className="mt-6 space-y-3 sm:mt-7">
                  {channel.actions.map((action) => {
                    const isExternal = /^https?:\/\//i.test(action.href);
                    const classes =
                      "flex items-center justify-between gap-3 border border-black/10 bg-[#f7f6f2] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/80 transition-colors hover:border-[#EF4444]/50 hover:text-[#171717] sm:text-[11px] sm:tracking-[0.22em]";

                    if (isExternal) {
                      return (
                        <a
                          key={action.label}
                          href={action.href}
                          target="_blank"
                          rel="noreferrer"
                          className={classes}
                        >
                          <span className="truncate">{action.label}</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      );
                    }

                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        className={classes}
                      >
                        <span className="truncate">{action.label}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-black/10 px-5 py-20 sm:px-8 sm:py-28 lg:py-32" id="form">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:items-start lg:gap-16">
            <div className="mx-auto w-full max-w-[540px] lg:mx-0">
              <SplitText
                tag="p"
                text="Send a message"
                className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#b42318]"
                textAlign="left"
                splitType="chars"
                delay={10}
                duration={0.5}
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h2"
                text={"TELL US ABOUT\nTHE BUILD."}
                className="mt-6 text-[36px] font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#171717] sm:text-[48px] lg:text-[60px]"
                textAlign="left"
                splitType="lines"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 16 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="p"
                text="Share a few details about your timeline, budget range, and what success looks like. Every submission lands directly in the inbox of the partner who will run your engagement."
                className="mt-8 max-w-[480px] text-[14px] leading-[1.85] text-black/70 sm:text-[15px] lg:text-[16px]"
                textAlign="left"
                splitType="words"
                delay={12}
                duration={0.55}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />

              <div className="mt-10 border border-black/10 bg-white px-5 py-6 sm:px-6 sm:py-7">
                <SplitText
                  tag="p"
                  text="Popular reasons to reach out"
                  className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b42318] sm:tracking-[0.32em]"
                  textAlign="left"
                  splitType="chars"
                  delay={8}
                  duration={0.45}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <ul className="mt-5 space-y-3 text-[11px] leading-[1.8] text-black/75 sm:text-[12px] lg:text-[13px]">
                  {channelReasons.map((reason) => (
                    <li
                      key={reason}
                      className="flex items-start gap-3 before:mt-[8px] before:block before:h-[5px] before:w-[5px] before:shrink-0 before:rounded-full before:bg-[#EF4444]"
                    >
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full border border-black/10 bg-white px-4 py-5 sm:px-6 sm:py-7 lg:p-8">
              <ContactEmailForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
