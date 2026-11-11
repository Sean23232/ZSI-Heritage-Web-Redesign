import { useCallback, useState } from "react";
import type { BrandId } from "./data/site";
import { scrollToId } from "./lib/motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Ticker } from "./components/Ticker";
import { BrandPanels } from "./components/BrandPanels";
import { PartsDirectory, type DirRequest } from "./components/PartsDirectory";
import { RareParts } from "./components/RareParts";
import { Restoration } from "./components/Restoration";
import { About } from "./components/About";
import { HowToOrder } from "./components/HowToOrder";
import { ContactSection, type Prefill } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [query, setQuery] = useState("");
  const [prefill, setPrefill] = useState<Prefill | null>(null);
  const [dirRequest, setDirRequest] = useState<DirRequest | null>(null);

  const handleNavigate = useCallback((id: string) => scrollToId(id), []);

  const handleGoToGroup = useCallback((brand: BrandId, group: string | null) => {
    setDirRequest({ brand, group, nonce: Date.now() });
    scrollToId("parts");
  }, []);

  const handleAsk = useCallback((make: string, part: string) => {
    setPrefill({ make, part, nonce: Date.now() });
    scrollToId("contact");
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <Header
        query={query}
        onQueryChange={setQuery}
        onNavigate={handleNavigate}
        onGoToGroup={handleGoToGroup}
      />
      <main>
        <Hero
          onExplore={() => handleGoToGroup("volkswagen", null)}
          onTalk={() => scrollToId("contact")}
        />
        <TrustStrip />
        <Ticker />
        <BrandPanels onExplore={(b) => handleGoToGroup(b, null)} />
        <PartsDirectory
          query={query}
          onClearQuery={() => setQuery("")}
          dirRequest={dirRequest}
          onNavigate={handleNavigate}
          onGoToGroup={handleGoToGroup}
          onAsk={handleAsk}
        />
        <RareParts onAsk={handleAsk} />
        <Restoration onNavigate={handleNavigate} />
        <About onNavigate={handleNavigate} />
        <HowToOrder />
        <ContactSection prefill={prefill} />
      </main>
      <Footer onNavigate={handleNavigate} onGoToGroup={handleGoToGroup} />
    </div>
  );
}
