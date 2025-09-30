import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Users, 
  Building2, 
  Shield, 
  TrendingUp,
  Coins,
  Globe,
  Award,
  CheckCircle2
} from "lucide-react";

const roadmapStages = [
  {
    phase: "Phase 1",
    title: "Platform Launch",
    status: "completed",
    icon: <Rocket className="w-6 h-6" />,
    description: "Foundation & Infrastructure",
    milestones: [
      "Blockchain MRV system deployment",
      "Smart contract development",
      "Initial pilot projects",
      "NCCR partnership established"
    ],
    timeline: "Q1 2024",
    color: "text-success"
  },
  {
    phase: "Phase 2",
    title: "Community Onboarding",
    status: "in-progress",
    icon: <Users className="w-6 h-6" />,
    description: "NGO & Panchayat Integration",
    milestones: [
      "100+ community projects registered",
      "Mobile app for project submission",
      "Training programs launched",
      "Regional support centers"
    ],
    timeline: "Q2-Q3 2024",
    color: "text-primary"
  },
  {
    phase: "Phase 3",
    title: "Corporate Integration",
    status: "upcoming",
    icon: <Building2 className="w-6 h-6" />,
    description: "Enterprise Carbon Market",
    milestones: [
      "Fortune 500 company partnerships",
      "ESG compliance dashboard",
      "Bulk credit purchasing API",
      "Corporate reporting tools"
    ],
    timeline: "Q4 2024",
    color: "text-accent"
  },
  {
    phase: "Phase 4",
    title: "Advanced Verification",
    status: "upcoming",
    icon: <Shield className="w-6 h-6" />,
    description: "AI-powered MRV Enhancement",
    milestones: [
      "Satellite imagery integration",
      "AI verification algorithms",
      "IoT sensor deployment",
      "Real-time monitoring system"
    ],
    timeline: "Q1 2025",
    color: "text-warning"
  },
  {
    phase: "Phase 5",
    title: "Market Expansion",
    status: "upcoming",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "National Scale-up",
    milestones: [
      "1000+ active projects",
      "All coastal states covered",
      "Secondary market launch",
      "Trading volume ₹500M+"
    ],
    timeline: "Q2-Q3 2025",
    color: "text-primary"
  },
  {
    phase: "Phase 6",
    title: "International Carbon Credits",
    status: "upcoming",
    icon: <Globe className="w-6 h-6" />,
    description: "Global Market Integration",
    milestones: [
      "International registry linkage",
      "Cross-border credit trading",
      "Global corporate partnerships",
      "Verra & Gold Standard certification"
    ],
    timeline: "Q4 2025",
    color: "text-accent"
  },
  {
    phase: "Phase 7",
    title: "Revenue & Sustainability",
    status: "upcoming",
    icon: <Coins className="w-6 h-6" />,
    description: "Platform Monetization",
    milestones: [
      "Transaction fee model active",
      "Premium analytics subscriptions",
      "API licensing revenue",
      "Break-even achieved"
    ],
    timeline: "2026",
    color: "text-warning"
  },
  {
    phase: "Phase 8",
    title: "Mission Achievement",
    status: "upcoming",
    icon: <Award className="w-6 h-6" />,
    description: "National Climate Goals",
    milestones: [
      "5M+ tons CO₂ sequestered",
      "Significant Net Zero 2030 contribution",
      "100,000+ community members",
      "India's premier carbon platform"
    ],
    timeline: "2026-2030",
    color: "text-success"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return <Badge className="bg-success text-success-foreground">Completed</Badge>;
    case 'in-progress':
      return <Badge className="bg-primary text-primary-foreground">In Progress</Badge>;
    case 'upcoming':
      return <Badge variant="outline">Upcoming</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const Roadmap = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Platform Roadmap
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial launch to becoming India's premier carbon credit platform - 
            our journey to support Net Zero 2030 and Mission 2070
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-success via-primary to-accent hidden lg:block"></div>

          {/* Roadmap stages */}
          <div className="space-y-12">
            {roadmapStages.map((stage, index) => (
              <div 
                key={stage.phase}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-card border-4 ${
                    stage.status === 'completed' ? 'border-success' :
                    stage.status === 'in-progress' ? 'border-primary' :
                    'border-muted'
                  } flex items-center justify-center ${stage.color}`}>
                    {stage.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full lg:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                }`}>
                  <Card className={`bg-gradient-card border-border/20 shadow-card-vayu hover:shadow-glow transition-all duration-500 animate-fade-in ${
                    stage.status === 'in-progress' ? 'border-primary/50 shadow-glow-accent' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge variant="outline" className="mb-2">{stage.phase}</Badge>
                          <h3 className="text-xl font-bold mb-1">{stage.title}</h3>
                          <p className="text-sm text-primary font-medium">{stage.description}</p>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(stage.status)}
                          <div className="text-xs text-muted-foreground mt-2">
                            {stage.timeline}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        {stage.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              stage.status === 'completed' ? 'text-success' : 'text-muted-foreground'
                            }`} />
                            <span className={`text-sm ${
                              stage.status === 'completed' ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {milestone}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Mobile icon */}
                <div className="lg:hidden mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-card border-2 ${
                    stage.status === 'completed' ? 'border-success' :
                    stage.status === 'in-progress' ? 'border-primary' :
                    'border-muted'
                  } flex items-center justify-center ${stage.color}`}>
                    {stage.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success metrics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-success/10 border-success/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-success carbon-counter mb-2">
                5M+
              </div>
              <div className="text-success font-medium">Tons CO₂ Target</div>
              <div className="text-xs text-muted-foreground mt-1">By 2030</div>
            </CardContent>
          </Card>

          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary carbon-counter mb-2">
                1000+
              </div>
              <div className="text-primary font-medium">Active Projects</div>
              <div className="text-xs text-muted-foreground mt-1">Target by 2025</div>
            </CardContent>
          </Card>

          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent carbon-counter mb-2">
                ₹500M+
              </div>
              <div className="text-accent font-medium">Trading Volume</div>
              <div className="text-xs text-muted-foreground mt-1">Annual target</div>
            </CardContent>
          </Card>

          <Card className="bg-warning/10 border-warning/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-warning carbon-counter mb-2">
                100K+
              </div>
              <div className="text-warning font-medium">Community Members</div>
              <div className="text-xs text-muted-foreground mt-1">Empowered</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
