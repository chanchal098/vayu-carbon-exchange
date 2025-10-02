import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Database, Layers, Lock, Zap } from "lucide-react";

const architectureComponents = [
  {
    layer: "Frontend Layer",
    icon: Layers,
    technologies: ["React Native", "React.js", "Firebase Auth", "GPS APIs"],
    components: [
      "Project Developer Mobile App",
      "Verifier Web Portal",
      "Admin Dashboard",
      "Public Marketplace"
    ],
    description: "User-facing interfaces for all stakeholder groups"
  },
  {
    layer: "Integration Layer",
    icon: Database,
    technologies: ["REST APIs", "WebSockets", "BBPS Gateway", "Multi-Wallet Connect"],
    components: [
      "Government Database APIs (NCCR, FSI)",
      "Payment Gateway Integration",
      "Satellite Data Feeds",
      "Blockchain Oracles"
    ],
    description: "Middleware connecting external systems to core platform"
  },
  {
    layer: "MRV Engine",
    icon: Cpu,
    technologies: ["Computer Vision AI", "GIS Analysis", "Multi-Source Validation"],
    components: [
      "Image Analysis Module",
      "Cross-Reference Engine",
      "Satellite Data Processor",
      "Audit Trail Generator"
    ],
    description: "Proprietary 4-layer verification system"
  },
  {
    layer: "Blockchain Layer",
    icon: Lock,
    technologies: ["Polygon PoS", "Smart Contracts (Solidity)", "IPFS"],
    components: [
      "ERC-20 Token Standard (BCC)",
      "Automated Minting Contracts",
      "Revenue Sharing Logic",
      "Immutable Audit Logs"
    ],
    description: "Decentralized ledger for credit tokenization and transactions"
  }
];

const paymentFlow = [
  {
    step: 1,
    action: "Credit Sale",
    description: "Corporate buyer purchases BCC tokens on marketplace",
    technical: "Smart contract executes payment capture"
  },
  {
    step: 2,
    action: "Payment Routing",
    description: "System detects recipient preference (crypto wallet or bank account)",
    technical: "Payment router checks recipient configuration"
  },
  {
    step: 3,
    action: "Distribution",
    description: "Funds distributed: 80% developer, 15% community, 5% platform",
    technical: "Smart contract automatically splits payment"
  },
  {
    step: 4,
    action: "Settlement",
    description: "Crypto settlements to wallets OR BBPS conversion to INR + bank transfer",
    technical: "Multi-gateway settlement: blockchain or BBPS API"
  }
];

const securityFeatures = [
  {
    feature: "Multi-Signature Wallets",
    description: "Critical operations require consensus from multiple authorized parties",
    benefit: "Prevents single-point compromise"
  },
  {
    feature: "Smart Contract Audits",
    description: "Third-party security audits before deployment",
    benefit: "Eliminates code vulnerabilities"
  },
  {
    feature: "Encrypted Data Storage",
    description: "Sensitive project data encrypted at rest and in transit",
    benefit: "GDPR and data protection compliance"
  },
  {
    feature: "Role-Based Access Control",
    description: "Granular permissions for developers, verifiers, admins",
    benefit: "Limits potential for internal misuse"
  },
  {
    feature: "Immutable Audit Trails",
    description: "All actions recorded on blockchain with timestamps",
    benefit: "Complete transparency and accountability"
  },
  {
    feature: "Oracle Redundancy",
    description: "Multiple data sources for blockchain-external information",
    benefit: "Prevents oracle manipulation attacks"
  }
];

export const TechnicalArchitecture = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          Section 6
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Technical Architecture
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deep dive into VAYU DAO's system design, payment infrastructure, and security framework
        </p>
      </div>
      
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card border-primary/30">
        <h3 className="text-2xl font-bold mb-4 text-foreground">
          System Architecture Overview
        </h3>
        <p className="text-lg leading-relaxed text-foreground/90 mb-6">
          VAYU DAO employs a <strong>4-layer architecture</strong> that separates concerns while enabling seamless integration across components. This modular design ensures scalability, maintainability, and security while providing flexibility for future enhancements.
        </p>
      </Card>
      
      <div className="space-y-6">
        {architectureComponents.map((component, index) => {
          const Icon = component.icon;
          return (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{component.layer}</h3>
                    <p className="text-muted-foreground">{component.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 border border-border rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {component.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-muted/30 border border-border rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary mb-2">Components:</p>
                      <ul className="space-y-1">
                        {component.components.map((comp, idx) => (
                          <li key={idx} className="text-xs text-foreground/80 flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{comp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          Dual Payment Gateway Flow
        </h3>
        <p className="text-lg leading-relaxed text-foreground/90 mb-6">
          VAYU DAO's groundbreaking dual payment system is the first in blockchain carbon markets to support both cryptocurrency and traditional banking settlements. This innovation eliminates the primary barrier to rural community participation.
        </p>
        <div className="space-y-4">
          {paymentFlow.map((step, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 border border-border rounded-lg">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{step.step}</span>
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="font-semibold text-foreground">{step.action}</h4>
                <p className="text-sm text-foreground/80">{step.description}</p>
                <div className="bg-card border border-primary/20 rounded p-2">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary font-semibold">Technical:</span> {step.technical}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
          <p className="text-sm text-foreground">
            <strong>Innovation Highlight:</strong> The BBPS integration enables automatic INR conversion and bank transfer within 3-5 business days, compared to traditional systems requiring 6-18 months for payment settlement. This represents a <strong>98% reduction in payment time</strong> for rural project developers.
          </p>
        </div>
      </Card>
      
      <Card className="p-8 bg-gradient-to-br from-card via-muted/20 to-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
          <Lock className="w-6 h-6 text-destructive" />
          Security & Trust Framework
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-foreground">{feature.feature}</h4>
              <p className="text-sm text-foreground/80">{feature.description}</p>
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-primary">
                  <strong>Benefit:</strong> {feature.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
          <Code className="w-6 h-6 text-primary" />
          Smart Contract Logic
        </h3>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-foreground/90">
            VAYU DAO's smart contracts encode complex business logic directly on the blockchain, ensuring transparent and automated operations:
          </p>
          <div className="bg-muted/30 border border-border rounded-lg p-6 font-mono text-sm space-y-2">
            <div className="text-primary">// BCC Token Minting Contract</div>
            <div className="text-foreground/80">function mintBCC(projectId, verifiedTons, recipient) {'{}'}</div>
            <div className="pl-4 text-foreground/80">require(verificationComplete == true);</div>
            <div className="pl-4 text-foreground/80">require(allLayersApproved == true);</div>
            <div className="pl-4 text-foreground/80">uint256 tokens = verifiedTons * 1e18; // 1 BCC = 1 ton</div>
            <div className="pl-4 text-foreground/80">_mint(recipient, tokens);</div>
            <div className="pl-4 text-foreground/80">emit CreditMinted(projectId, tokens, block.timestamp);</div>
            <div className="text-foreground/80">{'}'}</div>
            <div className="mt-4 text-primary">// Revenue Distribution Contract</div>
            <div className="text-foreground/80">function distributeSale(saleAmount, developer, communityFund) {'{}'}</div>
            <div className="pl-4 text-foreground/80">uint256 devShare = saleAmount * 80 / 100;</div>
            <div className="pl-4 text-foreground/80">uint256 communityShare = saleAmount * 15 / 100;</div>
            <div className="pl-4 text-foreground/80">uint256 platformShare = saleAmount * 5 / 100;</div>
            <div className="pl-4 text-foreground/80">transfer(developer, devShare);</div>
            <div className="pl-4 text-foreground/80">transfer(communityFund, communityShare);</div>
            <div className="pl-4 text-foreground/80">transfer(platform, platformShare);</div>
            <div className="text-foreground/80">{'}'}</div>
          </div>
          <p className="text-sm text-muted-foreground">
            Smart contracts are audited by third-party security firms and deployed on Polygon's energy-efficient PoS network, ensuring both security and environmental responsibility.
          </p>
        </div>
      </Card>
    </section>
  );
};