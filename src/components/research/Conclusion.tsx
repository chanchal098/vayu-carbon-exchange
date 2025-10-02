import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Lightbulb, Target } from "lucide-react";

const keyContributions = [
  "First blockchain carbon platform with proprietary 4-layer MRV system integrating government databases",
  "Groundbreaking dual payment gateway (crypto + BBPS) enabling rural community participation",
  "India-specific blue carbon focus addressing 700 million ton CO₂ sequestration potential",
  "67% reduction in verification time compared to traditional systems",
  "Transparent, automated revenue sharing ensuring 15% guaranteed community benefits",
  "Scalable architecture adaptable to other developing economies and nature-based solutions"
];

const futureDirections = [
  {
    title: "IoT Sensor Integration",
    description: "Deploy real-time environmental monitoring sensors in restoration sites",
    timeline: "2025-2026",
    impact: "Continuous MRV data streams"
  },
  {
    title: "AI-Powered Credit Forecasting",
    description: "Machine learning models to predict long-term sequestration rates",
    timeline: "2026",
    impact: "Enhanced investor confidence"
  },
  {
    title: "Cross-Border Interoperability",
    description: "Integration with international carbon registries and standards",
    timeline: "2026-2027",
    impact: "Global market access"
  },
  {
    title: "Ecosystem Expansion",
    description: "Extend framework to terrestrial forests, agricultural soil carbon",
    timeline: "2027-2028",
    impact: "Comprehensive NBS platform"
  },
  {
    title: "DeFi Integration",
    description: "Carbon-backed lending, staking mechanisms for long-term holders",
    timeline: "2027-2028",
    impact: "Enhanced market liquidity"
  },
  {
    title: "Regional Replication",
    description: "Deploy framework in Bangladesh, Sri Lanka, Southeast Asia",
    timeline: "2028-2030",
    impact: "Global blue carbon network"
  }
];

const policyRecommendations = [
  {
    audience: "Indian Government",
    recommendations: [
      "Establish standardized MRV protocols for blue carbon projects",
      "Create tax incentives for carbon credit purchasers",
      "Integrate VAYU DAO framework with CCTS compliance market",
      "Provide grant funding for coastal community training programs"
    ]
  },
  {
    audience: "International Bodies",
    recommendations: [
      "Recognize blockchain-verified credits in Paris Agreement Article 6 mechanisms",
      "Develop interoperability standards for cross-border carbon markets",
      "Support technology transfer to developing coastal nations",
      "Establish quality benchmarks for decentralized MRV systems"
    ]
  },
  {
    audience: "Corporate Buyers",
    recommendations: [
      "Prioritize high-integrity credits with multi-layer verification",
      "Support community-benefit structures in credit purchases",
      "Engage directly with project developers for impact verification",
      "Diversify offset portfolios to include blue carbon ecosystems"
    ]
  }
];

export const Conclusion = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          Section 8
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Conclusion & Future Directions
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Synthesizing key findings and charting the path forward for blockchain-based blue carbon management
        </p>
      </div>
      
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card border-primary/30">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Research Contributions
        </h3>
        <p className="text-lg leading-relaxed text-foreground/90 mb-6">
          This research makes several significant contributions to both academic understanding and practical implementation of blockchain technology in environmental markets:
        </p>
        <div className="space-y-3">
          {keyContributions.map((contribution, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-card border border-primary/20 rounded-lg">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/90">{contribution}</p>
            </div>
          ))}
        </div>
      </Card>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
          <Target className="w-6 h-6 text-primary" />
          Key Findings Summary
        </h3>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/30 border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">Theoretical Contributions</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Demonstrates blockchain's potential beyond tokenization to create native verification infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Establishes framework for context-appropriate technology in developing economies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Validates multi-layer MRV as superior to single-source verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Confirms financial inclusion as critical barrier to grassroots participation</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">Practical Contributions</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Provides scalable blueprint for blue carbon credit systems in coastal nations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Creates replicable model for government database integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Demonstrates hybrid payment infrastructure for rural financial inclusion</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Establishes benchmarks for transparent community benefit structures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
      
      <Card className="p-8 bg-gradient-to-br from-card via-muted/20 to-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-primary" />
          Future Research & Development Roadmap
        </h3>
        <div className="space-y-6">
          {futureDirections.map((direction, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 py-2">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-foreground text-lg">{direction.title}</h4>
                <Badge variant="outline" className="text-xs">{direction.timeline}</Badge>
              </div>
              <p className="text-sm text-foreground/80 mb-2">{direction.description}</p>
              <p className="text-xs text-primary font-semibold">Expected Impact: {direction.impact}</p>
            </div>
          ))}
        </div>
      </Card>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Policy Recommendations
        </h3>
        <p className="text-lg leading-relaxed text-foreground/90 mb-6">
          The successful implementation and scaling of VAYU DAO's framework requires coordinated policy support across multiple stakeholder groups:
        </p>
        <div className="space-y-6">
          {policyRecommendations.map((policy, index) => (
            <div key={index} className="bg-muted/30 border border-border rounded-lg p-6">
              <h4 className="font-semibold text-primary text-lg mb-4">For {policy.audience}:</h4>
              <ul className="space-y-2">
                {policy.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
      
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card border-primary/30">
        <h3 className="text-2xl font-bold mb-4 text-foreground">
          Final Reflection
        </h3>
        <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
          <p>
            The VAYU DAO framework represents more than a technological innovation - it embodies a <strong>paradigm shift</strong> in how environmental markets can balance efficiency with equity, global standards with local contexts, and technological sophistication with accessibility.
          </p>
          <p>
            As climate urgency intensifies and carbon markets continue their exponential growth, the fundamental question is not whether blockchain technology will transform environmental finance, but <strong>how</strong> it will do so. Will it simply replicate existing power structures in a more efficient digital form, or will it create genuinely new pathways for grassroots participation and equitable benefit sharing?
          </p>
          <p>
            VAYU DAO's India-first, community-centered approach offers a compelling answer: by designing technology <strong>for</strong> and <strong>with</strong> the communities who serve as ecosystem stewards, we can create carbon markets that deliver both environmental integrity and social justice.
          </p>
          <p>
            The 700 million ton CO₂ sequestration potential of India's blue carbon ecosystems is not merely a number - it represents the collective stewardship of millions of coastal communities, the biodiversity of critical marine ecosystems, and a significant contribution to global climate goals. VAYU DAO's framework provides the infrastructure to unlock this potential while ensuring the benefits flow back to those who make it possible.
          </p>
          <p className="font-semibold text-primary">
            As we stand at the intersection of climate crisis and technological revolution, platforms like VAYU DAO demonstrate that the tools for systemic change already exist. The question now is one of implementation, scaling, and sustained commitment to the principles of transparency, inclusion, and environmental integrity that guided its creation.
          </p>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-card border-primary/50 text-center">
          <div className="text-5xl font-bold text-primary mb-2">700M</div>
          <div className="text-sm text-muted-foreground">Tons CO₂ Potential Unlocked</div>
        </Card>
        <Card className="p-6 bg-card border-primary/50 text-center">
          <div className="text-5xl font-bold text-primary mb-2">250M+</div>
          <div className="text-sm text-muted-foreground">Coastal Communities Empowered</div>
        </Card>
        <Card className="p-6 bg-card border-primary/50 text-center">
          <div className="text-5xl font-bold text-primary mb-2">2070</div>
          <div className="text-sm text-muted-foreground">India's Net-Zero Target</div>
        </Card>
      </div>
    </section>
  );
};