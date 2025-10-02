import { Badge } from "@/components/ui/badge";
import { ResearchHero } from "@/components/research/ResearchHero";
import { ResearchNavigation } from "@/components/research/ResearchNavigation";
import { ExecutiveSummary } from "@/components/research/ExecutiveSummary";
import { IndiaMarketAnalysis } from "@/components/research/IndiaMarketAnalysis";
import { BlockchainComparison } from "@/components/research/BlockchainComparison";
import { MRVFramework } from "@/components/research/MRVFramework";
import { EconomicImpact } from "@/components/research/EconomicImpact";
import { GovernmentBodies } from "@/components/research/GovernmentBodies";
import { GlobalComparison } from "@/components/research/GlobalComparison";
import { TechnicalArchitecture } from "@/components/research/TechnicalArchitecture";
import { Conclusion } from "@/components/research/Conclusion";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResearchHero />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex gap-8">
          {/* Sticky Navigation Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <ResearchNavigation />
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 space-y-16">
            <section id="abstract" className="scroll-mt-24">
              <ExecutiveSummary />
            </section>
            
            <section id="india-market" className="scroll-mt-24">
              <IndiaMarketAnalysis />
            </section>
            
            <section id="government" className="scroll-mt-24">
              <GovernmentBodies />
            </section>
            
            <section id="mrv" className="scroll-mt-24">
              <MRVFramework />
            </section>
            
            <section id="blockchain" className="scroll-mt-24">
              <BlockchainComparison />
            </section>
            
            <section id="global" className="scroll-mt-24">
              <GlobalComparison />
            </section>
            
            <section id="architecture" className="scroll-mt-24">
              <TechnicalArchitecture />
            </section>
            
            <section id="impact" className="scroll-mt-24">
              <EconomicImpact />
            </section>
            
            <section id="conclusion" className="scroll-mt-24">
              <Conclusion />
            </section>
          </main>
        </div>
      </div>
      
      <footer className="bg-card border-t border-border mt-24 py-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="outline" className="text-primary">
              Published Research
            </Badge>
            <Badge variant="outline" className="text-primary">
              January 2025
            </Badge>
            <Badge variant="outline" className="text-primary">
              Team Algorix
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm font-semibold">
            © 2025 VAYU DAO. A Blockchain-Powered Framework for Transparent Blue Carbon Credit Management
          </p>
          <p className="text-muted-foreground text-xs">
            Author: Shriom Verma | Researchers: Team Algorix
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Research;