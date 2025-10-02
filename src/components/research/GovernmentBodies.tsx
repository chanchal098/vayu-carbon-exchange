import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, Leaf, Database, Shield, FileCheck } from "lucide-react";

const governmentBodies = [
  {
    name: "Ministry of Environment, Forest and Climate Change (MoEFCC)",
    role: "Primary regulatory authority for India's climate policy and carbon markets",
    icon: Building2,
    responsibilities: [
      "Oversees National Designated Authority (NDA) for carbon trading",
      "Implements Carbon Credit Trading Scheme (CCTS) launched July 2024",
      "Manages India's NDC commitments: 45% emissions intensity reduction by 2030",
      "Regulates voluntary carbon market framework"
    ],
    integration: "VAYU DAO integrates with MoEFCC databases for compliance verification"
  },
  {
    name: "Bureau of Energy Efficiency (BEE)",
    role: "Implements and monitors India's Carbon Credit Trading System",
    icon: Leaf,
    responsibilities: [
      "Operates India's compliance carbon market (CCTS)",
      "Sets emission intensity targets for covered entities",
      "Manages carbon credit certification and trading infrastructure",
      "Expected trading start: H2 2026"
    ],
    integration: "VAYU DAO aligns with BEE standards for credit certification"
  },
  {
    name: "National Centre for Coastal Research (NCCR)",
    role: "Scientific authority for coastal ecosystem monitoring and blue carbon",
    icon: Globe,
    responsibilities: [
      "Conducts blue carbon stock assessments in mangrove regions",
      "Provides scientific data on coastal ecosystem carbon sequestration",
      "Monitors coastal environmental changes using satellite data",
      "Maintains national coastal ecosystem databases"
    ],
    integration: "VAYU DAO directly integrates NCCR databases for MRV verification"
  },
  {
    name: "Forest Survey of India (FSI)",
    role: "National-level carbon stock assessment in mangrove ecosystems",
    icon: Database,
    responsibilities: [
      "Conducts 'Estimation of Carbon Stock in Mangrove Ecosystem' program",
      "Provides baseline data for blue carbon credit calculations",
      "Maps India's 4,992 sq km of mangrove cover",
      "Regular monitoring and reporting of ecosystem health"
    ],
    integration: "VAYU DAO cross-references FSI data for project validation"
  },
  {
    name: "Central Pollution Control Board (CPCB)",
    role: "Environmental monitoring and pollution control",
    icon: Shield,
    responsibilities: [
      "Monitors environmental compliance of carbon projects",
      "Ensures co-benefits beyond carbon sequestration",
      "Validates environmental impact assessments",
      "Coordinates with state pollution control boards"
    ],
    integration: "Environmental compliance verification layer in VAYU DAO MRV"
  },
  {
    name: "National Designated Authority (NDA)",
    role: "21-member committee for carbon market governance under Paris Agreement",
    icon: FileCheck,
    responsibilities: [
      "Approves carbon credit projects under Article 6 of Paris Agreement",
      "Ensures projects contribute to India's NDC targets",
      "Validates internationally transferred mitigation outcomes (ITMOs)",
      "Chaired by MoEFCC Secretary, includes representatives from 10+ ministries"
    ],
    integration: "VAYU DAO projects require NDA approval; automated submission system"
  }
];

export const GovernmentBodies = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          Section 2
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Government & Regulatory Framework
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive mapping of Indian government bodies directly and indirectly involved in carbon credit and blue carbon MRV systems
        </p>
      </div>
      
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card border-primary/30">
        <h3 className="text-2xl font-bold mb-4 text-foreground">
          India's Carbon Market Governance Structure
        </h3>
        <p className="text-lg leading-relaxed text-foreground/90 mb-4">
          India's carbon credit ecosystem involves a complex network of regulatory bodies, each playing distinct roles in verification, certification, and market operations. The recent establishment of the Carbon Credit Trading Scheme (CCTS) in July 2024 marks a significant milestone in India's climate action framework.
        </p>
        <div className="bg-card/50 border border-border rounded-lg p-6 space-y-2">
          <p className="text-sm font-semibold text-primary">Key Regulatory Milestones:</p>
          <ul className="space-y-1 text-sm text-foreground/80">
            <li>• 2016: Paris Agreement ratification</li>
            <li>• 2022: Updated NDC target to 45% emissions intensity reduction</li>
            <li>• July 2024: CCTS regulations adopted</li>
            <li>• August 2024: NDA composition finalized</li>
            <li>• 2026: Expected start of compliance trading</li>
          </ul>
        </div>
      </Card>
      
      <div className="grid gap-6">
        {governmentBodies.map((body, index) => {
          const Icon = body.icon;
          return (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{body.name}</h3>
                    <p className="text-sm text-muted-foreground italic">{body.role}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Key Responsibilities:</p>
                    <ul className="space-y-1">
                      {body.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <p className="text-sm font-semibold text-primary mb-1">VAYU DAO Integration:</p>
                    <p className="text-sm text-foreground/80">{body.integration}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      <Card className="p-8 bg-gradient-to-br from-card via-muted/20 to-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Regulatory Integration Architecture
        </h3>
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border border-primary/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Key Government Bodies</div>
            </div>
            <div className="bg-card border border-primary/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-2">21</div>
              <div className="text-sm text-muted-foreground">NDA Members</div>
            </div>
            <div className="bg-card border border-primary/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-2">2026</div>
              <div className="text-sm text-muted-foreground">Trading Launch Year</div>
            </div>
          </div>
          
          <p className="text-foreground/80 leading-relaxed">
            VAYU DAO's architecture is designed for seamless integration with all six primary government bodies, ensuring regulatory compliance while maintaining decentralized verification. Our automated API connections enable real-time data exchange with NCCR, FSI, and BEE databases, reducing verification time by 67% compared to traditional manual processes.
          </p>
        </div>
      </Card>
    </section>
  );
};