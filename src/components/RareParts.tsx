import { IMAGES, RARE_PANELS } from "../data/site";
import { IconArrow } from "./Icons";
import { Reveal } from "./Reveal";

export function RareParts({ onAsk }: { onAsk: (make: string, part: string) => void }) {
  return (
    <section
      id="rare"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-20 md:py-24"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-4 hidden font-serif text-[13rem] leading-none font-bold text-ivory/[0.045] select-none xl:block"
      >
        1982
      </span>

      <div className="relative mx-auto grid max-w-[1280px] items-start gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-cond text-[11px] font-semibold tracking-[0.3em] text-red-light uppercase">
              <span className="h-[2px] w-8 bg-red" aria-hidden="true" />
              Rare &amp; Hard-to-Find Parts
            </p>
            <h2 className="mt-4 font-serif text-[1.9rem] leading-[1.18] font-bold text-ivory md:text-[2.5rem]">
              Some Parts Are Hard to Find. That's Where We Come In.
            </h2>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.75] text-ivory/70">
              We specialize in tracking down the parts that keep classic German
              automobiles on the road, including NLA, NOS, European-specification,
              and other hard-to-find components.
            </p>
            <button
              onClick={() => onAsk("Other", "Hard-to-find part request")}
              className="mt-8 inline-flex items-center gap-3 bg-red px-7 py-4 font-cond text-[0.9rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-red-deep"
            >
              Ask About a Hard-to-Find Part
              <IconArrow className="h-4 w-4" />
            </button>
            <p className="mt-4 font-cond text-[11px] tracking-[0.22em] text-ivory/45 uppercase">
              NLA · NOS · European-Specification
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-12">
            <figure>
              <div className="overflow-hidden border border-ivory/15">
                <img
                  src={IMAGES.rareDetail.src}
                  alt={IMAGES.rareDetail.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <figcaption className="px-1 pt-3 font-cond text-[10.5px] tracking-[0.26em] text-ivory/50 uppercase">
                Workshop bench — cylinder head &amp; camshaft components
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5">
          {RARE_PANELS.map((panel, i) => (
            <Reveal key={panel.code} delay={i * 110}>
              <article className="group border border-ivory/15 bg-navy-soft/50 p-6 transition-all duration-300 hover:translate-x-1 hover:border-ivory/35 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-cond text-[2.1rem] leading-none font-semibold tracking-[0.06em] text-ivory">
                    {panel.code}
                  </h3>
                  <p className="font-cond text-[10.5px] tracking-[0.24em] text-ivory/45 uppercase">
                    {panel.name}
                  </p>
                </div>
                <span
                  className="mt-4 block h-[2px] w-9 bg-red transition-all duration-500 group-hover:w-16"
                  aria-hidden="true"
                />
                <p className="mt-4 text-[14.5px] leading-[1.7] text-ivory/75">
                  {panel.text}
                </p>
                <button
                  onClick={() => onAsk("Other", `${panel.code} — ${panel.name} request`)}
                  className="mt-5 inline-flex items-center gap-2 font-cond text-[0.8rem] font-semibold tracking-[0.2em] text-red-light uppercase transition-colors hover:text-ivory"
                >
                  Ask About {panel.code}
                  <IconArrow className="h-3.5 w-3.5" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
