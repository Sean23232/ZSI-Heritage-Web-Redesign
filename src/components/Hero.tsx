import type { CSSProperties } from "react";
import { CONTACT, IMAGES } from "../data/site";
import { IconFlag, IconPhone } from "./Icons";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero({ onExplore, onTalk }: { onExplore: () => void; onTalk: () => void }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy-deep"
    >
      <img
        src={IMAGES.hero.src}
        alt={IMAGES.hero.alt}
        className="anim-kenburns absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/60 to-navy-deep/15" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-navy-deep/90 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-28 md:px-8">
        <div className="max-w-[640px]">
          <p className="hero-fade flex items-center gap-3 font-cond text-[11px] font-medium tracking-[0.34em] text-ivory/75 uppercase md:text-[12px]" style={d(0)}>
            <span className="h-[2px] w-10 bg-red" aria-hidden="true" />
            Est. 1982 · Pahrump, Nevada
          </p>

          <h1 className="mt-6 font-serif text-[2.1rem] leading-[1.14] font-bold tracking-[-0.01em] text-ivory sm:text-[2.7rem] lg:text-[3.55rem]">
            <span className="hero-line">
              <span style={d(150)}>Keeping Classic</span>
            </span>
            <span className="hero-line">
              <span style={d(300)}>German Automobiles</span>
            </span>
            <span className="hero-line">
              <span style={d(450)}>
                <em className="italic">
                  Alive<span className="text-red-light">.</span>
                </em>
              </span>
            </span>
          </h1>

          <p
            className="hero-fade mt-6 max-w-[520px] text-[15.5px] leading-[1.75] text-ivory/75 md:text-[16.5px]"
            style={d(600)}
          >
            Specialist Volkswagen, Audi and Mercedes-Benz parts, hard-to-find
            components, and restoration expertise backed by decades of hands-on
            experience.
          </p>

          <div className="hero-fade mt-7" style={d(720)}>
            <span className="inline-flex items-center gap-3 border border-ivory/30 bg-navy-deep/40 px-4 py-2.5 font-cond text-[11px] font-medium tracking-[0.24em] text-ivory/85 uppercase backdrop-blur-[2px]">
              <IconFlag className="h-4 w-4 text-red-light" />
              Serving the VW/Audi Community Since 1982
            </span>
          </div>

          <div className="hero-fade mt-9 flex flex-wrap items-center gap-4" style={d(840)}>
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-3 bg-red px-7 py-4 font-cond text-[0.9rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-red-deep"
            >
              Explore Parts
              <span
                aria-hidden="true"
                className="h-[2px] w-6 bg-ivory/70 transition-all duration-300 group-hover:w-9"
              />
            </button>
            <button
              onClick={onTalk}
              className="inline-flex items-center gap-2.5 border border-ivory/40 px-7 py-4 font-cond text-[0.9rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:border-ivory hover:bg-ivory/10"
            >
              <IconPhone className="h-4 w-4" />
              Talk to a Specialist
            </button>
          </div>

          <p
            className="hero-fade mt-12 border-t border-ivory/20 pt-5 font-cond text-[12px] tracking-[0.24em] text-ivory/60 uppercase"
            style={d(980)}
          >
            Mail-Order Parts Nationwide&nbsp;&nbsp;|&nbsp;&nbsp;Restoration Projects by
            Appointment
          </p>
        </div>
      </div>

      {/* Corner plate */}
      <div className="absolute right-10 bottom-10 hidden flex-col items-center gap-2.5 border border-ivory/25 bg-navy-deep/55 px-6 py-5 backdrop-blur-[2px] lg:flex">
        <span className="font-serif text-2xl font-bold text-ivory">ZSI</span>
        <span className="h-[2px] w-7 bg-red" aria-hidden="true" />
        <span className="font-cond text-[10px] tracking-[0.34em] text-ivory/60 uppercase">
          Since 1982
        </span>
      </div>
      <span className="sr-only">{CONTACT.tagline}</span>
    </section>
  );
}
