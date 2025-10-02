import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export const ExecutiveSummary = () => {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          Executive Summary
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Abstract
        </h2>
      </div>
      
      <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/20 border-primary/20 relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-32 h-32 text-primary" />
        </div>
        
        <div className="relative space-y-6 text-lg leading-relaxed text-foreground/90">
          <p className="text-xl font-semibold text-primary">
            The voluntary carbon market presents a promising mechanism for channeling climate finance into nature-based solutions, yet it remains hampered by transparency deficits and structural inefficiencies.
          </p>
          
          <p>
            This research presents <span className="font-semibold text-primary">VAYU DAO</span>, a blockchain-based Monitoring, Reporting, and Verification (MRV) platform specifically designed for India's blue carbon ecosystems. By leveraging Polygon blockchain technology, smart contracts, and proprietary MRV technology, VAYU DAO creates a tamper-proof system for carbon credit tokenization that enhances market transparency while ensuring equitable benefit distribution to local communities through innovative dual payment gateways.
          </p>
          
          <p>
            Our framework demonstrates how strategic technical architecture can optimize environmental impact and economic viability, presenting a scalable model for harnessing India's estimated <span className="font-bold text-primary">700 million ton CO₂ sequestration potential</span> from coastal ecosystems while addressing the unique financial inclusion needs of rural Indian communities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">700M</div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Potential</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">67%</div>
              <div className="text-sm text-muted-foreground">Faster Verification</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">4-Layer</div>
              <div className="text-sm text-muted-foreground">MRV System</div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};