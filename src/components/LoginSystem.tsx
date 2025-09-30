import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Building, 
  Users, 
  Shield, 
  Mail, 
  Lock, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginFormData {
  email: string;
  password: string;
  organizationId?: string;
}

const LoginSystem = () => {
  const [activeTab, setActiveTab] = useState<'admin' | 'buyer' | 'developer' | 'verifier'>('admin');
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    organizationId: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock successful login
      toast({
        title: "Login Successful",
        description: `Welcome to VAYU DAO ${activeTab.toUpperCase()} Portal`,
        className: "border-success/20 text-success",
      });

      // Navigate to appropriate dashboard
      navigate(`/${activeTab}/dashboard`);
    }, 1500);
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'admin': return <Shield className="w-5 h-5" />;
      case 'buyer': return <Building className="w-5 h-5" />;
      case 'developer': return <Users className="w-5 h-5" />;
      case 'verifier': return <CheckCircle2 className="w-5 h-5" />;
      default: return <User className="w-5 h-5" />;
    }
  };

  const getTabDescription = (tab: string) => {
    switch (tab) {
      case 'admin': 
        return {
          title: "Administrator Portal",
          description: "NCCR administrative access for project verification, MRV data review, token minting approval, and platform oversight.",
          features: [
            "Cross-Check with NCCR Database",
            "Validate Certification Standards",
            "Approve/Reject Projects & Token Minting",
            "Monitor Marketplace Transactions"
          ]
        };
      case 'buyer':
        return {
          title: "Buyer Portal (Companies/Startups)",
          description: "Corporate access for carbon credit purchasing, portfolio management, and ESG compliance tracking.",
          features: [
            "Browse & Purchase Carbon Tokens",
            "Filter by Project Type/Location",
            "Track Carbon Portfolio",
            "Generate ESG Reports & Retire Tokens"
          ]
        };
      case 'developer':
        return {
          title: "Project Developer Portal", 
          description: "Access for individuals, communities, NGOs, and coastal panchayats to submit projects and generate carbon credits.",
          features: [
            "Submit Project Details & Land Photos",
            "Enter Carbon Data & MRV Reports",
            "Track Verification Status",
            "List Tokens on Marketplace"
          ]
        };
      case 'verifier':
        return {
          title: "Verifier Portal",
          description: "Independent verification access for examining projects, conducting site visits, and submitting verification reports.",
          features: [
            "Access Verification Dashboard",
            "Examine Project Documents",
            "Verify Land Details & Carbon Calculations",
            "Submit Verification Reports & Site Visits"
          ]
        };
      default:
        return { title: "", description: "", features: [] };
    }
  };

  const currentTabInfo = getTabDescription(activeTab);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 carbon-particle"></div>
      
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Info Panel */}
        <div className="hidden lg:block space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Welcome to VAYU DAO
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              India's first blockchain-based blue carbon MRV platform supporting 
              Mission 2070 and Net Zero 2030 goals.
            </p>
          </div>

          <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                {getTabIcon(activeTab)}
                {currentTabInfo.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {currentTabInfo.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                {currentTabInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mission Badges */}
          <div className="flex gap-4">
            <div className="mission-badge rounded-lg px-4 py-2 text-center">
              <div className="font-bold text-sm">Mission 2070</div>
              <div className="text-xs opacity-80">Carbon Neutral India</div>
            </div>
            <div className="bg-gradient-primary/20 border border-primary/30 rounded-lg px-4 py-2 text-center">
              <div className="font-bold text-sm text-primary">Net Zero 2030</div>
              <div className="text-xs text-primary/80">Climate Action Goal</div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className="bg-card/95 backdrop-blur-md border-border/20 shadow-card-vayu animate-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Portal Access</CardTitle>
            <p className="text-muted-foreground">
              Choose your portal type and login to continue
            </p>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
              <TabsList className="grid w-full grid-cols-4 bg-muted/50">
                <TabsTrigger 
                  value="admin" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs"
                >
                  <Shield className="w-4 h-4 mr-1" />
                  Admin
                </TabsTrigger>
                <TabsTrigger 
                  value="buyer"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs"
                >
                  <Building className="w-4 h-4 mr-1" />
                  Buyer
                </TabsTrigger>
                <TabsTrigger 
                  value="developer"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs"
                >
                  <Users className="w-4 h-4 mr-1" />
                  Developer
                </TabsTrigger>
                <TabsTrigger 
                  value="verifier"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs"
                >
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Verifier
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <div className="mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder={`Enter your ${activeTab} email`}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  {activeTab !== 'admin' && (
                    <div className="space-y-2">
                      <Label htmlFor="orgId" className="text-sm font-medium">
                        Organization ID
                      </Label>
                      <Input
                        id="orgId"
                        type="text"
                        placeholder={`Enter your ${activeTab} organization ID`}
                        value={formData.organizationId}
                        onChange={(e) => handleInputChange('organizationId', e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 vayu-glow"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Authenticating..."
                    ) : (
                      <>
                        Access {activeTab.toUpperCase()} Portal
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    Protected by blockchain authentication • 
                    <span className="text-primary ml-1">VAYU DAO Security</span>
                  </p>
                </div>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginSystem;