import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from "recharts";
import { DollarSign, Users, TrendingUp, Target } from "lucide-react";

const revenueProjection = [
  { year: "2025", credits: 152, revenue: 2.3, community: 0.35 },
  { year: "2026", credits: 580, revenue: 8.7, community: 1.31 },
  { year: "2027", credits: 1850, revenue: 27.8, community: 4.17 },
  { year: "2028", credits: 4200, revenue: 63.0, community: 9.45 },
  { year: "2029", credits: 8100, revenue: 121.5, community: 18.23 },
  { year: "2030", credits: 14500, revenue: 217.5, community: 32.63 }
];

const economicMetrics = [
  {
    metric: "Transaction Cost Reduction",
    traditional: "25-30%",
    vayuDAO: "5-7%",
    saving: "75%",
    impact: "₹180-250 saved per ton",
    icon: DollarSign
  },
  {
    metric: "Verification Time",
    traditional: "6-9 months",
    vayuDAO: "2-3 months",
    saving: "67%",
    impact: "Faster cash flow for developers",
    icon: TrendingUp
  },
  {
    metric: "Community Revenue Share",
    traditional: "0-40% (variable)",
    vayuDAO: "15% (guaranteed)",
    saving: "Transparent",
    impact: "₹32.6M by 2030",
    icon: Users
  },
  {
    metric: "Payment Settlement",
    traditional: "6-18 months",
    vayuDAO: "3-5 days",
    saving: "98%",
    impact: "Working capital efficiency",
    icon: Target
  }
];

const caseStudy = {
  project: "Sundarbans Mangrove Restoration",
  area: "50 hectares",
  credits: "250 BCC/year",
  pricing: "$15/ton (₹1,250)",
  timeline: [
    { phase: "Registration", traditional: "4 weeks", vayuDAO: "1 week" },
    { phase: "Data Collection", traditional: "12 weeks", vayuDAO: "8 weeks" },
    { phase: "Verification", traditional: "24 weeks", vayuDAO: "6 weeks" },
    { phase: "Credit Issuance", traditional: "8 weeks", vayuDAO: "1 week" },
    { phase: "Payment Settlement", traditional: "52 weeks", vayuDAO: "1 week" }
  ],
  financials: {
    annualRevenue: 312500,
    developerShare: 250000,
    communityShare: 46875,
    platformFee: 15625,
    traditionalIntermediaryFees: 93750,
    savings: 78125
  }
};

export const EconomicImpact = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          Section 7
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Economic Impact Analysis
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Quantifying VAYU DAO's financial benefits for stakeholders and measuring environmental ROI
        </p>
      </div>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          5-Year Revenue Projection (Thousand Tons & Million ₹)
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={revenueProjection}>
            <defs>
              <linearGradient id="colorCredits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(160, 60%, 50%)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(160, 60%, 50%)" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="year" stroke="hsl(var(--foreground))" />
            <YAxis yAxisId="left" stroke="hsl(var(--foreground))" label={{ value: 'Credits (1000s)', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" stroke="hsl(160, 60%, 50%)" label={{ value: 'Revenue (₹M)', angle: 90, position: 'insideRight' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="credits" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorCredits)" name="Credits Generated (1000s)" />
            <Area yAxisId="right" type="monotone" dataKey="revenue" stroke="hsl(160, 60%, 50%)" fillOpacity={1} fill="url(#colorRevenue)" name="Total Revenue (₹M)" />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-primary">14.5M</div>
            <div className="text-sm text-muted-foreground">Projected Credits by 2030</div>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-primary">₹217.5M</div>
            <div className="text-sm text-muted-foreground">Total Revenue by 2030</div>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-primary">₹32.6M</div>
            <div className="text-sm text-muted-foreground">Community Share by 2030</div>
          </div>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6">
        {economicMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{metric.metric}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/30 border border-border rounded p-3">
                      <p className="text-xs text-muted-foreground mb-1">Traditional</p>
                      <p className="text-sm font-semibold text-foreground">{metric.traditional}</p>
                    </div>
                    <div className="bg-primary/10 border border-primary/30 rounded p-3">
                      <p className="text-xs text-primary mb-1">VAYU DAO</p>
                      <p className="text-sm font-semibold text-foreground">{metric.vayuDAO}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">Efficiency Gain:</span>
                    <span className="text-lg font-bold text-primary">{metric.saving}</span>
                  </div>
                  <p className="text-sm text-foreground/80">{metric.impact}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-card to-card border-primary/30">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Case Study: {caseStudy.project}
        </h3>
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Project Area</p>
              <p className="text-xl font-bold text-primary">{caseStudy.area}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Annual Credits</p>
              <p className="text-xl font-bold text-primary">{caseStudy.credits}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Credit Pricing</p>
              <p className="text-xl font-bold text-primary">{caseStudy.pricing}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Annual Revenue</p>
              <p className="text-xl font-bold text-primary">₹{(caseStudy.financials.annualRevenue / 1000).toFixed(1)}k</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Project Timeline Comparison:</h4>
            <div className="space-y-2">
              {caseStudy.timeline.map((phase, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-4 items-center p-3 bg-muted/30 border border-border rounded">
                  <span className="font-semibold text-foreground">{phase.phase}</span>
                  <span className="text-sm text-muted-foreground">Traditional: {phase.traditional}</span>
                  <span className="text-sm text-primary font-semibold">VAYU DAO: {phase.vayuDAO}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Total Timeline:</strong> Traditional system requires 100 weeks (23 months) from registration to payment. VAYU DAO completes the same process in 17 weeks (4 months), a <strong>83-week (19-month) reduction</strong>.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Financial Breakdown (Annual):</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-card border border-border rounded">
                  <span className="text-sm text-foreground">Gross Revenue</span>
                  <span className="font-semibold text-foreground">₹{(caseStudy.financials.annualRevenue / 1000).toFixed(1)}k</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/10 border border-primary/30 rounded">
                  <span className="text-sm text-foreground">Developer Share (80%)</span>
                  <span className="font-semibold text-primary">₹{(caseStudy.financials.developerShare / 1000).toFixed(1)}k</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/10 border border-primary/30 rounded">
                  <span className="text-sm text-foreground">Community Fund (15%)</span>
                  <span className="font-semibold text-primary">₹{(caseStudy.financials.communityShare / 1000).toFixed(1)}k</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card border border-border rounded">
                  <span className="text-sm text-foreground">Platform Fee (5%)</span>
                  <span className="font-semibold text-foreground">₹{(caseStudy.financials.platformFee / 1000).toFixed(1)}k</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Traditional Intermediary Fees:</p>
                  <p className="text-2xl font-bold text-destructive">₹{(caseStudy.financials.traditionalIntermediaryFees / 1000).toFixed(1)}k</p>
                  <p className="text-xs text-muted-foreground mt-1">(30% of revenue)</p>
                </div>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Annual Savings with VAYU DAO:</p>
                  <p className="text-2xl font-bold text-primary">₹{(caseStudy.financials.savings / 1000).toFixed(1)}k</p>
                  <p className="text-xs text-muted-foreground mt-1">(25% net savings)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-4 text-foreground">
          Environmental & Social ROI
        </h3>
        <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
          <p>
            Beyond direct financial returns, VAYU DAO generates substantial <strong>environmental and social value</strong>:
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-muted/30 border border-border rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-primary mb-2">700M</div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Potential</div>
              <div className="text-xs text-foreground/60 mt-2">22% of India's annual emissions</div>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-primary mb-2">250M+</div>
              <div className="text-sm text-muted-foreground">Coastal Population</div>
              <div className="text-xs text-foreground/60 mt-2">Direct beneficiaries</div>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-primary mb-2">4,992</div>
              <div className="text-sm text-muted-foreground">sq km Mangroves</div>
              <div className="text-xs text-foreground/60 mt-2">Ecosystem restoration</div>
            </div>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Climate Impact:</strong> Each ton of CO₂ sequestered offsets approximately 2,500 km of passenger car travel</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Biodiversity:</strong> Mangrove restoration creates critical habitat for 70+ fish species, supporting local fishing livelihoods</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Coastal Protection:</strong> Restored mangroves provide natural barriers against storm surges and coastal erosion</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Community Empowerment:</strong> 15% guaranteed revenue share creates sustainable funding for local conservation initiatives</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Gender Equity:</strong> Women's self-help groups, historically excluded from carbon markets, gain direct market access through BBPS integration</span>
            </li>
          </ul>
        </div>
      </Card>
    </section>
  );
};