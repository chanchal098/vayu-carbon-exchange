import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Zap, DollarSign, Users, Shield } from "lucide-react";

const platformFeatures = [
  { feature: "MRV Capability", klimaDAO: 3, toucan: 2, moss: 2, vayuDAO: 10 },
  { feature: "Financial Inclusion", klimaDAO: 2, toucan: 2, moss: 1, vayuDAO: 10 },
  { feature: "Automation", klimaDAO: 7, toucan: 6, moss: 5, vayuDAO: 9 },
  { feature: "Community Focus", klimaDAO: 4, toucan: 3, moss: 5, vayuDAO: 10 },
  { feature: "Transparency", klimaDAO: 8, toucan: 7, moss: 6, vayuDAO: 10 },
  { feature: "Credit Quality", klimaDAO: 6, toucan: 5, moss: 7, vayuDAO: 9 }
];

const marketGrowth = [
  { year: "2020", klimaDAO: 0, toucan: 0, vayuDAO: 0 },
  { year: "2021", klimaDAO: 5, toucan: 2, vayuDAO: 0 },
  { year: "2022", klimaDAO: 17, toucan: 8, vayuDAO: 0 },
  { year: "2023", klimaDAO: 28, toucan: 15, vayuDAO: 0 },
  { year: "2024", klimaDAO: 42, toucan: 25, vayuDAO: 0 },
  { year: "2025", klimaDAO: 55, toucan: 38, vayuDAO: 12 }
];

const platforms = [
  {
    name: "KlimaDAO",
    focus: "Global carbon credit tokenization",
    blockchain: "Polygon (Ethereum L2)",
    launched: "2021",
    retired: "17.3M+ tons CO₂",
    strengths: [
      "Large-scale carbon retirement",
      "Strong DeFi integration",
      "Established market presence",
      "Automated pricing mechanisms"
    ],
    limitations: [
      "Depends on external MRV (Verra)",
      "Crypto-only accessibility",
      "No native verification system",
      "Limited community benefit structure"
    ],
    icon: Zap,
    color: "hsl(280, 70%, 50%)"
  },
  {
    name: "Toucan Protocol",
    focus: "Carbon credit bridging infrastructure",
    blockchain: "Multiple chains (Celo, Polygon)",
    launched: "2021",
    retired: "TCO2 tokenization bridge",
    strengths: [
      "Bridges traditional to blockchain",
      "Supports multiple credit types",
      "Cross-chain compatibility",
      "Open infrastructure"
    ],
    limitations: [
      "No native MRV capabilities",
      "Depends on traditional registries",
      "Technical barriers for rural users",
      "Limited focus on specific ecosystems"
    ],
    icon: Shield,
    color: "hsl(200, 70%, 50%)"
  },
  {
    name: "Moss",
    focus: "Amazon rainforest conservation",
    blockchain: "Ethereum",
    launched: "2020",
    retired: "Focus on REDD+ projects",
    strengths: [
      "Specialized in forest conservation",
      "NFT-based financing models",
      "Strong conservation partnerships",
      "Verified Carbon Standard (VCS) certified"
    ],
    limitations: [
      "Geographic limitation (Amazon focus)",
      "Traditional MRV dependency",
      "High transaction costs (Ethereum)",
      "No blue carbon focus"
    ],
    icon: Users,
    color: "hsl(120, 70%, 40%)"
  },
  {
    name: "VAYU DAO",
    focus: "India blue carbon ecosystems",
    blockchain: "Polygon PoS",
    launched: "2025",
    retired: "152,400 tons CO₂ (projected)",
    strengths: [
      "Proprietary 4-layer MRV system",
      "Dual payment gateway (crypto + BBPS)",
      "India-specific regulatory integration",
      "Community-first revenue sharing (15%)",
      "Native blue carbon expertise",
      "Government database integration"
    ],
    limitations: [
      "New platform (limited track record)",
      "Geographic focus (India coastal)",
      "Requires regulatory approval cycles"
    ],
    icon: DollarSign,
    color: "hsl(160, 84%, 39%)"
  }
];

export const BlockchainComparison = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          Section 4
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Blockchain Carbon Platforms Analysis
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive comparison of leading blockchain-based carbon credit platforms and VAYU DAO's unique positioning
        </p>
      </div>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Platform Capability Radar Chart
        </h3>
        <ResponsiveContainer width="100%" height={500}>
          <RadarChart data={platformFeatures}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis dataKey="feature" stroke="hsl(var(--foreground))" />
            <PolarRadiusAxis angle={90} domain={[0, 10]} stroke="hsl(var(--muted-foreground))" />
            <Radar name="KlimaDAO" dataKey="klimaDAO" stroke="hsl(280, 70%, 50%)" fill="hsl(280, 70%, 50%)" fillOpacity={0.3} />
            <Radar name="Toucan" dataKey="toucan" stroke="hsl(200, 70%, 50%)" fill="hsl(200, 70%, 50%)" fillOpacity={0.3} />
            <Radar name="Moss" dataKey="moss" stroke="hsl(120, 70%, 40%)" fill="hsl(120, 70%, 40%)" fillOpacity={0.3} />
            <Radar name="VAYU DAO" dataKey="vayuDAO" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.5} />
            <Legend />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          Rating scale: 1-10 based on capability depth, automation level, and user accessibility
        </p>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <Card key={index} className={`p-6 bg-card border-border ${platform.name === "VAYU DAO" ? "md:col-span-2 border-primary/50" : ""}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${platform.color}20` }}>
                  <Icon className="w-8 h-8" style={{ color: platform.color }} />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground italic mb-2">{platform.focus}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">{platform.blockchain}</Badge>
                      <Badge variant="outline" className="text-xs">Launched: {platform.launched}</Badge>
                      <Badge variant="outline" className="text-xs">{platform.retired}</Badge>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Strengths:</p>
                      <ul className="space-y-1">
                        {platform.strengths.map((strength, idx) => (
                          <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-destructive mb-2">Limitations:</p>
                      <ul className="space-y-1">
                        {platform.limitations.map((limitation, idx) => (
                          <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 flex-shrink-0" />
                            <span>{limitation}</span>
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
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Market Growth Trajectory (Million Tons CO₂)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={marketGrowth}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="year" stroke="hsl(var(--foreground))" />
            <YAxis stroke="hsl(var(--foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="klimaDAO" stroke="hsl(280, 70%, 50%)" strokeWidth={2} name="KlimaDAO" />
            <Line type="monotone" dataKey="toucan" stroke="hsl(200, 70%, 50%)" strokeWidth={2} name="Toucan" />
            <Line type="monotone" dataKey="vayuDAO" stroke="hsl(var(--primary))" strokeWidth={3} name="VAYU DAO" />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-muted-foreground mt-4">
          VAYU DAO's projected growth based on India's blue carbon potential and pilot project results
        </p>
      </Card>
      
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card border-primary/30">
        <h3 className="text-2xl font-bold mb-4 text-foreground">
          VAYU DAO's Unique Value Proposition
        </h3>
        <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
          <p>
            While platforms like KlimaDAO and Toucan Protocol have successfully demonstrated blockchain's potential in carbon markets, they operate primarily as <strong>tokenization layers</strong> on top of existing verification infrastructure. VAYU DAO represents a <strong>paradigm shift</strong> by creating native MRV capabilities specifically designed for blue carbon ecosystems.
          </p>
          <p>
            Our research reveals that <strong>no existing blockchain carbon platform</strong> offers:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Multi-layer native MRV:</strong> Independent verification across 4 data sources vs single-source dependency</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>True financial inclusion:</strong> BBPS integration enabling direct bank transfers for rural participants</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Government database integration:</strong> Real-time API connections with NCCR, FSI, and BEE</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Blue carbon specialization:</strong> Purpose-built for coastal ecosystems with India-specific parameters</span>
            </li>
          </ul>
        </div>
      </Card>
    </section>
  );
};