import { useState } from "react";
import Navigation from "@/components/Navigation";
import WalletConnect from "@/components/WalletConnect";
import MRVEngineVerification from "@/components/MRVEngineVerification";
import FileUploadWithCamera from "@/components/FileUploadWithCamera";
import PaymentGatewayBBPS from "@/components/PaymentGatewayBBPS";
import ResearchLink from "@/components/ResearchLink";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Upload, 
  FileText, 
  Coins,
  MapPin,
  Camera,
  Leaf,
  Award,
  BarChart3,
  Plus,
  CheckCircle2,
  Clock,
  TreePine,
  TrendingUp,
  IndianRupee,
  Bell,
  Eye,
  Sparkles
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const EnhancedNGODashboard = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="ngo" />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Project Developer Portal
              </span>
            </h1>
          </div>
          <p className="text-muted-foreground">
            Register projects, upload MRV data, track verification, and convert carbon credits to real money
          </p>
        </div>

        {/* Research Link */}
        <div className="mb-8">
          <ResearchLink />
        </div>

        {/* Wallet Connection */}
        <div className="mb-8">
          <WalletConnect />
        </div>

        {/* Real-time Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Market Price</p>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="w-5 h-5 text-primary" />
                    <p className="text-2xl font-bold text-primary carbon-counter">16.50</p>
                  </div>
                  <p className="text-xs text-success mt-1">+2.3% today</p>
                </div>
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">My Credits</p>
                  <p className="text-2xl font-bold carbon-counter">6,200</p>
                  <p className="text-xs text-muted-foreground mt-1">Generating</p>
                </div>
                <Coins className="w-6 h-6 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="w-5 h-5 text-success" />
                    <p className="text-2xl font-bold text-success carbon-counter">94,300</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Lifetime earnings</p>
                </div>
                <Award className="w-6 h-6 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Verification</p>
                  <p className="text-2xl font-bold text-warning carbon-counter">2</p>
                  <p className="text-xs text-muted-foreground mt-1">Projects</p>
                </div>
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-muted/50">
            <TabsTrigger value="register">Register Project</TabsTrigger>
            <TabsTrigger value="mrv">Upload MRV Data</TabsTrigger>
            <TabsTrigger value="projects">My Projects</TabsTrigger>
            <TabsTrigger value="track">Track Verification</TabsTrigger>
            <TabsTrigger value="payment">Payment Gateway</TabsTrigger>
            <TabsTrigger value="history">Transaction History</TabsTrigger>
          </TabsList>

          {/* Register Project Tab */}
          <TabsContent value="register">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Register New Carbon Project
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      {/* Project Basic Info */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-primary">Project Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="projectName">Project Name *</Label>
                            <Input
                              id="projectName"
                              placeholder="Enter project name"
                              className="bg-background/50 border-border/50"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="projectType">Project Type *</Label>
                            <select
                              id="projectType"
                              className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md"
                              required
                            >
                              <option>Mangrove Restoration</option>
                              <option>Seagrass Conservation</option>
                              <option>Coastal Forest</option>
                              <option>Tidal Wetland Restoration</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="location">Location *</Label>
                            <Input
                              id="location"
                              placeholder="City, State"
                              className="bg-background/50 border-border/50"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="area">Project Area (hectares) *</Label>
                            <Input
                              id="area"
                              type="number"
                              placeholder="0"
                              className="bg-background/50 border-border/50"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="startDate">Project Start Date *</Label>
                            <Input
                              id="startDate"
                              type="date"
                              className="bg-background/50 border-border/50"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="species">Primary Species *</Label>
                          <Input
                            id="species"
                            placeholder="e.g., Rhizophora mucronata, Avicennia marina"
                            className="bg-background/50 border-border/50"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="methodology">Methodology *</Label>
                          <select
                            id="methodology"
                            className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md"
                            required
                          >
                            <option>VM0033 - Tidal Wetland and Seagrass Restoration</option>
                            <option>AR-ACM0003 - Afforestation and Reforestation</option>
                            <option>VM0007 - REDD+ Methodology Framework</option>
                            <option>VM0015 - Methodology for Avoided Unplanned Deforestation</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">Project Description *</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your project objectives, methodology, expected outcomes, and community impact..."
                            className="bg-background/50 border-border/50 min-h-[120px]"
                            required
                          />
                        </div>
                      </div>

                      {/* Land Ownership & Legal */}
                      <div className="space-y-4 pt-6 border-t border-border/20">
                        <h3 className="font-semibold text-primary">Land Ownership & Legal Documents</h3>
                        <FileUploadWithCamera
                          type="document"
                          label="Land Ownership Documents"
                          multiple
                        />
                      </div>

                      {/* Project Site Documentation */}
                      <div className="space-y-4 pt-6 border-t border-border/20">
                        <h3 className="font-semibold text-primary">Site Documentation</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <FileUploadWithCamera
                            type="photo"
                            label="Site Photos (Before/After)"
                            multiple
                          />
                          <FileUploadWithCamera
                            type="gps"
                            label="GPS Coordinates & Maps"
                            multiple
                          />
                        </div>
                      </div>

                      {/* Carbon Calculation Details */}
                      <div className="space-y-4 pt-6 border-t border-border/20">
                        <h3 className="font-semibold text-primary">Carbon Calculations</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="biomass">Aboveground Biomass (tons/ha)</Label>
                            <Input
                              id="biomass"
                              type="number"
                              step="0.01"
                              placeholder="0.00"
                              className="bg-background/50 border-border/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sequestration">Annual Sequestration Rate (tCO₂e/ha/yr)</Label>
                            <Input
                              id="sequestration"
                              type="number"
                              step="0.01"
                              placeholder="0.00"
                              className="bg-background/50 border-border/50"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Community Impact */}
                      <div className="space-y-4 pt-6 border-t border-border/20">
                        <h3 className="font-semibold text-primary">Community Impact</h3>
                        <div className="space-y-2">
                          <Label htmlFor="community">Community Details *</Label>
                          <Textarea
                            id="community"
                            placeholder="Number of villages/communities, estimated beneficiaries, employment generation, social co-benefits..."
                            className="bg-background/50 border-border/50"
                            required
                          />
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-primary hover:opacity-90" type="submit">
                        <Upload className="w-4 h-4 mr-2" />
                        Submit Project for Verification
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* VAYU MRV Engine Panel */}
              <div>
                <MRVEngineVerification />
              </div>
            </div>
          </TabsContent>

          {/* Upload MRV Data Tab */}
          <TabsContent value="mrv">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Upload MRV Reports & Scientific Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">MRV Data Requirements</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Monitoring reports (quarterly/annual)</li>
                      <li>• Biomass measurements and calculations</li>
                      <li>• Carbon stock assessments</li>
                      <li>• Satellite imagery analysis</li>
                      <li>• Field measurement data</li>
                      <li>• Scientific reports and peer reviews</li>
                    </ul>
                  </div>

                  <FileUploadWithCamera
                    type="mrv"
                    label="MRV Reports & Scientific Data"
                    multiple
                  />

                  <FileUploadWithCamera
                    type="photo"
                    label="Field Monitoring Photos"
                    multiple
                  />

                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload MRV Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Track Verification Tab */}
          <TabsContent value="track">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Verification Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-lg mb-4">Multi-Layer Verification Process</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'VAYU DAO MRV Engine (AI)', status: 'completed', confidence: '97.8%' },
                        { name: 'Human Verifier Review', status: 'in-progress', confidence: '-' },
                        { name: 'ACVAS (Accredited Verification)', status: 'pending', confidence: '-' },
                        { name: 'CCTS Compliance Check', status: 'pending', confidence: '-' },
                        { name: 'BEE Database Verification', status: 'pending', confidence: '-' },
                        { name: 'NSCICM Review', status: 'pending', confidence: '-' },
                        { name: 'Carbon Check Indian (CCIPL)', status: 'pending', confidence: '-' },
                        { name: 'MOES Final Check', status: 'pending', confidence: '-' },
                        { name: 'VAYU DAO Engine Re-verification', status: 'pending', confidence: '-' },
                      ].map((step, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div className="flex items-center gap-3">
                            {step.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-success" />}
                            {step.status === 'in-progress' && <Clock className="w-5 h-5 text-warning animate-pulse" />}
                            {step.status === 'pending' && <Clock className="w-5 h-5 text-muted-foreground" />}
                            <span className="font-medium">{step.name}</span>
                          </div>
                          <Badge variant={
                            step.status === 'completed' ? 'default' : 
                            step.status === 'in-progress' ? 'secondary' : 
                            'outline'
                          }>
                            {step.status === 'completed' ? step.confidence : step.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
                    <Bell className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium text-success">Notifications Enabled</p>
                      <p className="text-sm text-muted-foreground">You'll receive updates at each verification stage</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Gateway Tab */}
          <TabsContent value="payment">
            {!showPayment ? (
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IndianRupee className="w-5 h-5" />
                    Convert Credits to Money
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-4">Available Credits</h4>
                        <div className="text-4xl font-bold text-primary mb-2 carbon-counter">
                          6,200
                        </div>
                        <p className="text-sm text-muted-foreground">Carbon credits ready for conversion</p>
                      </div>

                      <div className="p-6 bg-success/10 rounded-lg border border-success/20">
                        <h4 className="font-semibold text-success mb-4">Current Market Value</h4>
                        <div className="flex items-center gap-1 mb-2">
                          <IndianRupee className="w-6 h-6 text-success" />
                          <div className="text-4xl font-bold text-success carbon-counter">
                            1,02,300
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">@ ₹16.50 per credit</p>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90"
                      onClick={() => setShowPayment(true)}
                    >
                      <IndianRupee className="w-4 h-4 mr-2" />
                      Proceed to Payment Gateway
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <PaymentGatewayBBPS
                amount={102300}
                purpose="Carbon Credit Sale - 6,200 credits @ ₹16.50"
                onPaymentComplete={(txnId) => {
                  toast({
                    title: "Payment Received",
                    description: `₹1,02,300 credited to your account. Transaction ID: ${txnId}`,
                    className: "border-success/20 text-success",
                  });
                  setShowPayment(false);
                }}
              />
            )}
          </TabsContent>

          {/* Transaction History Tab */}
          <TabsContent value="history">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Transaction History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: '2025-01-15', type: 'Credit Sale', credits: 2400, amount: 39600, status: 'completed' },
                    { date: '2025-01-10', type: 'Credit Generation', credits: 1800, amount: 0, status: 'completed' },
                    { date: '2025-01-05', type: 'Credit Sale', credits: 1500, amount: 24750, status: 'completed' },
                    { date: '2024-12-28', type: 'Project Verification', credits: 0, amount: -5000, status: 'completed' },
                    { date: '2024-12-20', type: 'Credit Generation', credits: 2200, amount: 0, status: 'completed' },
                  ].map((txn, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div>
                        <p className="font-medium">{txn.type}</p>
                        <p className="text-sm text-muted-foreground">{txn.date}</p>
                      </div>
                      <div className="text-right">
                        {txn.credits > 0 && (
                          <p className="text-sm text-primary">{txn.credits} credits</p>
                        )}
                        {txn.amount !== 0 && (
                          <div className="flex items-center gap-1 justify-end">
                            <IndianRupee className={`w-4 h-4 ${txn.amount > 0 ? 'text-success' : 'text-destructive'}`} />
                            <p className={`font-bold ${txn.amount > 0 ? 'text-success' : 'text-destructive'}`}>
                              {txn.amount > 0 ? '+' : ''}{txn.amount.toLocaleString()}
                            </p>
                          </div>
                        )}
                        <Badge variant="outline" className="mt-1">{txn.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Projects Tab */}
          <TabsContent value="projects">
            <div className="space-y-6">
              {[
                {
                  id: 'NGO001',
                  name: 'Coastal Village Mangrove Restoration',
                  location: 'Sundarbans, West Bengal',
                  status: 'generating_credits',
                  credits: 6200,
                  estimated: 8500
                },
                {
                  id: 'NGO002',
                  name: 'Community Seagrass Conservation',
                  location: 'Palk Bay, Tamil Nadu',
                  status: 'verified',
                  credits: 0,
                  estimated: 4200
                }
              ].map((project) => (
                <Card key={project.id} className="bg-gradient-card border-border/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.location}</p>
                        <p className="text-xs text-muted-foreground mt-1">ID: {project.id}</p>
                      </div>
                      <Badge className={
                        project.status === 'generating_credits' ? 'bg-success text-success-foreground' : 
                        'bg-primary text-primary-foreground'
                      }>
                        {project.status === 'generating_credits' ? 'Generating Credits' : 'Verified'}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-center">
                        <div className="text-lg font-bold text-primary">{project.estimated.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Estimated Credits</div>
                      </div>
                      <div className="p-3 bg-success/10 rounded-lg text-center">
                        <div className="text-lg font-bold text-success">{project.credits.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Generated Credits</div>
                      </div>
                    </div>

                    {project.status === 'generating_credits' && (
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span className="text-success">{Math.round((project.credits / project.estimated) * 100)}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${(project.credits / project.estimated) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EnhancedNGODashboard;
