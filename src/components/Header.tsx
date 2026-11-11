import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { CONTACT, NAV, type BrandId } from "../data/site";
import { scrollToId } from "../lib/motion";
import {
  IconArrow,
  IconChevron,
  IconClose,
  IconMail,
  IconMenu,
  IconPhone,
  IconSearch,
} from "./Icons";

export interface HeaderProps {
  query: string;
  onQueryChange: (q: string) => void;
  onNavigate: (id: string) => void;
  onGoToGroup: (brand: BrandId, group: string | null) => void;
}

/* Typographic Z & S Imports mark — an evolution of the original identity */
export function Logo({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn("group flex items-center gap-3 text-left", className)}
      aria-label="Z & S Imports — back to top"
    >
      <span className="font-serif text-[1.5rem] leading-none font-bold tracking-tight text-ivory transition-colors group-hover:text-white">
        Z&nbsp;&amp;&nbsp;S
      </span>
      <span className="flex flex-col gap-[4px] border-l border-ivory/25 pl-3">
        <span className="flex items-center gap-1.5">
          <span className="h-[5px] w-[5px] bg-red" />
          <span className="font-cond text-[0.74rem] leading-none font-semibold tracking-[0.42em] text-ivory/90">
            IMPORTS
          </span>
        </span>
        <span className="pl-[11px] font-cond text-[0.6rem] leading-none tracking-[0.32em] text-ivory/50">
          SINCE 1982
        </span>
      </span>
    </button>
  );
}

function MobileMenu({
  onNavigate,
  onGoToGroup,
  onClose,
  query,
  onQueryChange,
}: {
  onNavigate: (id: string) => void;
  onGoToGroup: (brand: BrandId, group: string | null) => void;
  onClose: () => void;
  query: string;
  onQueryChange: (q: string) => void;
}) {
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] lg:hidden">
      <div
        className="absolute inset-0 bg-navy-deep/70"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute top-0 right-0 flex h-full w-[min(88vw,23rem)] flex-col bg-navy shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-ivory/10 px-5 py-4">
          <Logo
            onClick={() => {
              onNavigate("home");
              onClose();
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-ivory/70 transition-colors hover:text-ivory"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {/* In-menu search for small screens */}
        <div className="border-b border-ivory/10 px-4 pb-4">
          <div className="flex gap-2">
            <div className="relative min-w-0 flex-1">
              <IconSearch className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ivory/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onNavigate("parts");
                    onClose();
                  }
                }}
                placeholder="Search parts…"
                aria-label="Search parts categories"
                className="w-full border border-ivory/25 bg-navy-deep/70 py-2.5 pr-3 pl-9 text-[13.5px] text-ivory transition-colors placeholder:text-ivory/40 focus:border-ivory/60 focus:outline-none"
              />
            </div>
            <button
              onClick={() => {
                onNavigate("parts");
                onClose();
              }}
              className="shrink-0 bg-red px-4 font-cond text-[0.78rem] font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-red-deep"
            >
              Go
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Mobile">
          <ul className="divide-y divide-ivory/10">
            {NAV.map((item) => {
              const hasKids = !!item.children?.length;
              const open = openSub === item.label;
              return (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      if (hasKids) {
                        setOpenSub(open ? null : item.label);
                        return;
                      }
                      onNavigate(item.target);
                      onClose();
                    }}
                    aria-expanded={hasKids ? open : undefined}
                    className="flex w-full items-center justify-between px-2 py-3.5 text-left font-cond text-[1.02rem] font-medium tracking-[0.14em] text-ivory/85 uppercase transition-colors hover:text-ivory"
                  >
                    {item.label}
                    {hasKids && (
                      <IconChevron
                        className={cn(
                          "h-4 w-4 text-ivory/50 transition-transform duration-300",
                          open && "rotate-180"
                        )}
                      />
                    )}
                  </button>
                  {hasKids && (
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300",
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <ul className="overflow-hidden">
                        {item.children!.map((c) => (
                          <li key={c.label}>
                            <button
                              onClick={() => {
                                if (c.goTo) onGoToGroup(c.goTo.brand, c.goTo.group);
                                else onNavigate(c.target!);
                                onClose();
                              }}
                              className="flex w-full items-center gap-2.5 border-l-2 border-red/50 py-2.5 pr-2 pl-4 text-left text-[13.5px] text-ivory/60 transition-colors hover:text-ivory"
                            >
                              {c.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-ivory/10 p-5">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center justify-center gap-2.5 bg-red px-4 py-3 font-cond text-[0.95rem] font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-red-deep"
          >
            <IconPhone className="h-4 w-4" />
            Call {CONTACT.phone}
          </a>
          <a
            href={CONTACT.emailHref}
            className="flex items-center justify-center gap-2 text-[13.5px] text-ivory/70 transition-colors hover:text-ivory"
          >
            <IconMail className="h-4 w-4" />
            {CONTACT.email}
          </a>
          <p className="text-center font-cond text-[10.5px] tracking-[0.22em] text-ivory/40 uppercase">
            Mail-Order Parts · Projects by Appointment
          </p>
        </div>
      </div>
    </div>
  );
}

export function Header({ query, onQueryChange, onNavigate, onGoToGroup }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top announcement bar ─────────────────────────────── */}
      <div className="bg-navy-deep">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-2 md:px-8">
          <p className="truncate font-cond text-[10.5px] tracking-[0.2em] text-ivory/70 uppercase md:text-[11px]">
            German Automotive Parts &amp; Restoration Specialists Since 1982
          </p>
          <p className="hidden shrink-0 font-cond text-[11px] tracking-[0.2em] text-ivory/70 uppercase md:block">
            Mail-Order Parts&nbsp;|&nbsp;Projects by Appointment
          </p>
        </div>
        <div className="h-[2px] bg-red" />
      </div>

      {/* ── Main header (sticky) ─────────────────────────────── */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-navy transition-shadow duration-300",
          scrolled && "shadow-[0_14px_34px_-14px_rgba(16,27,41,0.65)]"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-5 transition-[padding] duration-300 md:px-8",
            scrolled ? "py-2.5" : "py-4"
          )}
        >
          <Logo onClick={() => onNavigate("home")} />

          {/* Center navigation */}
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-4 2xl:gap-6">
              {NAV.map((item) => (
                <li key={item.label} className="group/nav relative">
                  <button
                    onClick={() =>
                      item.brand ? onGoToGroup(item.brand, null) : onNavigate(item.target)
                    }
                    className="flex items-center gap-1 py-2 font-cond text-[0.78rem] font-medium tracking-[0.1em] text-ivory/80 uppercase transition-colors hover:text-ivory xl:text-[0.84rem] xl:tracking-[0.13em]"
                  >
                    {item.label}
                    {item.children && (
                      <IconChevron className="h-3 w-3 opacity-50 transition-transform duration-300 group-hover/nav:rotate-180" />
                    )}
                  </button>

                  {item.children && (
                    <div className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                      <div className="w-64 border border-line bg-paper shadow-xl shadow-navy-deep/30">
                        <div className="h-[3px] bg-red" />
                        <p className="border-b border-line px-4 pt-3 pb-2 font-cond text-[10px] tracking-[0.28em] text-grey uppercase">
                          {item.label}
                        </p>
                        <ul className="max-h-[60vh] overflow-y-auto p-1.5">
                          {item.children.map((c) => (
                            <li key={c.label}>
                              <button
                                onClick={() => {
                                  if (c.goTo) onGoToGroup(c.goTo.brand, c.goTo.group);
                                  else onNavigate(c.target!);
                                }}
                                className="group/btn flex w-full items-center justify-between gap-3 px-3 py-[7px] text-left text-[13px] text-charcoal/85 transition-colors hover:bg-ivory hover:text-red"
                              >
                                {c.label}
                                <IconArrow className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right cluster: search + call + menu */}
          <div className="flex items-center gap-1.5 md:gap-2.5">
            <div className="hidden items-center sm:flex">
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  searchOpen || query ? "w-32 sm:w-40 2xl:w-56" : "w-0"
                )}
              >
                <input
                  ref={searchRef}
                  type="search"
                  value={query}
                  onChange={(e) => onQueryChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") scrollToId("parts");
                    if (e.key === "Escape") {
                      onQueryChange("");
                      setSearchOpen(false);
                    }
                  }}
                  placeholder="Search parts…"
                  aria-label="Search parts categories"
                  className="w-full border border-ivory/25 bg-navy-deep/70 px-3 py-2 text-[13px] text-ivory transition-colors placeholder:text-ivory/40 focus:border-ivory/60 focus:outline-none"
                />
              </div>
              {query && (
                <button
                  onClick={() => onQueryChange("")}
                  aria-label="Clear search"
                  className="p-2 text-ivory/60 transition-colors hover:text-ivory"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              )}
              <button
                onClick={() => {
                  const next = !searchOpen;
                  setSearchOpen(next);
                  if (next) searchRef.current?.focus();
                }}
                aria-label={searchOpen ? "Close search" : "Open parts search"}
                aria-expanded={searchOpen}
                className={cn(
                  "p-2 transition-colors",
                  searchOpen
                    ? "border border-ivory/40 text-ivory"
                    : "text-ivory/75 hover:border-ivory/25 hover:text-ivory"
                )}
              >
                <IconSearch className="h-5 w-5" />
              </button>
            </div>

            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-2.5 bg-red px-4 py-2.5 font-cond text-[0.85rem] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-red-deep 2xl:px-5 2xl:inline-flex"
            >
              <IconPhone className="h-4 w-4" />
              Call ZSI
            </a>
            <a
              href={CONTACT.phoneHref}
              aria-label={`Call ZSI at ${CONTACT.phone}`}
              className="inline-flex items-center gap-2 bg-red px-3 py-2.5 text-ivory transition-colors hover:bg-red-deep 2xl:hidden"
            >
              <IconPhone className="h-4.5 w-4.5" />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 text-ivory/80 transition-colors hover:text-ivory xl:hidden"
            >
              <IconMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <MobileMenu
          onNavigate={onNavigate}
          onGoToGroup={onGoToGroup}
          onClose={() => setMenuOpen(false)}
          query={query}
          onQueryChange={onQueryChange}
        />
      )}
    </>
  );
}
