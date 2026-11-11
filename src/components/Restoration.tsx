import { CONTACT, IMAGES, RESTORATION_SERVICES } from "../data/site";
import { IconCalendar, ICONS } from "./Icons";
import { Reveal } from "./Reveal";

export function Restoration({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section id="restoration" className="scroll-mt-20 bg-ivory py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Imagery */}
        <Reveal className="relative md:mb-12 lg:mb-0">
          <figure className="group relative overflow-hidden border border-line">
            <img
              src={IMAGES.restorationMain.src}
              alt={IMAGES.restorationMain.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span className="absolute bottom-4 left-4 bg-navy-deep/85 px-4 py-2 font-cond text-[10.5px] tracking-[0.24em] text-ivory/90 uppercase">
              Workshop bench — engine rebuild in progress
            </span>
          </figure>
          <img
            src={IMAGES.restorationSub.src}
            alt={IMAGES.restorationSub.alt}
            loading="lazy"
            className="absolute -right-3 -bottom-12 hidden w-[38%] border-[6px] border-ivory object-cover shadow-xl md:block"
          />
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-cond text-[11px] font-semibold tracking-[0.3em] text-red uppercase">
              <span className="h-[2px] w-8 bg-red" aria-hidden="true" />
              Restoration &amp; Specialist Projects
            </p>
            <h2 className="mt-4 font-serif text-[1.9rem] leading-[1.18] font-bold text-navy md:text-[2.5rem]">
              More Than Parts. A Passion for Keeping Classics on the Road.
            </h2>
            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.75] text-grey">
              From bringing an older Volkswagen back to life to specialist Vanagon
              and Eurovan engine conversions, ZSI brings decades of hands-on
              experience to the vehicles and projects we love.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {RESTORATION_SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="flex items-start gap-4">
                    <Icon className="mt-1 h-7 w-7 shrink-0 text-red" strokeWidth={1.4} />
                    <div>
                      <h3 className="font-cond text-[14.5px] font-semibold tracking-[0.14em] text-navy uppercase">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-grey">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={140}>
            <div className="mt-10 flex items-start gap-4 border-l-[3px] border-red bg-white px-5 py-4.5">
              <IconCalendar className="mt-0.5 h-5 w-5 shrink-0 text-red" />
              <p className="text-[13.5px] leading-relaxed text-charcoal/85">
                <strong className="font-semibold">By appointment only.</strong>{" "}
                Restoration and specialist projects are considered by appointment.
                Please contact ZSI before arranging a visit.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`${CONTACT.emailHref}?subject=Project%20Inquiry%20%E2%80%94%20ZSI`}
                className="inline-flex items-center gap-3 bg-red px-7 py-4 font-cond text-[0.9rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-red-deep"
              >
                Discuss Your Project
                <span
                  aria-hidden="true"
                  className="h-[2px] w-6 bg-ivory/70 transition-all duration-300 hover:w-9"
                />
              </a>
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 border border-navy/30 px-7 py-4 font-cond text-[0.9rem] font-semibold tracking-[0.2em] text-navy uppercase transition-colors hover:border-navy hover:bg-navy hover:text-ivory"
              >
                Contact Details
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
