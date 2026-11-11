import { IMAGES } from "../data/site";
import { Reveal } from "./Reveal";

export function About({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Sticky image column */}
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-3 -left-3 hidden h-full w-full border border-red/40 sm:block"
              />
              <img
                src={IMAGES.about.src}
                alt={IMAGES.about.alt}
                loading="lazy"
                className="relative aspect-[4/5] w-full border border-line object-cover"
              />
            </div>
            <p className="mt-4 font-serif text-[13.5px] text-grey italic">
              Working on classics — the ZSI way.
            </p>
            <div className="mt-6 flex items-center justify-between border border-line bg-ivory px-6 py-5">
              <div>
                <p className="font-serif text-[2.1rem] leading-none font-bold text-navy">1982</p>
                <p className="mt-1.5 font-cond text-[10.5px] tracking-[0.24em] text-grey uppercase">
                  Pahrump, Nevada
                </p>
              </div>
              <div className="text-right">
                <p className="font-cond text-[12.5px] tracking-[0.2em] text-charcoal/80 uppercase">
                  VW · Audi
                </p>
                <p className="font-cond text-[12.5px] tracking-[0.2em] text-charcoal/80 uppercase">
                  Mercedes-Benz
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Story */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-cond text-[11px] font-semibold tracking-[0.3em] text-red uppercase">
              <span className="h-[2px] w-8 bg-red" aria-hidden="true" />
              About ZSI
            </p>
            <h2 className="mt-4 font-serif text-[1.9rem] leading-[1.18] font-bold text-navy md:text-[2.5rem]">
              Not Just a Business. A Way of Life.
            </h2>
          </Reveal>

          <Reveal delay={110}>
            <div className="mt-7 space-y-5 text-[15px] leading-[1.8] text-charcoal/80">
              <p>Welcome to Z &amp; S Imports, better known as ZSI.</p>
              <p>
                Since 1982, we've been part of the Volkswagen and Audi enthusiast
                community, helping fellow German-car enthusiasts find the parts,
                components, and specialist knowledge they need to keep their
                vehicles running and looking right.
              </p>
              <p>
                We believe in the value of experience, honest communication, and
                the satisfaction of keeping a classic automobile alive.
              </p>
              <p>
                From new, used, and rebuilt components to hard-to-find NLA and NOS
                parts, we continue to support enthusiasts who appreciate these
                vehicles as much as we do.
              </p>
            </div>

            <blockquote className="mt-8 border-l-[3px] border-red pl-6 font-serif text-[1.15rem] leading-[1.75] text-navy italic">
              “At ZSI, it's about more than selling parts. It's about the people,
              the vehicles, and the passion that brings the community together.”
            </blockquote>
          </Reveal>

          <Reveal delay={180}>
            <button
              onClick={() => onNavigate("contact")}
              className="mt-9 inline-flex items-center gap-3 bg-navy px-7 py-4 font-cond text-[0.9rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-navy-deep"
            >
              Learn More About ZSI
              <span
                aria-hidden="true"
                className="h-[2px] w-6 bg-ivory/60 transition-all duration-300 hover:w-9"
              />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
