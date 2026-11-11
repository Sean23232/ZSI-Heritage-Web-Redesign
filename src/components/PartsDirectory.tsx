import { useEffect, useMemo, useState } from "react";
import { cn } from "../utils/cn";
import {
  BRAND_ORDER,
  CATALOGS,
  flattenSearch,
  type BrandId,
} from "../data/site";
import { IconArchive, IconArrow, IconChevron, IconSearch } from "./Icons";
import { Reveal } from "./Reveal";

export interface DirRequest {
  brand: BrandId;
  group: string | null;
  nonce: number;
}

interface Props {
  query: string;
  onClearQuery: () => void;
  dirRequest: DirRequest | null;
  onNavigate: (id: string) => void;
  onGoToGroup: (brand: BrandId, group: string | null) => void;
  onAsk: (make: string, part: string) => void;
}

export function PartsDirectory({
  query,
  onClearQuery,
  dirRequest,
  onNavigate,
  onGoToGroup,
  onAsk,
}: Props) {
  const [brand, setBrand] = useState<BrandId>("volkswagen");
  const [open, setOpen] = useState<Record<string, boolean>>({
    "volkswagen:engine-drivetrain": true,
  });

  const cat = CATALOGS[brand];
  const searching = query.trim().length >= 2;
  const results = useMemo(() => flattenSearch(query), [query]);

  /* Navigate here from header / panels / footer with a target brand + group */
  useEffect(() => {
    if (!dirRequest) return;
    const b = dirRequest.brand;
    setBrand(b);
    const group = dirRequest.group ?? CATALOGS[b].groups[0].id;
    setOpen({ [`${b}:${group}`]: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dirRequest?.nonce]);

  const selectBrand = (b: BrandId) => {
    setBrand(b);
    setOpen((p) => ({
      ...p,
      [`${b}:${CATALOGS[b].groups[0].id}`]: true,
    }));
  };

  const toggle = (b: BrandId, gid: string) => {
    const key = `${b}:${gid}`;
    setOpen((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <section id="parts" className="scroll-mt-20 border-t border-line bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-grey">
            <li>
              <button onClick={() => onNavigate("home")} className="transition-colors hover:text-red">
                Home
              </button>
            </li>
            <li aria-hidden="true" className="text-line">/</li>
            <li>
              <button
                onClick={() => onGoToGroup(brand, null)}
                className="transition-colors hover:text-red"
              >
                {cat.label} Parts
              </button>
            </li>
            <li aria-hidden="true" className="text-line">/</li>
            <li>
              <span aria-current="page" className="font-medium text-charcoal">
                Parts Directory
              </span>
            </li>
          </ol>
        </nav>

        {/* Section heading */}
        <div className="mt-8 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="flex items-center gap-3 font-cond text-[11px] font-semibold tracking-[0.3em] text-red uppercase">
              <span className="h-[2px] w-8 bg-red" aria-hidden="true" />
              Parts Directory
            </p>
            <h2 className="mt-4 font-serif text-[1.9rem] leading-[1.18] font-bold text-navy md:text-[2.55rem]">
              {cat.heading}
            </h2>
            <p className="mt-3 max-w-[560px] text-[15px] leading-[1.7] text-grey">{cat.sub}</p>
          </Reveal>
          <Reveal delay={140} className="hidden lg:block">
            <p className="flex items-center gap-3 border border-line bg-paper px-4 py-3 text-[12.5px] text-grey">
              <IconSearch className="h-4 w-4 shrink-0 text-red" />
              Use the search in the header to find a part quickly.
            </p>
          </Reveal>
        </div>

        {searching ? (
          /* ───────── Search results view ───────── */
          <div className="mt-10 border border-line bg-paper">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
              <p className="text-[14px] text-charcoal">
                Showing <strong className="font-semibold">{results.length}</strong>{" "}
                {results.length === 1 ? "match" : "matches"} for{" "}
                <span className="font-semibold text-red">“{query.trim()}”</span>
                <span className="mt-0.5 block text-[12px] text-grey">
                  Search covers part categories across Volkswagen, Audi and Mercedes-Benz.
                </span>
              </p>
              <button
                onClick={onClearQuery}
                className="border border-line bg-white px-4 py-2 font-cond text-[0.75rem] font-semibold tracking-[0.18em] text-charcoal uppercase transition-colors hover:border-red hover:text-red"
              >
                Clear Search
              </button>
            </div>
            {results.length > 0 ? (
              <ul className="max-h-[480px] divide-y divide-line overflow-y-auto">
                {results.map((r) => (
                  <li key={`${r.brand}-${r.group}-${r.item}`}>
                    <button
                      onClick={() => {
                        onAsk(r.brandLabel, r.item);
                        onClearQuery();
                      }}
                      className="group flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left transition-colors hover:bg-ivory"
                    >
                      <span className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-cond text-[10.5px] font-semibold tracking-[0.22em] text-red uppercase">
                          {r.brandLabel}
                        </span>
                        <span className="text-[14.5px] font-medium text-charcoal transition-colors group-hover:text-red">
                          {r.item}
                        </span>
                        <span className="text-[12px] text-grey">— {r.group}</span>
                      </span>
                      <span className="hidden shrink-0 items-center gap-2 font-cond text-[11px] tracking-[0.18em] text-grey uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:flex">
                        Ask about availability
                        <IconArrow className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-5 py-14 text-center">
                <p className="font-serif text-xl font-bold text-navy">
                  No exact matches in the directory.
                </p>
                <p className="mx-auto mt-2 max-w-[440px] text-[14px] leading-relaxed text-grey">
                  Hard-to-find parts are our specialty — tell us what you're
                  looking for and we'll check what we can source.
                </p>
                <button
                  onClick={() => onAsk("Other", `Availability request: ${query.trim()}`)}
                  className="mt-6 inline-flex items-center gap-2.5 bg-red px-6 py-3.5 font-cond text-[0.85rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-red-deep"
                >
                  Contact Us to Check Availability
                  <IconArrow className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Brand tabs */}
            <div className="mt-10 flex flex-wrap gap-2.5" aria-label="Parts catalog brand">
              {BRAND_ORDER.map((b) => (
                <button
                  key={b}
                  aria-pressed={brand === b}
                  onClick={() => selectBrand(b)}
                  className={cn(
                    "border px-5 py-2.5 font-cond text-[0.85rem] font-semibold tracking-[0.18em] uppercase transition-colors",
                    brand === b
                      ? "border-navy bg-navy text-ivory"
                      : "border-line bg-white text-charcoal hover:border-navy/50"
                  )}
                >
                  {CATALOGS[b].shortLabel}
                  <span
                    className={cn(
                      "ml-2 text-[10.5px]",
                      brand === b ? "text-ivory/60" : "text-grey"
                    )}
                  >
                    {CATALOGS[b].groups.length}
                  </span>
                </button>
              ))}
            </div>

            {cat.note && (
              <p className="mt-5 flex items-start gap-3 border-l-[3px] border-red bg-ivory px-5 py-4 text-[13.5px] leading-relaxed text-charcoal/85">
                <IconArchive className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                {cat.note}
              </p>
            )}

            {/* Category accordions */}
            <div className="mt-8 grid items-start gap-5 md:grid-cols-2">
              {cat.groups.map((g, gi) => {
                const key = `${brand}:${g.id}`;
                const openNow = !!open[key];
                return (
                  <Reveal key={key} delay={(gi % 2) * 80}>
                    <div
                      id={`group-${brand}-${g.id}`}
                      className={cn(
                        "border bg-paper transition-colors duration-300",
                        openNow ? "border-navy/35" : "border-line"
                      )}
                    >
                      <button
                        aria-expanded={openNow}
                        onClick={() => toggle(brand, g.id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="flex flex-wrap items-baseline gap-x-3">
                          <span className="font-cond text-[15px] font-semibold tracking-[0.14em] text-navy uppercase">
                            {g.label}
                          </span>
                          <span className="font-cond text-[11px] tracking-[0.14em] text-grey uppercase">
                            {g.items.length} items
                          </span>
                        </span>
                        <span
                          className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300",
                            openNow
                              ? "rotate-180 border-red bg-red text-ivory"
                              : "border-line text-grey"
                          )}
                          aria-hidden="true"
                        >
                          <IconChevron className="h-4 w-4" />
                        </span>
                      </button>
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-300 ease-out",
                          openNow ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                      >
                        <div className="overflow-hidden">
                          <ul className="grid gap-x-8 px-5 pt-1 pb-5 sm:grid-cols-2">
                            {g.items.map((it) => (
                              <li key={it}>
                                <button
                                  onClick={() => onAsk(cat.label, it)}
                                  className="group flex w-full items-center gap-2.5 py-[7px] text-left text-[14px] text-charcoal/80 transition-colors hover:text-red"
                                >
                                  <span
                                    className="h-[5px] w-[5px] shrink-0 bg-red/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-red"
                                    aria-hidden="true"
                                  />
                                  {it}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <p className="border-t border-line/70 px-5 py-3 text-[11.5px] text-grey">
                            Contact ZSI to check availability, pricing and shipping for{" "}
                            {g.label.toLowerCase()} items.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Availability banner */}
            <div className="mt-8 flex flex-col gap-5 border border-navy/15 bg-paper px-6 py-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-navy">
                  Can't find the exact part you need?
                </h3>
                <p className="mt-1 text-[13.5px] text-grey">
                  Hard-to-find components are where ZSI shines. Tell us what you're
                  after and we'll check what's available.
                </p>
              </div>
              <button
                onClick={() => onAsk(cat.label, "Availability request")}
                className="inline-flex shrink-0 items-center gap-2.5 bg-red px-6 py-3.5 font-cond text-[0.85rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-red-deep"
              >
                Contact Us to Check Availability
                <IconArrow className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="mr-1 font-cond text-[11px] tracking-[0.22em] text-grey uppercase">
                Sourced by ZSI:
              </span>
              {["New", "Used", "Rebuilt", "NOS", "NLA", "Euro-Spec"].map((c) => (
                <span
                  key={c}
                  className="border border-line bg-white px-3 py-1 font-cond text-[11px] tracking-[0.16em] text-charcoal/70 uppercase"
                >
                  {c}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
