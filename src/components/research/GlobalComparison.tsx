import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Globe, TrendingUp, AlertCircle } from "lucide-react";

const globalMarketSize = [
  { region: "Global VCM", size: 2000, growth: 32 },
  { region: "Europe", size: 850, growth: 28 },
  { region: "North America", size: 680, growth: 35 },
  { region: "Asia-Pacific", size: 320, growth: 45 },
  { region: "India", size: 45, growth: 62 }
];

const indiaAdvantages = [
  {
    title: "Untapped Blue Carbon Potential",
    value: "700M tons CO₂",
    description: "India's coastal ecosystems represent one of the world's largest underutilized carbon sequestration resources",
    impact: "22% of India's annual emissions"
  },
  {
    title: "Largest Coastline in Asia",
    value: "7,517 km",
    description: "Extensive coastal geography spanning 9 states and 4 union territories",
    impact: "4,992 sq km mangrove cover"
  },
  {
    title: "Digital Payment Infrastructure",
    value: "450M+ users",
    description: "BBPS integration enables direct market access for rural communities without crypto barriers",
    impact: "98% banking penetration"
  },
  {
    title: "Growing Carbon Market",
    value: "62% CAGR",
    description: "Fastest growing carbon market in Asia-Pacific region",
    impact: "$2.5B projected by 2030"
  },
  {
    title: "Policy Support",
    value: "CCTS 2024",
    description: "Comprehensive regulatory framework with Carbon Credit Trading Scheme",
    impact: "Net Zero 2070 commitment"
  },
  {
    title: "Community Engagement",
    value: "250M+ coastal",
    description: "Large coastal population with deep ecosystem knowledge and conservation motivation",
    impact: "Direct stakeholder benefits"
  }
];

const marketComparison = [
  {
    aspect: "Market Maturity",
    global: "Established (15+ years)",
    india: "Emerging (2-3 years)",
    advantage: "Early mover opportunity"
  },
  {
    aspect: "MRV Infrastructure",
    global: "Fragmented, multiple standards",
    india: "Minimal decentralized systems",
    advantage: "Green field for innovation"
  },
  {
    aspect: "Credit Price",
    global: "$10-40 per ton",
    india: "$5-15 per ton",
    advantage: "Competitive pricing"
  },
  {
    aspect: "Verification Time",
    global: "3-6 months average",
    india: "6-9 months traditional",
    advantage: "High efficiency gains possible"
  },
  {
    aspect: "Financial Inclusion",
    global: "Crypto-dominated",
    india: "Hybrid potential (BBPS)",
    advantage: "Unique accessibility"
  },
  {
    aspect: "Blue Carbon Focus",
    global: "Limited specialization",
    india: "High ecosystem diversity",
    advantage: "Natural resource advantage"
  }
];

export const GlobalComparison = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          Section 5
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          India vs Global Carbon Markets
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Why India represents a strategic opportunity for blockchain-based blue carbon innovation
        </p>
      </div>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          Voluntary Carbon Market Size & Growth (2025)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={globalMarketSize}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="region" stroke="hsl(var(--foreground))" />
            <YAxis yAxisId="left" stroke="hsl(var(--foreground))" label={{ value: 'Market Size ($M)', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--primary))" label={{ value: 'Growth Rate (%)', angle: 90, position: 'insideRight' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="size" fill="hsl(var(--muted))" name="Market Size ($M)" radius={[8, 8, 0, 0]} />
            <Bar yAxisId="right" dataKey="growth" fill="hsl(var(--primary))" name="Growth Rate (%)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
          <p className="text-sm text-foreground">
            <strong>Key Insight:</strong> India's voluntary carbon market is currently valued at $45M but growing at 62% CAGR - the fastest in Asia-Pacific. This represents a <strong>$2.5B market opportunity by 2030</strong>, yet only 2.25% of the current global VCM size.
          </p>
        </div>
      </Card>
      
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card border-primary/30">
        <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-primary" />
          Why India? Strategic Advantages
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indiaAdvantages.map((advantage, index) => (
            <div key={index} className="bg-card border border-primary/20 rounded-lg p-6 space-y-3">
              <div className="text-3xl font-bold text-primary">{advantage.value}</div>
              <h4 className="font-semibold text-foreground">{advantage.title}</h4>
              <p className="text-sm text-foreground/80">{advantage.description}</p>
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <strong>Impact:</strong> {advantage.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Comparative Market Analysis: Global vs India
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-foreground font-semibold">Aspect</th>
                <th className="text-left py-4 px-4 text-foreground font-semibold">Global Market</th>
                <th className="text-left py-4 px-4 text-foreground font-semibold">Indian Market</th>
                <th className="text-left py-4 px-4 text-primary font-semibold">India's Advantage</th>
              </tr>
            </thead>
            <tbody>
              {marketComparison.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4 font-semibold text-foreground">{row.aspect}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.global}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.india}</td>
                  <td className="py-4 px-4 text-primary font-semibold">{row.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
      <Card className="p-8 bg-gradient-to-br from-card via-muted/20 to-card border-border">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              The India Opportunity: First-Mover Advantage
            </h3>
            <div className="text-lg leading-relaxed text-foreground/90 space-y-4">
              <p>
                India's carbon market presents a unique <strong>"perfect storm"</strong> of conditions for blockchain innovation:
              </p>
              <ol className="space-y-3 ml-6 list-decimal">
                <li>
                  <strong>Massive Untapped Potential:</strong> 700 million tons of CO₂ sequestration capacity remains underutilized, representing 22% of India's annual emissions - a resource base larger than many European countries' total emissions.
                </li>
                <li>
                  <strong>Infrastructure Gap = Innovation Opportunity:</strong> The absence of established MRV infrastructure means no legacy systems to disrupt. VAYU DAO can establish the gold standard rather than compete with entrenched players.
                </li>
                <li>
                  <strong>Policy Tailwinds:</strong> The 2024 CCTS launch, updated NDCs, and NDA establishment demonstrate government commitment to carbon market development, creating a supportive regulatory environment.
                </li>
                <li>
                  <strong>Financial Inclusion Edge:</strong> India's BBPS infrastructure enables a <strong>unique hybrid payment model</strong> that no global platform can replicate, addressing the critical barrier of rural community access.
                </li>
                <li>
                  <strong>Cultural Alignment:</strong> India's coastal communities have centuries of ecosystem stewardship traditions. Unlike markets where conservation is externally imposed, Indian projects benefit from indigenous knowledge and community buy-in.
                </li>
              </ol>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-6">
                <p className="font-semibold text-foreground mb-2">Strategic Conclusion:</p>
                <p className="text-foreground/90">
                  While global carbon markets are larger and more mature, India offers a <strong>once-in-a-decade opportunity</strong> to build foundational infrastructure for a rapidly growing market. VAYU DAO's India-first strategy positions the platform to capture significant market share during the critical 2025-2030 growth phase when the market is projected to grow 55x.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Scalability Beyond India
        </h3>
        <p className="text-lg leading-relaxed text-foreground/90 mb-4">
          While VAYU DAO's initial focus is India's blue carbon ecosystems, the platform's architecture is designed for <strong>international expansion</strong>. Key scalability factors:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-muted/30 border border-border rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Geographic Expansion</h4>
            <p className="text-sm text-foreground/80">
              The 4-layer MRV framework can adapt to other coastal nations in South Asia, Southeast Asia, and Africa with similar blue carbon potential and financial inclusion challenges.
            </p>
          </div>
          <div className="bg-muted/30 border border-border rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Ecosystem Diversification</h4>
            <p className="text-sm text-foreground/80">
              Modular architecture allows expansion to terrestrial carbon (forests, agriculture) and other nature-based solutions while maintaining core verification integrity.
            </p>
          </div>
          <div className="bg-muted/30 border border-border rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Technology Transfer</h4>
            <p className="text-sm text-foreground/80">
              Open-source MRV components enable adaptation by other developing nations, creating a global network of interoperable carbon credit systems.
            </p>
          </div>
          <div className="bg-muted/30 border border-border rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Market Integration</h4>
            <p className="text-sm text-foreground/80">
              Cross-chain compatibility and international payment gateways facilitate seamless integration with global voluntary and compliance markets.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};