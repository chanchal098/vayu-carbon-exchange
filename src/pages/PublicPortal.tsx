import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Activity, 
  Shield, 
  BookOpen, 
  Users, 
  Download,
  Share2,
  BarChart3,
  Globe,
  Leaf,
  TrendingUp,
  FileCheck
} from "lucide-react";
import Navigation from "@/components/Navigation";
import CarbonMap from "@/components/CarbonMap";
import RealTimeData from "@/components/RealTimeData";
import { Link } from "react-router-dom";

const PublicPortal = () => {
  const publicFeatures = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "View Project Map",
      description: "Explore India's blue carbon restoration projects on an interactive map",
      color: "text-primary"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Live Dashboard",
      description: "Real-time monitoring of carbon credit transactions and market activity",
      color: "text-success"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transaction Transparency",
      description: "Blockchain-verified transaction history with complete transparency",
      color: "text-accent"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Verify Carbon Impact",
      description: "Access verified MRV data and environmental impact measurements",
      color: "text-warning"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educational Resources",
      description: "Learn about blue carbon ecosystems and carbon credit markets",
      color: "text-primary"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Benefits",
      description: "See how coastal communities benefit from carbon projects",
      color: "text-success"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Download Reports",
      description: "Access public reports, impact assessments, and project documentation",
      color: "text-accent"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Share Project Stories",
      description: "Discover success stories from communities and restoration projects",
      color: "text-warning"
    }
  ];

  const impactMetrics = [
    {
      value: "152,400",
      label: "Tons CO₂ Sequestered",
      icon: <Leaf className="w-6 h-6" />,
      color: "text-success"
    },
    {
      value: "47",
      label: "Active Projects",
      icon: <Globe className="w-6 h-6" />,
      color: "text-primary"
    },
    {
      value: "₹24.5M",
      label: "Total Trading Volume",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-accent"
    },
    {
      value: "128",
      label: "Community Partners",
      icon: <Users className="w-6 h-6" />,
      color: "text-warning"
    }
  ];

  const educationalResources = [
    {
      title: "What is Blue Carbon?",
      description: "Learn about carbon stored in coastal and marine ecosystems",
      category: "Basics"
    },
    {
      title: "How Carbon Credits Work",
      description: "Understanding the carbon credit market and tokenization",
      category: "Market"
    },
    {
      title: "MRV Methodology",
      description: "Monitoring, Reporting, and Verification processes explained",
      category: "Technical"
    },
    {
      title: "Community Participation Guide",
      description: "How coastal communities can participate in carbon projects",
      category: "Community"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 carbon-particle"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Public Portal</Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transparent Carbon Action
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Explore India's blockchain-based carbon credit ecosystem. View projects, 
              track impact, and understand how blue carbon restoration drives climate action.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 vayu-glow">
                <MapPin className="w-5 h-5 mr-2" />
                Explore Projects
              </Button>
              <Link to="/register">
                <Button variant="outline" className="border-primary/30">
                  Join Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-card border-border/20 text-center">
                <CardContent className="p-6">
                  <div className={`${metric.color} mb-3 flex justify-center`}>
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold carbon-counter mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-carbon">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Public Features
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive information about India's carbon credit ecosystem 
              without needing an account
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/20 shadow-card-vayu hover:shadow-glow transition-all duration-500 group"
              >
                <CardContent className="p-6">
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Map */}
      <CarbonMap />

      {/* Real-time Data */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Live Market Data
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track real-time carbon credit transactions and market activity
            </p>
          </div>
          
          <RealTimeData />
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Educational Resources
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about blue carbon, carbon markets, and climate action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationalResources.map((resource, index) => (
              <Card key={index} className="bg-gradient-card border-border/20 hover:shadow-glow transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{resource.category}</Badge>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="ghost" size="sm" className="text-primary">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-card border-primary/30 shadow-glow-accent">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Ready to Participate?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join VAYU DAO as a project developer, verifier, or corporate buyer 
                to actively participate in India's carbon credit ecosystem
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="bg-gradient-primary hover:opacity-90 vayu-glow">
                    <FileCheck className="w-5 h-5 mr-2" />
                    Create Account
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="border-primary/30">
                    Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PublicPortal;
