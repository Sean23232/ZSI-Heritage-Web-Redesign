import {
  CONTACT,
  FOOTER_NAV,
  FOOTER_SERVICES,
  type BrandId,
} from "../data/site";
import { IconMail, IconPhone, IconPin } from "./Icons";
import { Logo } from "./Header";

interface Props {
  onNavigate: (id: string) => void;
  onGoToGroup: (brand: BrandId, group: string | null) => void;
}

function ColHeading({ children }: { children: string }) {
  return (
    <h4 className="font-cond text-[11px] font-semibold tracking-[0.28em] text-ivory/45 uppercase">
      {children}
    </h4>
  );
}

export function Footer({ onNavigate, onGoToGroup }: Props) {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <Logo onClick={() => onNavigate("home")} />
          <p className="mt-6 max-w-[300px] text-[13.5px] leading-relaxed text-ivory/60">
            VW / Audi &amp; Mercedes-Benz Specialists Since 1982. Independent,
            hands-on, and proud of it — serving the German automotive community
            from Pahrump, Nevada.
          </p>
        </div>

        <nav aria-label="Footer">
          <ColHeading>Navigation</ColHeading>
          <ul className="mt-5 space-y-2.5">
            {FOOTER_NAV.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() =>
                    item.brand ? onGoToGroup(item.brand, null) : onNavigate(item.target)
                  }
                  className="text-[13.5px] text-ivory/70 transition-colors hover:text-ivory"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Specialist services">
          <ColHeading>Specialist Services</ColHeading>
          <ul className="mt-5 space-y-2.5">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.label}>
                <button
                  onClick={() => onNavigate(s.target)}
                  className="text-[13.5px] text-ivory/70 transition-colors hover:text-ivory"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColHeading>Contact</ColHeading>
          <ul className="mt-5 space-y-3.5 text-[13.5px] text-ivory/70">
            <li className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-red-light" />
              {CONTACT.locationFull}
            </li>
            <li>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-ivory"
              >
                <IconPhone className="h-4 w-4 shrink-0 text-red-light" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-3 break-all transition-colors hover:text-ivory"
              >
                <IconMail className="h-4 w-4 shrink-0 text-red-light" />
                {CONTACT.email}
              </a>
            </li>
            <li className="pt-1 font-cond text-[10.5px] tracking-[0.22em] text-ivory/40 uppercase">
              {CONTACT.service}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-3 px-5 py-6 text-[12.5px] text-ivory/45 md:flex-row md:items-center md:px-8">
          <p>
            © {new Date().getFullYear()} Z &amp; S Imports (ZSI). All rights
            reserved.
          </p>
          <p className="font-cond tracking-[0.18em] uppercase">
            Keeping Classic German Automobiles Alive Since 1982.
          </p>
          <button
            onClick={() => onNavigate("home")}
            className="font-cond text-[11px] tracking-[0.24em] text-ivory/50 uppercase transition-colors hover:text-ivory"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
