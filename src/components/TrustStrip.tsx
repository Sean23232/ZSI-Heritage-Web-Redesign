import { TRUST_ITEMS } from "../data/site";
import { ICONS } from "./Icons";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section
      aria-label="Why enthusiasts trust ZSI"
      className="border-t border-ivory/10 bg-navy"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <Reveal
              key={item.title}
              delay={i * 90}
              className={
                "flex items-start gap-4 border-ivory/10 px-6 py-7 lg:px-8 " +
                [
                  "",
                  "border-t sm:border-t-0 sm:border-r lg:border-l",
                  "border-t lg:border-l",
                  "border-t sm:border-t-0 lg:border-l",
                ][i]
              }
            >
              <Icon className="mt-0.5 h-8 w-8 shrink-0 text-red-light" strokeWidth={1.4} />
              <div>
                <h3 className="font-cond text-[15px] font-semibold tracking-[0.18em] text-ivory uppercase">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ivory/60">
                  {item.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
