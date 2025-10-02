import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { AlertCircle, TrendingDown, Lock } from "lucide-react";

const emissionsData = [
  { country: "China", value: 11680, color: "hsl(0, 70%, 50%)" },
  { country: "USA", value: 5280, color: "hsl(20, 70%, 50%)" },
  { country: "India", value: 3190, color: "hsl(160, 84%, 39%)" },
  { country: "Russia", value: 1780, color: "hsl(200, 70%, 50%)" },
  { country: "Japan", value: 1070, color: "hsl(240, 70%, 50%)" }
];

const marketChallenges = [
  { name: "Transparency Issues", value: 35, color: "hsl(0, 70%, 50%)" },
  { name: "Verification Delays", value: 28, color: "hsl(30, 70%, 50%)" },
  { name: "Financial Barriers", value: 22, color: "hsl(160, 84%, 39%)" },
  { name: "Technical Complexity", value: 15, color: "hsl(200, 70%, 50%)" }
];

const blueeCarbonPotential = [
  { ecosystem: "Mangroves", potential: 450, current: 120 },
  { ecosystem: "Seagrass", potential: 180, current: 35 },
  { ecosystem: "Salt Marshes", potential: 70, current: 18 }
];

export const IndiaMarketAnalysis = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          Section 1
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          India's Carbon Market Landscape
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Analyzing India's position in global carbon markets and identifying critical gaps in the voluntary carbon credit ecosystem
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <TrendingDown className="w-6 h-6 text-primary" />
            Global CO₂ Emissions (Million Tons)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={emissionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="country" stroke="hsl(var(--foreground))" />
              <YAxis stroke="hsl(var(--foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground mt-4">
            India ranks 3rd globally in emissions but has immense potential for carbon sequestration through blue carbon ecosystems.
          </p>
        </Card>
        
        <Card className="p-6 bg-card border-border">
          <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-destructive" />
            Market Challenges Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={marketChallenges}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="hsl(var(--primary))"
                dataKey="value"
              >
                {marketChallenges.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground mt-4">
            Transparency and verification delays account for 63% of market challenges.
          </p>
        </Card>
      </div>
      
      <Card className="p-8 bg-gradient-to-br from-destructive/10 via-card to-card border-destructive/30">
        <div className="flex items-start gap-4">
          <Lock className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Critical Research Finding: India's MRV Gap
            </h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              Our research confirms that <span className="font-bold text-destructive">India currently lacks a decentralized, verifiable Monitoring, Reporting, and Verification (MRV) system</span> that ensures transparency, accuracy, and efficient carbon credit generation. Traditional systems face:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span><strong>6-9 month verification delays</strong> compared to global standards of 2-3 months</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span><strong>Opaque pricing mechanisms</strong> with 25-30% intermediary costs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span><strong>Limited rural community access</strong> due to crypto-only payment systems</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span><strong>Single-layer verification</strong> prone to accuracy issues and fraud</span>
              </li>
            </ul>
            <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-4 mt-6">
              <p className="text-sm font-semibold text-foreground">
                Nine Indian renewable energy projects were flagged in 2024 for producing "problematic" carbon credits totaling 47.7 million credits, highlighting the urgent need for robust MRV systems.
              </p>
            </div>
          </div>
        </div>
      </Card>
      
      <Card className="p-8 bg-card border-border">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          India's Blue Carbon Sequestration Potential vs Current Utilization
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={blueeCarbonPotential}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="ecosystem" stroke="hsl(var(--foreground))" />
            <YAxis stroke="hsl(var(--foreground))" label={{ value: 'Million Tons CO₂', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Legend />
            <Bar dataKey="potential" fill="hsl(var(--primary))" name="Total Potential" radius={[8, 8, 0, 0]} />
            <Bar dataKey="current" fill="hsl(var(--muted))" name="Current Utilization" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
          <p className="text-sm text-foreground">
            <strong>Key Insight:</strong> Only 24.7% of India's blue carbon potential is currently utilized. VAYU DAO's framework can unlock the remaining 75.3%, representing approximately <strong>527 million tons of CO₂ sequestration capacity</strong> - equivalent to 16.5% of India's annual emissions.
          </p>
        </div>
      </Card>
    </section>
  );
};