import type { ReactElement, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M5.2 4h3.2l1.6 4.2-2.1 1.4a11.6 11.6 0 0 0 4.9 4.9l1.5-2.1 4.2 1.6v3.2a1.8 1.8 0 0 1-2 1.8A15.3 15.3 0 0 1 3.4 6a1.8 1.8 0 0 1 1.8-2Z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
    <path d="m4.5 7 7.5 5.6L19.5 7" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.8-5.4-6.8-10.6a6.8 6.8 0 0 1 13.6 0C18.8 15.6 12 21 12 21Z" />
    <circle cx="12" cy="10.2" r="2.4" />
  </svg>
);

export const IconSearch = (p: P) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="6.3" />
    <path d="m15.8 15.8 4.4 4.4" />
  </svg>
);

export const IconChevron = (p: P) => (
  <svg {...base(p)}>
    <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M3.5 7h17" />
    <path d="M3.5 12h11" />
    <path d="M3.5 17h17" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.8 4.3 4.4L19 7" />
  </svg>
);

export const IconAlert = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3.8 2.8 19.6h18.4L12 3.8Z" />
    <path d="M12 10v4.2" />
    <path d="M12 16.8v.2" />
  </svg>
);

export const IconFlag = (p: P) => (
  <svg {...base(p)}>
    <path d="M5.5 21V4" />
    <path d="M5.5 4.6c3.8-2 6 1.8 10.6-.2 1-.4 2-.4 2.4-.2v8.4c-.4-.2-1.4-.2-2.4.2-4.6 2-6.8-1.8-10.6.2" />
  </svg>
);

export const IconArchive = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="4.5" width="17" height="4.5" rx="0.5" />
    <path d="M5.5 9v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9" />
    <path d="M10 12.8h4" />
  </svg>
);

export const IconGear = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.8v2.6M12 18.6v2.6M21.2 12h-2.6M5.4 12H2.8M18.5 5.5l-1.9 1.9M7.4 16.6l-1.9 1.9M18.5 18.5l-1.9-1.9M7.4 7.4 5.5 5.5" />
  </svg>
);

export const IconEngine = (p: P) => (
  <svg {...base(p)}>
    <path d="M8 8.5h5l2 2.5h3.5v-1.8h2v7.6h-2v-1.8H15l-2 2.5H9.5L8 15H6V8.5h2Z" />
    <path d="M6 10.2H3.8M6 13.5H4.4M9.8 8.5V6h4v2.5" />
    <path d="M10.2 12.4h3.6" />
  </svg>
);

export const IconVan = (p: P) => (
  <svg {...base(p)}>
    <path d="M2.8 16.5V7.6c0-.5.4-.9.9-.9h9.4l3.6 4.4h4.5v5.4" />
    <path d="M13.1 6.7v4.4h8" />
    <circle cx="7.6" cy="16.8" r="1.9" />
    <circle cx="16.6" cy="16.8" r="1.9" />
    <path d="M9.5 16.8h5.2" />
  </svg>
);

export const IconSwap = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 8.2h13.5" />
    <path d="m14.5 4.5 3.7 3.7-3.7 3.7" />
    <path d="M20 15.8H6.5" />
    <path d="m9.5 12.1-3.7 3.7 3.7 3.7" />
  </svg>
);

export const IconTalk = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 6.2c0-.7.5-1.2 1.2-1.2h13.6c.7 0 1.2.5 1.2 1.2v9c0 .7-.5 1.2-1.2 1.2H10l-4.6 3.4v-3.4H5.2A1.2 1.2 0 0 1 4 15.2v-9Z" />
    <path d="M8 9h8M8 12h5.5" />
  </svg>
);

export const IconCalendar = (p: P) => (
  <svg {...base(p)}>
    <rect x="4" y="5.5" width="16" height="14.5" rx="1" />
    <path d="M4 10h16M8.3 3.5v4M15.7 3.5v4" />
    <path d="M8 14h3" />
  </svg>
);

export const IconBox = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="m4.2 7.6 7.8 4.4 7.8-4.4" />
    <path d="M12 12v8.8" />
  </svg>
);

export const IconWrench = (p: P) => (
  <svg {...base(p)}>
    <path d="M14.7 6.2a4.2 4.2 0 0 0-5.4 5.3L3.6 17.2a1.6 1.6 0 0 0 0 2.2l1 1a1.6 1.6 0 0 0 2.2 0l5.7-5.7a4.2 4.2 0 0 0 5.3-5.4l-2.8 2.8-2.1-2.1 2.8-2.8Z" />
  </svg>
);

export const ICONS: Record<string, (p: P) => ReactElement> = {
  flag: IconFlag,
  archive: IconArchive,
  gear: IconGear,
  phone: IconPhone,
  engine: IconEngine,
  van: IconVan,
  swap: IconSwap,
  talk: IconTalk,
};
