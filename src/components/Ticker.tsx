import { TICKER_ITEMS } from "../data/site";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex items-center" aria-hidden={hidden || undefined}>
      {TICKER_ITEMS.map((t) => (
        <span key={t} className="flex items-center">
          <span className="px-7 font-cond text-[12.5px] font-medium tracking-[0.3em] text-ivory/95 uppercase">
            {t}
          </span>
          <span className="h-[5px] w-[5px] rotate-45 bg-ivory/40" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-red-deep bg-red">
      <div className="ticker-track flex w-max py-2.5">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
