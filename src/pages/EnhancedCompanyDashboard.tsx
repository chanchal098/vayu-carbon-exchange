import { useState } from "react";
import Navigation from "@/components/Navigation";
import WalletConnect from "@/components/WalletConnect";
import ResearchLink from "@/components/ResearchLink";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Building, 
  ShoppingCart, 
  TrendingUp, 
  Wallet,
  Leaf,
  Target,
  BarChart3,
  PieChart,
  Coins,
  Award,
  Download,
  CheckCircle2,
  FileText,
  Users,
  MapPin,
  Calendar,
  Filter,
  Search,
  Clock
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const EnhancedCompanyDashboard = () => {
  const [selectedCredit, setSelectedCredit] = useState<any>(null);
  const [purchaseQuantity, setPurchaseQuantity] = useState<number>(100);
  const [kycStatus, setKycStatus] = useState<'pending' | 'verified' | 'incomplete'>('verified');

  const availableCredits = [
    {
      id: 'CC001',
      project: 'Sundarbans Mangrove Restoration',
      developer: 'West Bengal Forest Department',
      type: 'mangrove',
      location: 'West Bengal',
      pricePerCredit: 16.50,
      availableCredits: 5420,
      verificationStandard: 'Verra VCS',
      vintage: '2024',
      methodology: 'VM0033'
    },
    {
      id: 'CC002',
      project: 'Kerala Coastal Seagrass Project',
      developer: 'Marine Conservation NGO Kerala',
      type: 'seagrass',
      location: 'Kerala',
      pricePerCredit: 15.25,
      availableCredits: 3890,
      verificationStandard: 'Gold Standard',
      vintage: '2024',
      methodology: 'VM0033'
    },
    {
      id: 'CC003',
      project: 'Gujarat Mangrove Initiative',
      developer: 'Gujarat Coastal Development Authority',
      type: 'mangrove',
      location: 'Gujarat',
      pricePerCredit: 17.80,
      availableCredits: 7200,
      verificationStandard: 'Verra VCS + CCB',
      vintage: '2024',
      methodology: 'VM0033'
    }
  ];

  const handlePurchase = () => {
    if (!selectedCredit) return;
    toast({
      title: "Purchase Initiated",
      description: `Processing purchase of ${purchaseQuantity} credits...`,
      className: "border-primary/20 text-primary",
    });
    
    setTimeout(() => {
      toast({
        title: "Purchase Successful",
        description: `${purchaseQuantity} carbon credits added to your portfolio`,
        className: "border-success/20 text-success",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="company" />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Building className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Corporate Carbon Portal
              </span>
            </h1>
          </div>
          <p className="text-muted-foreground">
            KYC verification, carbon credit marketplace, portfolio management & ESG reporting
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

        {/* KYC Status Banner */}
        {kycStatus !== 'verified' && (
          <Card className="mb-8 bg-warning/10 border-warning/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-warning" />
                  <div>
                    <h3 className="font-semibold text-warning">KYC Verification Required</h3>
                    <p className="text-sm text-muted-foreground">Complete KYC to unlock full marketplace access</p>
                  </div>
                </div>
                <Button className="bg-warning hover:bg-warning/90">
                  Complete KYC
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Portfolio Value</p>
                  <p className="text-2xl font-bold text-primary carbon-counter">₹4.1L</p>
                  <p className="text-xs text-success mt-1">+₹45K this month</p>
                </div>
                <Wallet className="w-6 h-6 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Credits</p>
                  <p className="text-2xl font-bold carbon-counter">25,400</p>
                  <p className="text-xs text-success mt-1">+2,400 this quarter</p>
                </div>
                <Coins className="w-6 h-6 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Offset Progress</p>
                  <p className="text-2xl font-bold text-accent carbon-counter">37%</p>
                  <p className="text-xs text-muted-foreground mt-1">Target: 50,000 tCO₂e</p>
                </div>
                <Target className="w-6 h-6 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ESG Score</p>
                  <p className="text-2xl font-bold text-warning carbon-counter">A+</p>
                  <p className="text-xs text-success mt-1">Improved from A</p>
                </div>
                <Award className="w-6 h-6 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="marketplace" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-muted/50">
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="esg">ESG Reports</TabsTrigger>
            <TabsTrigger value="retire">Retire Tokens</TabsTrigger>
          </TabsList>

          {/* Marketplace Tab */}
          <TabsContent value="marketplace">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Filters */}
                <Card className="bg-gradient-card border-border/20">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            placeholder="Search projects..."
                            className="pl-10 bg-background/50 border-border/50"
                          />
                        </div>
                      </div>
                      <Button variant="outline">
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Available Credits */}
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Available Carbon Credits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {availableCredits.map((credit) => (
                        <Card 
                          key={credit.id}
                          className={`cursor-pointer hover:shadow-glow-accent transition-all ${
                            selectedCredit?.id === credit.id ? 'border-primary shadow-glow-accent' : 'border-border/20'
                          }`}
                          onClick={() => setSelectedCredit(credit)}
                        >
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h3 className="font-semibold">{credit.project}</h3>
                                  <p className="text-sm text-muted-foreground">{credit.developer}</p>
                                </div>
                                <Badge className="bg-success/20 text-success">
                                  {credit.verificationStandard}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-muted-foreground" />
                                  <span>{credit.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Leaf className="w-4 h-4 text-muted-foreground" />
                                  <span className="capitalize">{credit.type}</span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between pt-3 border-t border-border/20">
                                <div>
                                  <span className="text-lg font-bold text-primary">₹{credit.pricePerCredit}</span>
                                  <span className="text-sm text-muted-foreground ml-1">per credit</span>
                                </div>
                                <span className="text-sm font-medium">
                                  <strong>{credit.availableCredits.toLocaleString()}</strong> available
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Purchase Panel */}
              <div>
                <Card className="bg-gradient-card border-border/20 shadow-card-vayu sticky top-24">
                  <CardHeader>
                    <CardTitle>Purchase Credits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedCredit ? (
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-primary mb-2">
                            {selectedCredit.project}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedCredit.location} • Vintage {selectedCredit.vintage}
                          </p>
                        </div>

                        <div className="p-4 bg-primary/10 rounded-lg">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary carbon-counter">
                              ₹{selectedCredit.pricePerCredit}
                            </div>
                            <div className="text-sm text-primary">per carbon credit</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                              id="quantity"
                              type="number"
                              value={purchaseQuantity}
                              onChange={(e) => setPurchaseQuantity(Number(e.target.value))}
                              max={selectedCredit.availableCredits}
                              min={1}
                              className="bg-background/50 border-border/50"
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                              Max: {selectedCredit.availableCredits.toLocaleString()} credits
                            </p>
                          </div>

                          <div className="p-3 bg-muted/20 rounded-lg space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Total Cost:</span>
                              <span className="text-lg font-bold carbon-counter">
                                ₹{(selectedCredit.pricePerCredit * purchaseQuantity).toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">CO₂ Offset:</span>
                              <span className="text-sm text-success font-medium">
                                {purchaseQuantity.toLocaleString()} tons CO₂e
                              </span>
                            </div>
                          </div>

                          <Button 
                            className="w-full bg-gradient-primary hover:opacity-90 vayu-glow"
                            onClick={handlePurchase}
                            disabled={kycStatus !== 'verified'}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            {kycStatus !== 'verified' ? 'Complete KYC to Purchase' : 'Purchase Credits'}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>Select carbon credits to purchase</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="w-5 h-5" />
                      Carbon Credit Portfolio
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          project: 'Sundarbans Mangrove Restoration',
                          credits: 12000,
                          purchasePrice: 15.20,
                          currentValue: 16.50,
                          purchaseDate: '2024-08-15'
                        },
                        {
                          project: 'Kerala Coastal Seagrass Project',
                          credits: 8500,
                          purchasePrice: 14.80,
                          currentValue: 15.25,
                          purchaseDate: '2024-07-22'
                        },
                        {
                          project: 'Gujarat Mangrove Initiative',
                          credits: 4900,
                          purchasePrice: 16.90,
                          currentValue: 17.80,
                          purchaseDate: '2024-09-10'
                        }
                      ].map((holding, index) => (
                        <Card key={index} className="border-border/20">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h3 className="font-semibold">{holding.project}</h3>
                                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {holding.purchaseDate}
                                  </div>
                                  <div>
                                    <strong>{holding.credits.toLocaleString()}</strong> credits
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-primary carbon-counter">
                                  ₹{(holding.credits * holding.currentValue).toLocaleString()}
                                </div>
                                <div className={`text-sm font-medium ${
                                  holding.currentValue > holding.purchasePrice ? 'text-success' : 'text-destructive'
                                }`}>
                                  {holding.currentValue > holding.purchasePrice ? '+' : ''}
                                  {(((holding.currentValue - holding.purchasePrice) / holding.purchasePrice) * 100).toFixed(1)}%
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Portfolio Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary carbon-counter">₹4.1L</div>
                        <div className="text-sm text-primary">Total Value</div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Credits:</span>
                          <span className="font-bold">25,400</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg. Cost:</span>
                          <span className="font-medium">₹15.65</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Current Price:</span>
                          <span className="font-medium">₹16.24</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-border/20">
                          <span className="text-muted-foreground">Total Gain:</span>
                          <span className="font-bold text-success">+₹15,036</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Offset Target</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>2025 Target</span>
                        <span className="font-bold">37%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full w-[37%] transition-all duration-1000"></div>
                      </div>
                      <div className="text-center pt-2">
                        <div className="text-xl font-bold text-primary">18,750</div>
                        <div className="text-xs text-muted-foreground">of 50,000 tCO₂e target</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Trading Tab */}
          <TabsContent value="trading">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trading Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary carbon-counter">₹16.50</div>
                    <div className="text-sm text-primary mt-1">Current Market Price</div>
                    <div className="text-xs text-success mt-2">+2.3% (24h)</div>
                  </div>

                  <div className="text-center p-6 bg-success/10 rounded-lg">
                    <div className="text-3xl font-bold text-success carbon-counter">₹24.5M</div>
                    <div className="text-sm text-success mt-1">24h Trading Volume</div>
                    <div className="text-xs text-muted-foreground mt-2">152,400 credits traded</div>
                  </div>

                  <div className="text-center p-6 bg-accent/10 rounded-lg">
                    <div className="text-3xl font-bold text-accent carbon-counter">47</div>
                    <div className="text-sm text-accent mt-1">Active Projects</div>
                    <div className="text-xs text-muted-foreground mt-2">Available for trading</div>
                  </div>
                </div>

                <div className="p-6 bg-muted/20 rounded-lg text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="font-semibold mb-2">Live Trading Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time charts, order book, and trading history coming soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ESG Reports Tab */}
          <TabsContent value="esg">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    ESG Reporting Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">A+</div>
                        <div className="text-xs text-muted-foreground mt-1">Overall Score</div>
                      </div>
                      <div className="text-center p-4 bg-success/10 rounded-lg">
                        <div className="text-2xl font-bold text-success">92</div>
                        <div className="text-xs text-muted-foreground mt-1">Environmental</div>
                      </div>
                      <div className="text-center p-4 bg-accent/10 rounded-lg">
                        <div className="text-2xl font-bold text-accent">88</div>
                        <div className="text-xs text-muted-foreground mt-1">Social</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Carbon Footprint</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Total Emissions:</span>
                          <span className="font-medium">50,000 tCO₂e</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Offset:</span>
                          <span className="font-medium text-success">18,750 tCO₂e (37%)</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Net Emissions:</span>
                          <span className="font-medium">31,250 tCO₂e</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      <Download className="w-4 h-4 mr-2" />
                      Generate ESG Report
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle>Compliance & Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'CDP Climate Change', status: 'A-', verified: true },
                      { name: 'GHG Protocol', status: 'Compliant', verified: true },
                      { name: 'SBTi Commitment', status: 'Verified', verified: true },
                      { name: 'ISO 14001', status: 'Certified', verified: true },
                      { name: 'TCFD Alignment', status: 'In Progress', verified: false }
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          {cert.verified ? (
                            <CheckCircle2 className="w-5 h-5 text-success" />
                          ) : (
                            <Clock className="w-5 h-5 text-warning" />
                          )}
                          <span className="font-medium">{cert.name}</span>
                        </div>
                        <Badge variant={cert.verified ? 'default' : 'secondary'}>
                          {cert.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Retire Tokens Tab */}
          <TabsContent value="retire">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Retire Carbon Credits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-primary mb-3">What is Credit Retirement?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Retiring carbon credits permanently removes them from circulation, ensuring they cannot be resold. 
                      This action is required to claim the environmental benefit and use credits for compliance or ESG reporting.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-background/50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-success mb-2" />
                        <h4 className="font-medium text-sm mb-1">Permanent Offset</h4>
                        <p className="text-xs text-muted-foreground">Credits are permanently removed</p>
                      </div>
                      <div className="p-3 bg-background/50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-success mb-2" />
                        <h4 className="font-medium text-sm mb-1">Certificate Issued</h4>
                        <p className="text-xs text-muted-foreground">Proof of retirement for reporting</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="retireQuantity">Number of Credits to Retire</Label>
                      <Input
                        id="retireQuantity"
                        type="number"
                        placeholder="Enter quantity"
                        className="bg-background/50 border-border/50"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        You have 25,400 credits available for retirement
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="retireReason">Retirement Reason (Optional)</Label>
                      <Input
                        id="retireReason"
                        placeholder="e.g., 2024 Carbon Neutrality Target"
                        className="bg-background/50 border-border/50"
                      />
                    </div>

                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      <Award className="w-4 h-4 mr-2" />
                      Retire Credits
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-border/20">
                    <h4 className="font-semibold mb-4">Retirement History</h4>
                    <div className="space-y-3">
                      {[
                        { date: '2024-12-15', credits: 5000, reason: 'Q4 2024 ESG Target' },
                        { date: '2024-09-30', credits: 3500, reason: 'Q3 2024 Compliance' },
                        { date: '2024-06-30', credits: 4200, reason: 'H1 2024 Net Zero Goal' }
                      ].map((retirement, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div>
                            <p className="font-medium">{retirement.credits.toLocaleString()} credits retired</p>
                            <p className="text-xs text-muted-foreground">{retirement.reason}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">{retirement.date}</p>
                            <Button variant="ghost" size="sm">
                              <Download className="w-3 h-3 mr-1" />
                              Certificate
                            </Button>
                          </div>
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

export default EnhancedCompanyDashboard;
