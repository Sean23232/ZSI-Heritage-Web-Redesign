import { CONTACT, ORDER_STEPS } from "../data/site";
import { IconMail, IconPhone } from "./Icons";
import { Reveal } from "./Reveal";

export function HowToOrder() {
  return (
    <section id="order" className="scroll-mt-20 border-t border-line bg-ivory py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="flex items-center justify-center gap-3 font-cond text-[11px] font-semibold tracking-[0.3em] text-red uppercase">
            <span className="h-[2px] w-8 bg-red" aria-hidden="true" />
            How to Order With ZSI
            <span className="h-[2px] w-8 bg-red" aria-hidden="true" />
          </p>
          <h2 className="mt-4 font-serif text-[1.9rem] leading-[1.18] font-bold text-navy md:text-[2.5rem]">
            Finding the Right Part Starts With a Conversation.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-grey">
            No shopping cart, no automated checkout. Orders at ZSI are handled
            personally and directly — the way a specialist parts business should
            work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {ORDER_STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <div className="border-t-2 border-red pt-6">
                <span
                  className="font-cond text-[4.4rem] leading-[0.9] font-semibold text-red/85"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <h3 className="mt-3 font-serif text-xl font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.75] text-grey">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-3 bg-red px-8 py-4 font-cond text-[0.9rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-red-deep"
            >
              <IconPhone className="h-4 w-4" />
              Call {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-3 border border-navy/35 px-8 py-4 font-cond text-[0.9rem] font-semibold tracking-[0.2em] text-navy uppercase transition-colors hover:border-navy hover:bg-navy hover:text-ivory"
            >
              <IconMail className="h-4 w-4" />
              Email ZSI
            </a>
          </div>
          <p className="mt-6 text-center text-[12.5px] text-grey">
            Availability, pricing, and shipping are confirmed directly with ZSI.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
