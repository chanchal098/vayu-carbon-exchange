import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, 
  Building, 
  Users, 
  Shield, 
  Mail, 
  Lock, 
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import HelpDesk from "@/components/HelpDesk";
import CarbonChatbot from "@/components/CarbonChatbot";

interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  organizationName?: string;
  organizationId?: string;
  location?: string;
  agreeToTerms: boolean;
}

const Register = () => {
  const [activeTab, setActiveTab] = useState<'admin' | 'buyer' | 'developer' | 'verifier'>('admin');
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    organizationName: '',
    organizationId: '',
    location: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: keyof RegisterFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Registration Successful",
        description: `Welcome to VAYU DAO! Your ${activeTab.toUpperCase()} account has been created.`,
        className: "border-success/20 text-success",
      });

      // Navigate to login
      navigate('/login');
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
          title: "Administrator Registration",
          description: "NCCR administrative access for platform oversight, project verification, and token minting approval."
        };
      case 'buyer':
        return {
          title: "Corporate Registration",
          description: "Company access for carbon credit purchasing, portfolio management, and ESG compliance tracking."
        };
      case 'developer':
        return {
          title: "Project Developer Registration",
          description: "For individuals, communities, NGOs, and coastal panchayats to submit and manage carbon projects."
        };
      case 'verifier':
        return {
          title: "Verifier Registration",
          description: "Independent verification access for project examination and verification report submission."
        };
      default:
        return { title: "", description: "" };
    }
  };

  const currentTabInfo = getTabDescription(activeTab);

  return (
    <>
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 carbon-particle"></div>
        
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
          {/* Left Side - Info Panel */}
          <div className="hidden lg:block space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl xl:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Join VAYU DAO
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create your account and become part of India's first blockchain-based 
                blue carbon MRV platform.
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
                  <h4 className="font-semibold text-sm text-primary">Registration Benefits:</h4>
                  {[
                    "Access to blockchain-verified carbon credits",
                    "Real-time project tracking and monitoring",
                    "Transparent transaction history",
                    "Comprehensive dashboard and analytics",
                    "Community support and resources"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-muted-foreground mb-2">Already have an account?</p>
              <Link to="/login">
                <Button variant="outline" className="border-primary/30">
                  Sign In
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <Card className="bg-card/95 backdrop-blur-md border-border/20 shadow-card-vayu animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Create Account</CardTitle>
              <p className="text-muted-foreground">
                Choose your account type and register
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

                <div className="mt-6">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                            required
                          />
                        </div>
                      </div>
                    </div>

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

                    {activeTab !== 'admin' && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="orgName" className="text-sm font-medium">
                            Organization Name
                          </Label>
                          <Input
                            id="orgName"
                            type="text"
                            placeholder="Enter organization name"
                            value={formData.organizationName}
                            onChange={(e) => handleInputChange('organizationName', e.target.value)}
                            className="bg-background/50 border-border/50 focus:border-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="location" className="text-sm font-medium">
                            Location
                          </Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="location"
                              type="text"
                              placeholder="City, State"
                              value={formData.location}
                              onChange={(e) => handleInputChange('location', e.target.value)}
                              className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="password"
                            type="password"
                            placeholder="Create password"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm font-medium">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary hover:opacity-90 vayu-glow"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Creating Account..."
                      ) : (
                        <>
                          Create {activeTab.toUpperCase()} Account
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
      
      <HelpDesk />
      <CarbonChatbot />
    </>
  );
};

export default Register;
