import { useState } from "react";
import Navigation from "@/components/Navigation";
import WalletConnect from "@/components/WalletConnect";
import ResearchLink from "@/components/ResearchLink";
import RegionalDistributionChart from "@/components/RegionalDistributionChart";
import RealTimeData from "@/components/RealTimeData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Shield, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Users,
  Building2,
  Leaf,
  TrendingUp,
  FileCheck,
  Activity,
  Settings,
  Coins,
  Ban,
  FileText,
  Award,
  Database,
  Globe
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const EnhancedAdminDashboard = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const pendingProjects = [
    {
      id: 'PRJ001',
      name: 'Sundarbans Mangrove Expansion Phase 2',
      submitter: 'West Bengal Forest Department',
      location: 'Sundarbans, West Bengal',
      status: 'verified',
      estimatedCredits: 12500,
      verificationScore: 97.8
    },
    {
      id: 'PRJ002',
      name: 'Kerala Coastal Seagrass Restoration',
      submitter: 'Marine Conservation NGO Kerala',
      location: 'Kochi, Kerala',
      status: 'pending_admin',
      estimatedCredits: 8900,
      verificationScore: 95.2
    }
  ];

  const handleProjectAction = (action: string, projectId: string) => {
    toast({
      title: `Project ${action}`,
      description: `Action recorded for project ${projectId}`,
      className: "border-primary/20 text-primary",
    });
  };

  const handleMintTokens = (projectId: string, credits: number) => {
    toast({
      title: "Minting Carbon Tokens",
      description: `Creating ${credits.toLocaleString()} digital tokens...`,
      className: "border-primary/20 text-primary",
    });
    
    setTimeout(() => {
      toast({
        title: "Tokens Minted Successfully",
        description: `${credits.toLocaleString()} BCC tokens created and listed on marketplace`,
        className: "border-success/20 text-success",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="admin" />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                NCCR Admin Dashboard
              </span>
            </h1>
          </div>
          <p className="text-muted-foreground">
            Project validation, token minting, market oversight & compliance reporting
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

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Reviews</p>
                  <p className="text-2xl font-bold text-warning carbon-counter">12</p>
                  <p className="text-xs text-muted-foreground mt-1">+3 today</p>
                </div>
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Verified Projects</p>
                  <p className="text-2xl font-bold text-success carbon-counter">47</p>
                  <p className="text-xs text-success mt-1">+5 this week</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-primary carbon-counter">1,284</p>
                  <p className="text-xs text-success mt-1">+12% this month</p>
                </div>
                <Users className="w-6 h-6 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Credits Issued</p>
                  <p className="text-2xl font-bold text-accent carbon-counter">152,400</p>
                  <p className="text-xs text-success mt-1">+8,900 today</p>
                </div>
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-muted/50">
            <TabsTrigger value="projects">Project Review</TabsTrigger>
            <TabsTrigger value="minting">Token Minting</TabsTrigger>
            <TabsTrigger value="market">Market Oversight</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Project Review Tab */}
          <TabsContent value="projects">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="w-5 h-5" />
                      Projects Awaiting Admin Approval
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingProjects.map((project) => (
                        <Card 
                          key={project.id}
                          className={`cursor-pointer hover:shadow-glow-accent transition-all ${
                            selectedProject?.id === project.id ? 'border-primary shadow-glow-accent' : 'border-border/20'
                          }`}
                          onClick={() => setSelectedProject(project)}
                        >
                          <CardContent className="p-4">
                            <div className="space-y-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h3 className="font-semibold">{project.name}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {project.submitter}
                                  </p>
                                </div>
                                <Badge className={
                                  project.status === 'verified' ? 'bg-success/20 text-success' : 
                                  'bg-warning/20 text-warning'
                                }>
                                  {project.status === 'verified' ? 'Verified' : 'Pending Admin'}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-primary/10 rounded-lg text-center">
                                  <div className="text-lg font-bold text-primary">
                                    {project.estimatedCredits.toLocaleString()}
                                  </div>
                                  <div className="text-xs text-muted-foreground">Credits</div>
                                </div>
                                <div className="p-3 bg-success/10 rounded-lg text-center">
                                  <div className="text-lg font-bold text-success">
                                    {project.verificationScore}%
                                  </div>
                                  <div className="text-xs text-muted-foreground">Verification</div>
                                </div>
                              </div>

                              {project.status === 'verified' && (
                                <div className="flex gap-2">
                                  <Button 
                                    className="flex-1 bg-success hover:bg-success/90"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleProjectAction('approved', project.id);
                                    }}
                                  >
                                    <CheckCircle2 className="w-4 h-4 mr-2" />
                                    Approve
                                  </Button>
                                  <Button 
                                    variant="destructive"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleProjectAction('rejected', project.id);
                                    }}
                                  >
                                    <Ban className="w-4 h-4 mr-2" />
                                    Reject
                                  </Button>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                {selectedProject ? (
                  <Card className="bg-gradient-card border-border/20 shadow-card-vayu sticky top-24">
                    <CardHeader>
                      <CardTitle>Validation Checklist</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: 'NCCR Database Cross-Check', status: 'completed' },
                          { name: 'Verra VCS Validation', status: 'completed' },
                          { name: 'UNFCCC Compliance', status: 'completed' },
                          { name: 'Gold Standard Check', status: 'completed' },
                          { name: 'NSCC Certification', status: 'completed' }
                        ].map((check, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                            <span className="text-sm font-medium">{check.name}</span>
                            <CheckCircle2 className="w-5 h-5 text-success" />
                          </div>
                        ))}

                        <div className="pt-4 border-t border-border/20">
                          <label className="text-sm font-medium mb-2 block">Admin Notes</label>
                          <Textarea
                            placeholder="Add compliance notes or observations..."
                            className="bg-background/50 border-border/50"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-gradient-card border-border/20">
                    <CardContent className="p-12 text-center text-muted-foreground">
                      <FileCheck className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Select a project to review</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Token Minting Tab */}
          <TabsContent value="minting">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    Digital Token Creation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                      <h3 className="font-semibold text-primary mb-3">Token Minting Process</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Smart contracts automatically mint ERC-20 tokens (1 BCC = 1 ton CO₂e) for approved projects. 
                        Tokens are listed on the marketplace for corporate buyers.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          <span>Blockchain-verified carbon credits</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          <span>Immutable transaction records</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          <span>Automatic marketplace listing</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          project: 'Sundarbans Mangrove Expansion Phase 2',
                          credits: 12500,
                          status: 'ready'
                        },
                        {
                          project: 'Gujarat Mangrove Initiative',
                          credits: 15600,
                          status: 'minted'
                        }
                      ].map((item, index) => (
                        <div key={index} className="p-4 bg-muted/20 rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.project}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {item.credits.toLocaleString()} carbon credits
                              </p>
                            </div>
                            <Badge variant={item.status === 'minted' ? 'default' : 'secondary'}>
                              {item.status}
                            </Badge>
                          </div>
                          {item.status === 'ready' && (
                            <Button 
                              className="w-full bg-gradient-primary hover:opacity-90"
                              onClick={() => handleMintTokens(item.project, item.credits)}
                            >
                              <Coins className="w-4 h-4 mr-2" />
                              Mint {item.credits.toLocaleString()} BCC Tokens
                            </Button>
                          )}
                          {item.status === 'minted' && (
                            <div className="flex items-center gap-2 text-sm text-success">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Tokens minted and listed on marketplace</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Token Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-3xl font-bold text-primary carbon-counter">152,400</div>
                        <div className="text-sm text-muted-foreground mt-1">Total Tokens Minted</div>
                      </div>
                      <div className="text-center p-4 bg-success/10 rounded-lg">
                        <div className="text-3xl font-bold text-success carbon-counter">47</div>
                        <div className="text-sm text-muted-foreground mt-1">Projects Tokenized</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Recent Minting Activity</h4>
                      {[
                        { date: '2025-01-15', project: 'Tamil Nadu Blue Carbon', credits: 10200 },
                        { date: '2025-01-10', project: 'Odisha Mangrove Reforestation', credits: 18500 },
                        { date: '2025-01-05', project: 'Kerala Seagrass Conservation', credits: 8900 }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{activity.project}</p>
                            <p className="text-xs text-muted-foreground">{activity.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">{activity.credits.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">BCC tokens</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Market Oversight Tab */}
          <TabsContent value="market">
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Market Overview & Transaction Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RealTimeData />
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Transaction Oversight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { buyer: 'TechCorp India Ltd', credits: 5000, amount: 82500, date: '2025-01-15' },
                        { buyer: 'Green Energy Solutions', credits: 3200, amount: 52800, date: '2025-01-15' },
                        { buyer: 'Manufacturing Co', credits: 4500, amount: 74250, date: '2025-01-14' }
                      ].map((txn, index) => (
                        <div key={index} className="p-3 bg-muted/20 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{txn.buyer}</p>
                              <p className="text-xs text-muted-foreground">{txn.date}</p>
                            </div>
                            <Badge>Completed</Badge>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{txn.credits.toLocaleString()} credits</span>
                            <span className="font-bold text-primary">₹{txn.amount.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Platform Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { metric: 'Blockchain Network', status: 'Operational', color: 'text-success' },
                        { metric: 'Smart Contracts', status: 'Operational', color: 'text-success' },
                        { metric: 'Token Minting', status: 'Operational', color: 'text-success' },
                        { metric: 'Marketplace', status: 'Operational', color: 'text-success' },
                        { metric: 'Payment Gateway', status: 'Operational', color: 'text-success' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <span className="font-medium">{item.metric}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                            <span className={`text-sm font-medium ${item.color}`}>{item.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid lg:grid-cols-2 gap-6">
              <RegionalDistributionChart />

              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle>Platform Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary carbon-counter">47</div>
                        <div className="text-sm text-muted-foreground mt-1">Total Projects</div>
                      </div>
                      <div className="text-center p-4 bg-success/10 rounded-lg">
                        <div className="text-2xl font-bold text-success carbon-counter">152,400</div>
                        <div className="text-sm text-muted-foreground mt-1">Credits Issued</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">User Activity</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-primary" />
                            <span>Companies</span>
                          </div>
                          <Badge>284 Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-success" />
                            <span>Project Developers</span>
                          </div>
                          <Badge>128 Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-accent" />
                            <span>Verifiers</span>
                          </div>
                          <Badge>42 Active</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Compliance Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { name: 'Monthly Activity Report', date: 'January 2025' },
                      { name: 'Quarterly Compliance Report', date: 'Q4 2024' },
                      { name: 'Annual Carbon Credits Report', date: '2024' }
                    ].map((report, index) => (
                      <div key={index} className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h4 className="font-medium mb-1">{report.name}</h4>
                            <p className="text-xs text-muted-foreground">{report.date}</p>
                            <Button variant="ghost" size="sm" className="mt-2 h-8 px-2">
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Platform Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Verification Settings</h3>
                    <div className="space-y-3">
                      {[
                        { setting: 'Auto-approve verified submitters', status: 'Disabled' },
                        { setting: 'Minimum MRV data requirements', status: 'Strict' },
                        { setting: 'AI verification threshold', status: '95%' },
                        { setting: 'Site visit requirement', status: 'Case-by-case' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <span>{item.setting}</span>
                          <Badge variant="outline">{item.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/20">
                    <h3 className="font-semibold mb-4">System Configuration</h3>
                    <div className="space-y-3">
                      {[
                        { setting: 'Blockchain network', status: 'Ethereum Mainnet' },
                        { setting: 'Token standard', status: 'ERC-20' },
                        { setting: 'Smart contract version', status: 'v2.1.4' },
                        { setting: 'Payment gateway', status: 'BBPS' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <span>{item.setting}</span>
                          <Badge>{item.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EnhancedAdminDashboard;
