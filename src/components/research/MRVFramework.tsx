import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Satellite, Database, CheckCircle, ArrowRight } from "lucide-react";

const mrvLayers = [
  {
    layer: "Layer 1",
    name: "Image Analysis & Geospatial Verification",
    icon: Camera,
    description: "Project developers upload geotagged images with dimensional data",
    technology: "Proprietary computer vision algorithms",
    validates: ["Vegetation density", "Coverage area", "Health indicators", "GPS coordinates"],
    accuracy: "±2 meters spatial accuracy"
  },
  {
    layer: "Layer 2",
    name: "Government Database Cross-Referencing",
    icon: Database,
    description: "Automated APIs cross-verify project data with official sources",
    technology: "Real-time API integration with NCCR, FSI databases",
    validates: ["Land ownership", "Historical ecosystem data", "Regulatory compliance", "Project authenticity"],
    accuracy: "100% regulatory compliance"
  },
  {
    layer: "Layer 3",
    name: "Satellite & Drone Data Integration",
    icon: Satellite,
    description: "Independent validation through remote sensing technology",
    technology: "Multi-spectral satellite imagery + scheduled drone surveys",
    validates: ["Long-term ecosystem health", "Carbon sequestration rates", "Project claims verification", "Environmental changes"],
    accuracy: "Monthly monitoring cycles"
  },
  {
    layer: "Layer 4",
    name: "Third-Party Auditing",
    icon: CheckCircle,
    description: "Certified verifiers conduct physical site visits and audits",
    technology: "Blockchain-recorded audit trails",
    validates: ["Physical site conditions", "Reported vs actual alignment", "Community engagement", "Methodological compliance"],
    accuracy: "Quarterly comprehensive audits"
  }
];

const comparisonData = [
  {
    metric: "Verification Layers",
    traditional: "1 (Single auditor)",
    klimaDAO: "1 (Relies on Verra)",
    vayuDAO: "4 (Multi-source)"
  },
  {
    metric: "Verification Time",
    traditional: "6-9 months",
    klimaDAO: "3-6 months*",
    vayuDAO: "2-3 months"
  },
  {
    metric: "Data Sources",
    traditional: "Manual reports",
    klimaDAO: "Existing standards",
    vayuDAO: "6+ integrated sources"
  },
  {
    metric: "Automation Level",
    traditional: "0% (Fully manual)",
    klimaDAO: "30% (Tokenization only)",
    vayuDAO: "75% (End-to-end)"
  },
  {
    metric: "Fraud Prevention",
    traditional: "Low",
    klimaDAO: "Medium",
    vayuDAO: "High"
  }
];

export const MRVFramework = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          Section 3
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Proprietary 4-Layer MRV System
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          VAYU DAO's groundbreaking multi-source verification framework that ensures carbon credit integrity through independent validation channels
        </p>
      </div>
      
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card border-primary/30">
        <h3 className="text-2xl font-bold mb-4 text-foreground">
          The Verification Crisis in Carbon Markets
        </h3>
        <p className="text-lg leading-relaxed text-foreground/90">
          Research confirms that <strong>traditional single-layer MRV systems are fundamentally inadequate</strong>. The 2024 report identifying 47.7 million "problematic" carbon credits demonstrates that relying on a single verification source creates systematic vulnerabilities. VAYU DAO's 4-layer architecture addresses this by requiring <strong>independent corroboration across multiple data sources</strong>, making fraudulent claims mathematically improbable.
        </p>
      </Card>
      
      <div className="space-y-6">
        {mrvLayers.map((layer, index) => {
          const Icon = layer.icon;
          return (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5">
                {index + 1}
              </div>
              <div className="relative flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 text-primary border-primary">
                      {layer.layer}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{layer.name}</h3>
                    <p className="text-muted-foreground">{layer.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 border border-border rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary mb-2">Technology:</p>
                      <p className="text-sm text-foreground/80">{layer.technology}</p>
                    </div>
                    <div className="bg-muted/30 border border-border rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary mb-2">Accuracy:</p>
                      <p className="text-sm text-foreground/80">{layer.accuracy}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Validates:</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {layer.validates.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {index < mrvLayers.length - 1 && (
                <div className="flex justify-center mt-4">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                </div>
              )}
            </Card>
          );
        })}
      </div>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          MRV System Comparison: Traditional vs Blockchain Solutions
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-foreground font-semibold">Metric</th>
                <th className="text-left py-4 px-4 text-foreground font-semibold">Traditional System</th>
                <th className="text-left py-4 px-4 text-foreground font-semibold">KlimaDAO</th>
                <th className="text-left py-4 px-4 text-primary font-semibold">VAYU DAO</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4 font-semibold text-foreground">{row.metric}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.traditional}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.klimaDAO}</td>
                  <td className="py-4 px-4 text-primary font-semibold">{row.vayuDAO}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          * KlimaDAO verification time depends on external registries like Verra
        </p>
      </Card>
      
      <Card className="p-8 bg-gradient-to-br from-primary/5 via-card to-card border-primary/20">
        <h3 className="text-2xl font-bold mb-4 text-foreground">
          Technical Innovation: Automated Cross-Validation
        </h3>
        <p className="text-lg leading-relaxed text-foreground/90 mb-4">
          VAYU DAO's MRV engine automatically cross-validates data across all four layers in real-time. When discrepancies are detected between layers (e.g., satellite data doesn't match reported coverage), the system automatically flags the project for enhanced review. This creates a <strong>"trust through verification"</strong> model where credits can only be minted when all four independent data sources align within defined tolerance thresholds.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-card border border-primary/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
            <div className="text-sm text-muted-foreground">Fraud Detection Rate</div>
          </div>
          <div className="bg-card border border-primary/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-2">67%</div>
            <div className="text-sm text-muted-foreground">Faster than Traditional</div>
          </div>
          <div className="bg-card border border-primary/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-2">75%</div>
            <div className="text-sm text-muted-foreground">Process Automation</div>
          </div>
        </div>
      </Card>
    </section>
  );
};