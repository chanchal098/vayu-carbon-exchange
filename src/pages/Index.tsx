import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Coins, BarChart3, Leaf, Users, Building, Globe, CheckCircle2, TrendingUp, Activity } from "lucide-react";
import Navigation from "@/components/Navigation";
import CarbonMap from "@/components/EnhancedCarbonMap";
import LaserFlow from "@/components/LaserFlow";
import ResearchLink from "@/components/ResearchLink";
import RealTimeData from "@/components/RealTimeData";
import HelpDesk from "@/components/HelpDesk";
import CarbonChatbot from "@/components/CarbonChatbot";
import Roadmap from "@/components/Roadmap";
import vayuHero from "@/assets/vayu-hero.jpg";
const Index = () => {
  const features = [{
    icon: <Shield className="w-6 h-6" />,
    title: "Blockchain MRV System",
    description: "Immutable monitoring, reporting, and verification of carbon projects using advanced blockchain technology.",
    color: "text-primary"
  }, {
    icon: <Coins className="w-6 h-6" />,
    title: "Carbon Credit Tokenization",
    description: "Smart contracts automatically mint ERC-20 tokens (1 BCC = 1 ton CO₂e) when projects meet scientific criteria.",
    color: "text-success"
  }, {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-time Market Data",
    description: "Live trading dashboard with transparent pricing, volume tracking, and market analytics.",
    color: "text-accent"
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Multi-stakeholder Platform",
    description: "Unified access for NCCR admins, corporations, NGOs, and coastal communities.",
    color: "text-warning"
  }];
  const stats = [{
    label: "Carbon Credits Generated",
    value: "152,400",
    suffix: "tons CO₂e"
  }, {
    label: "Active Projects",
    value: "47",
    suffix: "restoration sites"
  }, {
    label: "Trading Volume",
    value: "₹24.5M",
    suffix: "24h volume"
  }, {
    label: "Community Partners",
    value: "128",
    suffix: "NGOs & Panchayats"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${vayuHero})`
      }}>
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          <LaserFlow 
            className=""
            style={{}}
            dpr={1}
            color="#00F0FF"
            horizontalBeamOffset={0.1}
            verticalBeamOffset={0.0}
            fogIntensity={0.3}
          />
        </div>
        
        <div className="absolute inset-0 carbon-particle"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-6">
              
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                VAYU DAO
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-foreground/90">
                Carbon MRV Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              India's first blockchain-powered registry for <strong className="text-primary">blue carbon ecosystems</strong>. 
              Supporting <strong className="text-mission-net-zero">Net Zero 2030</strong> and <strong className="text-mission-2070">Mission 2070</strong> 
              through transparent carbon credit tokenization and community empowerment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/login">
                <Button className="bg-gradient-primary hover:opacity-90 vayu-glow text-lg px-8 py-4 h-auto">
                  <Building className="w-5 h-5 mr-3" />
                  Access Platform
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
              
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 h-auto" onClick={() => document.getElementById('carbon-map')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                <Globe className="w-5 h-5 mr-3" />
                Explore Carbon Map
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/70 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary carbon-counter mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-accent font-medium mt-1">
                      {stat.suffix}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-carbon relative" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Platform Features
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools for blockchain-based carbon credit management, 
              verification, and trading in India's blue carbon ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <Card key={index} className="bg-gradient-card border-border/20 shadow-card-vayu hover:shadow-glow transition-all duration-500 group animate-scale-in">
                <CardContent className="p-8">
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Carbon Map Section */}
      <CarbonMap />

      {/* Real-time Data Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Live Market Data
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time carbon credit transactions, market analytics, and trading activity 
              across India's blockchain carbon marketplace.
            </p>
          </div>
          
          <RealTimeData />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden" id="mission">
        <div className="absolute inset-0 carbon-particle"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Supporting India's Climate Goals
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              VAYU DAO directly contributes to India's ambitious climate targets through 
              transparent, verifiable carbon credit generation and community empowerment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-mission-net-zero/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-mission-net-zero" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-mission-net-zero mb-3">Net Zero 2030</h3>
                      <p className="text-muted-foreground mb-4">
                        Accelerating India's path to carbon neutrality through blue carbon ecosystem restoration 
                        and transparent carbon credit markets.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-mission-net-zero h-2 rounded-full w-[24%] transition-all duration-1000"></div>
                        </div>
                        <span className="text-sm font-medium text-mission-net-zero">24%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-mission-2070/20 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-mission-2070" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-mission-2070 mb-3">Mission 2070</h3>
                      <p className="text-muted-foreground mb-4">
                        Long-term carbon neutrality vision supported by sustainable blue carbon projects 
                        and community-driven conservation efforts.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-mission-2070 h-2 rounded-full w-[12%] transition-all duration-1000"></div>
                        </div>
                        <span className="text-sm font-medium text-mission-2070">12%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Platform Impact</h3>
              
              {["Transparent MRV system for blue carbon ecosystems", "Community empowerment through carbon credit generation", "Real-time tracking of restoration progress", "Blockchain-verified environmental impact data", "Corporate ESG compliance and offset tracking"].map((item, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </div>)}

              <Card className="bg-primary/10 border-primary/20 mt-8">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary carbon-counter mb-2">
                      152,400
                    </div>
                    <div className="text-primary font-medium">
                      Tons CO₂ Sequestered via VAYU DAO
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Contributing to India's climate targets through verifiable carbon credits
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Link */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <ResearchLink />
        </div>
      </section>

      {/* Roadmap Section */}
      <Roadmap />

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Join India's Carbon Revolution
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Be part of India's first blockchain-based carbon MRV platform. 
              Whether you're an administrator, corporation, or community organization, 
              VAYU DAO empowers you to drive climate action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/login">
                <Button className="bg-gradient-primary hover:opacity-90 vayu-glow text-lg px-8 py-4 h-auto">
                  <Shield className="w-5 h-5 mr-3" />
                  Login
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
              
              <Link to="/register">
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 h-auto">
                  Create Account
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Help Components */}
      <HelpDesk />
      <CarbonChatbot />
    </div>;
};
export default Index;