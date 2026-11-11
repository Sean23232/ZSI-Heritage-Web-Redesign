import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { CONTACT } from "../data/site";
import {
  IconAlert,
  IconArrow,
  IconCalendar,
  IconCheck,
  IconMail,
  IconPhone,
  IconPin,
} from "./Icons";
import { Reveal } from "./Reveal";

export interface Prefill {
  make: string;
  part: string;
  nonce: number;
}

/* ────────────────────────────────────────────────────────────────────
   WORDPRESS INTEGRATION POINT
   In the production WordPress build, wire this form's onSubmit to a
   form plugin or custom REST route (no ecommerce dependencies):

     • WPForms / Contact Form 7 (recommended, free)
       – replace this <form> with the plugin shortcode; keep the same
         field names below so data maps 1:1.
     • or a REST endpoint, e.g.
       POST /wp-json/zsi/v1/parts-inquiry
       body: { name, email, phone, make, model, year, part, details }

   On success, keep the confirmation panel rendered below.
   ──────────────────────────────────────────────────────────────────── */

interface FormState {
  name: string;
  email: string;
  phone: string;
  make: string;
  model: string;
  year: string;
  part: string;
  details: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  make: "",
  model: "",
  year: "",
  part: "",
  details: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    e.email = "Please enter a valid email address.";
  if (!f.make) e.make = "Please select a vehicle make.";
  if (f.year.trim() && !/^\d{4}$/.test(f.year.trim()))
    e.year = "Enter a 4-digit year, or leave blank.";
  if (f.part.trim().length < 2)
    e.part = "Please describe the part or component you need.";
  return e;
}

const inputCls =
  "w-full border bg-white px-3.5 py-3 text-[14.5px] text-charcoal placeholder:text-grey/60 transition-colors focus:outline-none focus:border-navy";
const labelCls =
  "mb-1.5 block font-cond text-[11px] font-semibold tracking-[0.2em] text-charcoal/70 uppercase";
const errorCls = "mt-1.5 flex items-center gap-1.5 text-[12px] text-red";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className={errorCls} role="alert">
      <IconAlert className="h-3.5 w-3.5 shrink-0" />
      {msg}
    </p>
  );
}

function InquiryForm({ prefill }: { prefill: Prefill | null }) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);
  const [flash, setFlash] = useState(false);
  const detailsRef = useRef<HTMLTextAreaElement | null>(null);

  /* Prefill arrive from a parts-directory item, search result or CTA */
  useEffect(() => {
    if (!prefill) return;
    setSubmitted(null);
    setForm((f) => ({ ...f, make: prefill.make, part: prefill.part }));
    setFlash(true);
    const t = window.setTimeout(() => setFlash(false), 2400);
    const focus = window.setTimeout(
      () => detailsRef.current?.focus({ preventScroll: true }),
      700
    );
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(focus);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill?.nonce]);

  const set = (key: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    /* → WORDPRESS INTEGRATION POINT: submit to endpoint here */
    setSubmitted(form);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col justify-center border border-line bg-paper p-8 md:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-red/30 bg-red/10">
          <IconCheck className="h-7 w-7 text-red" />
        </span>
        <h3 className="mt-5 text-center font-serif text-2xl font-bold text-navy">
          Inquiry Received — Thank You.
        </h3>
        <p className="mx-auto mt-3 max-w-[430px] text-center text-[14.5px] leading-relaxed text-grey">
          Your parts inquiry has been logged. ZSI will review it and respond by
          phone or email.
        </p>
        <dl className="mx-auto mt-7 w-full max-w-[430px] space-y-2 border border-line bg-white px-5 py-4 text-[13px]">
          {[
            ["Name", submitted.name],
            ["Email", submitted.email],
            ["Vehicle", [submitted.make, submitted.model, submitted.year].filter(Boolean).join(" ")],
            ["Part needed", submitted.part],
          ].map(([k, v]) => (
            <div key={k} className="flex items-start justify-between gap-4">
              <dt className="shrink-0 font-cond text-[10.5px] tracking-[0.2em] text-grey uppercase">
                {k}
              </dt>
              <dd className="text-right font-medium text-charcoal">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => {
              setForm(EMPTY);
              setErrors({});
              setSubmitted(null);
            }}
            className="inline-flex items-center gap-2 border border-navy/30 px-6 py-3 font-cond text-[0.8rem] font-semibold tracking-[0.2em] text-navy uppercase transition-colors hover:border-navy"
          >
            Send Another Inquiry
          </button>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 font-cond text-[0.8rem] font-semibold tracking-[0.2em] text-red uppercase transition-colors hover:text-red-deep"
          >
            <IconPhone className="h-4 w-4" />
            Prefer to talk? Call {CONTACT.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("border border-line bg-paper p-6 md:p-8", flash && "form-flash")}
    >
      <h3 className="font-serif text-[1.45rem] font-bold text-navy">
        Looking for a Specific Part?
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-grey">
        Tell us what you're after — ZSI will check availability and advise from
        there. No account or payment details needed.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pi-name" className={labelCls}>
            Full Name <span className="text-red">*</span>
          </label>
          <input
            id="pi-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            className={cn(inputCls, errors.name ? "border-red" : "border-line")}
            placeholder="Your name"
          />
          <FieldError msg={errors.name} />
        </div>

        <div>
          <label htmlFor="pi-email" className={labelCls}>
            Email Address <span className="text-red">*</span>
          </label>
          <input
            id="pi-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            className={cn(inputCls, errors.email ? "border-red" : "border-line")}
            placeholder="you@example.com"
          />
          <FieldError msg={errors.email} />
        </div>

        <div>
          <label htmlFor="pi-phone" className={labelCls}>
            Phone Number <span className="text-charcoal/50 normal-case">(optional)</span>
          </label>
          <input
            id="pi-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            className={cn(inputCls, "border-line")}
            placeholder="(555) 555-5555"
          />
        </div>

        <div>
          <label htmlFor="pi-make" className={labelCls}>
            Vehicle Make <span className="text-red">*</span>
          </label>
          <select
            id="pi-make"
            value={form.make}
            onChange={(e) => set("make")(e.target.value)}
            className={cn(inputCls, errors.make ? "border-red" : "border-line")}
          >
            <option value="">Select a make…</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Other">Other</option>
          </select>
          <FieldError msg={errors.make} />
        </div>

        <div>
          <label htmlFor="pi-model" className={labelCls}>
            Vehicle Model
          </label>
          <input
            id="pi-model"
            type="text"
            value={form.model}
            onChange={(e) => set("model")(e.target.value)}
            className={cn(inputCls, "border-line")}
            placeholder="e.g. Vanagon, Golf, W123"
          />
        </div>

        <div>
          <label htmlFor="pi-year" className={labelCls}>
            Vehicle Year
          </label>
          <input
            id="pi-year"
            type="text"
            inputMode="numeric"
            value={form.year}
            onChange={(e) => set("year")(e.target.value)}
            className={cn(inputCls, errors.year ? "border-red" : "border-line")}
            placeholder="e.g. 1988"
          />
          <FieldError msg={errors.year} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="pi-part" className={labelCls}>
            Part or Component Needed <span className="text-red">*</span>
          </label>
          <input
            id="pi-part"
            type="text"
            value={form.part}
            onChange={(e) => set("part")(e.target.value)}
            className={cn(inputCls, errors.part ? "border-red" : "border-line")}
            placeholder="e.g. T3 water pump, cylinder head, front bumper"
          />
          <FieldError msg={errors.part} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="pi-details" className={labelCls}>
            Additional Details
          </label>
          <textarea
            id="pi-details"
            rows={4}
            ref={detailsRef}
            value={form.details}
            onChange={(e) => set("details")(e.target.value)}
            className={cn(inputCls, "resize-y border-line")}
            placeholder="Condition needed (new / used / rebuilt), NLA or NOS preference, quantity, and anything else that helps us help you."
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 bg-red px-8 py-4 font-cond text-[0.9rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-red-deep"
        >
          Send Parts Inquiry
          <IconArrow className="h-4 w-4" />
        </button>
        <p className="text-[12px] leading-relaxed text-grey">
          By sending this inquiry you're asking ZSI to contact you about your
          part.
        </p>
      </div>
    </form>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ivory/20 text-red-light">
        {icon}
      </span>
      <div>
        <p className="font-cond text-[10.5px] tracking-[0.24em] text-ivory/45 uppercase">
          {label}
        </p>
        <div className="mt-1 text-[14.5px] text-ivory/85">{children}</div>
      </div>
    </li>
  );
}

export function ContactSection({ prefill }: { prefill: Prefill | null }) {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal className="max-w-[680px]">
          <p className="flex items-center gap-3 font-cond text-[11px] font-semibold tracking-[0.3em] text-red uppercase">
            <span className="h-[2px] w-8 bg-red" aria-hidden="true" />
            Contact ZSI
          </p>
          <h2 className="mt-4 font-serif text-[1.9rem] leading-[1.18] font-bold text-navy md:text-[2.5rem]">
            Questions About Parts or Your Project?
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-grey">
            Whether you're looking for a hard-to-find component or have a
            specialist restoration question, get in touch with ZSI.
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info panel */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-between gap-10 bg-navy p-7 md:p-9">
              <div>
                <h3 className="font-serif text-[1.55rem] font-bold text-ivory">
                  Z &amp; S Imports (ZSI)
                </h3>
                <p className="mt-2 font-cond text-[11px] tracking-[0.26em] text-red-light uppercase">
                  {CONTACT.tagline}
                </p>
                <ul className="mt-9 space-y-6">
                  <InfoRow icon={<IconPin className="h-5 w-5" />} label="Location">
                    {CONTACT.locationFull}
                  </InfoRow>
                  <InfoRow icon={<IconPhone className="h-5 w-5" />} label="Phone">
                    <a
                      href={CONTACT.phoneHref}
                      className="transition-colors hover:text-red-light"
                    >
                      {CONTACT.phone}
                    </a>
                  </InfoRow>
                  <InfoRow icon={<IconMail className="h-5 w-5" />} label="Email">
                    <a
                      href={CONTACT.emailHref}
                      className="break-all transition-colors hover:text-red-light"
                    >
                      {CONTACT.email}
                    </a>
                  </InfoRow>
                  <InfoRow icon={<IconCalendar className="h-5 w-5" />} label="Service">
                    Mail-order parts
                    <span className="block text-ivory/60">Projects by appointment only</span>
                  </InfoRow>
                </ul>
              </div>
              <div className="border-l-[3px] border-red bg-navy-soft/60 px-5 py-4">
                <p className="text-[13px] leading-relaxed text-ivory/75">
                  <strong className="font-semibold text-ivory">Appointment only.</strong>{" "}
                  Projects are handled by appointment. Please contact ZSI before
                  arranging a visit — no walk-in service.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Inquiry form */}
          <Reveal delay={130} className="h-full">
            <InquiryForm prefill={prefill} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
