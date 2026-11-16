"use client";

import { FormEvent, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_CLASSES =
  "h-11 rounded-[10px] border border-black/15 bg-white px-3.5 text-[14px] normal-case tracking-normal text-[#171717] outline-none transition-colors placeholder:text-black/40 focus:border-[#b42318] sm:h-12 sm:px-4 sm:rounded-none";

const TEXTAREA_CLASSES =
  "min-h-[150px] resize-vertical rounded-[10px] border border-black/15 bg-white px-3.5 py-3.5 text-[14px] normal-case tracking-normal text-[#171717] outline-none transition-colors placeholder:text-black/40 focus:border-[#b42318] sm:min-h-[160px] sm:px-4 sm:py-4 sm:rounded-none";

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  }

  return errors;
}

export default function ContactEmailForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusTone, setStatusTone] = useState<"idle" | "success" | "error">("idle");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

  const isConfigured = useMemo(
    () => Boolean(serviceId && templateId && publicKey),
    [publicKey, serviceId, templateId],
  );

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusTone("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setErrors({});

    if (!isConfigured) {
      setStatusTone("error");
      setStatusMessage(
        "The form is not connected to a submission handler yet. Please email us directly at Faizanali.35157@gmail.com.",
      );
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusTone("idle");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.fullName,
          phone_number: values.phone,
          reply_to: values.email,
          sender_email: values.email,
          message: values.message,
        },
        {
          publicKey,
        },
      );

      setValues(initialValues);
      setStatusTone("success");
      setStatusMessage("Message sent successfully. We will get back to you soon.");
    } catch {
      setStatusTone("error");
      setStatusMessage("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full border border-black/10 bg-white p-4 sm:p-6 lg:p-8"
    >
      <div className="grid gap-4 sm:gap-5">
        <label className="grid gap-2 text-[9px] font-medium uppercase tracking-[0.26em] text-black/65 sm:text-[10px] sm:tracking-[0.28em]">
          Full Name
          <input
            type="text"
            name="fullName"
            required
            autoComplete="name"
            inputMode="text"
            aria-invalid={Boolean(errors.fullName)}
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className={FIELD_CLASSES}
            placeholder="Your full name"
          />
          {errors.fullName ? (
            <span className="text-[10px] font-normal normal-case tracking-normal text-[#b42318]">
              {errors.fullName}
            </span>
          ) : null}
        </label>

        <label className="grid gap-2 text-[9px] font-medium uppercase tracking-[0.26em] text-black/65 sm:text-[10px] sm:tracking-[0.28em]">
          Email Address
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={FIELD_CLASSES}
            placeholder="you@email.com"
          />
          {errors.email ? (
            <span className="text-[10px] font-normal normal-case tracking-normal text-[#b42318]">
              {errors.email}
            </span>
          ) : null}
        </label>

        <label className="grid gap-2 text-[9px] font-medium uppercase tracking-[0.26em] text-black/65 sm:text-[10px] sm:tracking-[0.28em]">
          Phone Number
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={FIELD_CLASSES}
            placeholder="Your phone number"
          />
          {errors.phone ? (
            <span className="text-[10px] font-normal normal-case tracking-normal text-[#b42318]">
              {errors.phone}
            </span>
          ) : null}
        </label>

        <label className="grid gap-2 text-[9px] font-medium uppercase tracking-[0.26em] text-black/65 sm:text-[10px] sm:tracking-[0.28em]">
          Message
          <textarea
            name="message"
            required
            rows={6}
            aria-invalid={Boolean(errors.message)}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={TEXTAREA_CLASSES}
            placeholder="Tell us what you need."
          />
          {errors.message ? (
            <span className="text-[10px] font-normal normal-case tracking-normal text-[#b42318]">
              {errors.message}
            </span>
          ) : null}
        </label>
      </div>

      <div className="mt-6 flex flex-col items-center gap-4 sm:mt-6 sm:items-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-w-[220px] h-11 items-center justify-center border border-[#b42318] bg-[#b42318] px-5 text-[10px] font-semibold uppercase tracking-[0.26em] text-white transition-colors hover:bg-[#991b1b] active:scale-[0.995] disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[240px] sm:h-12 sm:px-6 sm:tracking-[0.28em]"
        >
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
        </button>

        {statusMessage ? (
          <p
            role="status"
            className={`w-full text-center text-[12px] leading-6 sm:text-left ${
              statusTone === "success" ? "text-black/70" : "text-[#b42318]"
            }`}
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
