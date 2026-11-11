import { BRAND_PANELS, type BrandId } from "../data/site";
import { IconArrow } from "./Icons";
import { Reveal } from "./Reveal";

export function BrandPanels({ onExplore }: { onExplore: (brand: BrandId) => void }) {
  return (
    <section id="brands" className="scroll-mt-24 bg-ivory py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="flex items-center gap-3 font-cond text-[11px] font-semibold tracking-[0.3em] text-red uppercase">
              <span className="h-[2px] w-8 bg-red" aria-hidden="true" />
              Specialist Parts by Make
            </p>
            <h2 className="mt-4 font-serif text-[1.9rem] leading-[1.18] font-bold text-navy md:text-[2.55rem]">
              Find the Right Parts for Your Classic.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[15px] leading-[1.75] text-grey lg:pb-1">
              From everyday replacement components to hard-to-find original
              parts, explore our specialist German automotive parts categories.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-6">
          {BRAND_PANELS.map((panel, i) => (
            <Reveal key={panel.id} delay={i * 110} className="h-full">
              <article className="group flex h-full flex-col border border-line bg-white transition-shadow duration-300 hover:shadow-[0_20px_44px_-20px_rgba(23,40,58,0.4)]">
                <div className="relative overflow-hidden">
                  <img
                    src={panel.img}
                    alt={panel.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-0 left-0 bg-navy px-3.5 py-2 font-cond text-[10px] font-medium tracking-[0.26em] text-ivory uppercase">
                    {panel.overline}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span
                    className="h-[2px] w-9 bg-red transition-all duration-500 group-hover:w-16"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-serif text-[1.35rem] font-bold text-navy">
                    {panel.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[1.7] text-grey">
                    {panel.desc}
                  </p>
                  <button
                    onClick={() => onExplore(panel.id)}
                    className="mt-6 inline-flex items-center gap-2.5 self-start font-cond text-[0.85rem] font-semibold tracking-[0.2em] text-red uppercase transition-colors hover:text-red-deep"
                  >
                    {panel.cta}
                    <IconArrow
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
