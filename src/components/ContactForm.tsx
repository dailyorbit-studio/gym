"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import MagneticButton from "@/components/MagneticButton";
import { CheckIcon, WhatsAppIcon } from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";

type Fields = { name: string; phone: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", phone: "", email: "", message: "" };

/** Ten digits, optionally with +91 / 0 prefix and spaces or dashes. */
const PHONE_RE = /^(?:\+?91[\s-]?|0)?[6-9]\d{4}[\s-]?\d{5}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please tell us your name.";
  if (!PHONE_RE.test(values.phone.trim()))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (values.email.trim() && !EMAIL_RE.test(values.email.trim()))
    errors.email = "That email address doesn't look right.";
  if (values.message.trim().length < 10)
    errors.message = "A little more detail helps us help you (10+ characters).";
  return errors;
}

const field =
  "w-full border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm text-white " +
  "placeholder:text-white/30 transition-colors duration-300 " +
  "focus:border-brand focus:bg-white/[0.07] focus:outline-none";

/**
 * Enquiry form. There is no mail backend on this site, so a valid submission
 * hands the visitor straight to WhatsApp with their details pre-filled — the
 * fastest path to an actual conversation with the gym.
 */
export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [sent, setSent] = useState(false);

  function update(key: keyof Fields, value: string) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  }

  function blur(key: keyof Fields) {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, phone: true, email: true, message: true });
    if (Object.keys(found).length > 0) {
      // Move focus to the first problem so screen readers announce it.
      const first = Object.keys(found)[0];
      document.getElementById(first)?.focus();
      return;
    }

    const message = [
      `Hi ${site.name}!`,
      ``,
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email.trim() ? `Email: ${values.email.trim()}` : null,
      ``,
      values.message.trim(),
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setSent(false);
  }

  return (
    <div className="relative border border-white/10 bg-char p-7 sm:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="py-8 text-center"
          >
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 240, damping: 16 }}
              className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand text-white"
            >
              <CheckIcon className="h-7 w-7" />
            </motion.span>

            <h3 className="mt-6 text-3xl text-white">You&apos;re one message away</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/55">
              We&apos;ve opened WhatsApp with your details filled in — just hit send and our
              team will reply shortly. If the tab didn&apos;t open, call us on{" "}
              <a
                href={`tel:${site.phones[0].tel}`}
                className="font-semibold text-brand hover:underline"
              >
                {site.phones[0].label}
              </a>
              .
            </p>

            <button
              type="button"
              onClick={reset}
              className="mt-7 font-heading text-[11px] uppercase tracking-[0.24em] text-white/50 underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Full name"
                required
                value={values.name}
                error={touched.name ? errors.name : undefined}
                onChange={(v) => update("name", v)}
                onBlur={() => blur("name")}
                placeholder="Rohit Sharma"
                autoComplete="name"
              />
              <Field
                id="phone"
                label="Phone"
                required
                type="tel"
                value={values.phone}
                error={touched.phone ? errors.phone : undefined}
                onChange={(v) => update("phone", v)}
                onBlur={() => blur("phone")}
                placeholder="98765 43210"
                autoComplete="tel"
              />
            </div>

            <Field
              id="email"
              label="Email"
              hint="optional"
              type="email"
              value={values.email}
              error={touched.email ? errors.email : undefined}
              onChange={(v) => update("email", v)}
              onBlur={() => blur("email")}
              placeholder="you@example.com"
              autoComplete="email"
            />

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60"
              >
                Message <span className="text-brand">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                onBlur={() => blur("message")}
                placeholder="I'd like to book a free trial and know more about the 6-month membership."
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                className={`${field} resize-y ${
                  touched.message && errors.message ? "border-brand" : ""
                }`}
              />
              {touched.message && errors.message && (
                <p id="message-error" role="alert" className="mt-2 text-xs text-brand">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="pt-2">
              <MagneticButton type="submit" variant="primary" fullWidth>
                <WhatsAppIcon className="h-4 w-4" />
                Send via WhatsApp
              </MagneticButton>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-white/35">
                Your details open in WhatsApp so you can send them in one tap. We never
                share your number.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  autoComplete?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  placeholder,
  required,
  hint,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60"
      >
        {label}{" "}
        {required ? (
          <span className="text-brand">*</span>
        ) : (
          hint && <span className="text-white/25">({hint})</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${field} ${error ? "border-brand" : ""}`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-brand">
          {error}
        </p>
      )}
    </div>
  );
}
