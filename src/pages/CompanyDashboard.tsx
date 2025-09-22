import { useState } from "react";
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
  ArrowUpDown,
  Coins,
  Award,
  Calendar
} from "lucide-react";
import Navigation from "@/components/Navigation";

interface CarbonCredit {
  id: string;
  project: string;
  type: 'mangrove' | 'seagrass' | 'forest';
  location: string;
  pricePerCredit: number;
  availableCredits: number;
  verificationStatus: 'verified' | 'gold_standard';
  vintage: string;
  co2PerCredit: number;
}

interface Portfolio {
  totalCredits: number;
  totalValue: number;
  offsetThisYear: number;
  targetOffset: number;
  credits: {
    project: string;
    credits: number;
    purchasePrice: number;
    currentValue: number;
    purchaseDate: string;
  }[];
}

const availableCredits: CarbonCredit[] = [
  {
    id: 'CC001',
    project: 'Sundarbans Mangrove Restoration',
    type: 'mangrove',
    location: 'West Bengal',
    pricePerCredit: 16.50,
    availableCredits: 5420,
    verificationStatus: 'verified',
    vintage: '2024',
    co2PerCredit: 1
  },
  {
    id: 'CC002',
    project: 'Kerala Coastal Seagrass Project',
    type: 'seagrass',
    location: 'Kerala',
    pricePerCredit: 15.25,
    availableCredits: 3890,
    verificationStatus: 'gold_standard',
    vintage: '2024',
    co2PerCredit: 1
  },
  {
    id: 'CC003',
    project: 'Gujarat Mangrove Initiative',
    type: 'mangrove',
    location: 'Gujarat',
    pricePerCredit: 17.80,
    availableCredits: 7200,
    verificationStatus: 'verified',
    vintage: '2024',
    co2PerCredit: 1
  },
  {
    id: 'CC004',
    project: 'Tamil Nadu Blue Carbon Hub',
    type: 'seagrass',
    location: 'Tamil Nadu',
    pricePerCredit: 14.90,
    availableCredits: 2650,
    verificationStatus: 'gold_standard',
    vintage: '2024',
    co2PerCredit: 1
  }
];

const mockPortfolio: Portfolio = {
  totalCredits: 25400,
  totalValue: 412860,
  offsetThisYear: 18750,
  targetOffset: 50000,
  credits: [
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
  ]
};

const CompanyDashboard = () => {
  const [selectedCredit, setSelectedCredit] = useState<CarbonCredit | null>(null);
  const [purchaseQuantity, setPurchaseQuantity] = useState<number>(100);

  const getProjectTypeIcon = (type: string) => {
    switch (type) {
      case 'mangrove': return <Leaf className="w-4 h-4" />;
      case 'seagrass': return <Target className="w-4 h-4" />;
      case 'forest': return <Leaf className="w-4 h-4" />;
      default: return <Coins className="w-4 h-4" />;
    }
  };

  const getVerificationBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-success text-success-foreground">NCCR Verified</Badge>;
      case 'gold_standard':
        return <Badge className="bg-warning text-warning-foreground">Gold Standard</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handlePurchase = (creditId: string, quantity: number) => {
    // In real app, this would process the purchase
    console.log(`Purchasing ${quantity} credits from ${creditId}`);
  };

  const companyStats = [
    {
      title: "Portfolio Value",
      value: `₹${(mockPortfolio.totalValue / 100000).toFixed(1)}L`,
      icon: <Wallet className="w-6 h-6" />,
      color: "text-primary",
      change: "+₹45K this month"
    },
    {
      title: "Total Credits Owned",
      value: mockPortfolio.totalCredits.toLocaleString(),
      icon: <Coins className="w-6 h-6" />,
      color: "text-success",
      change: "+2,400 this quarter"
    },
    {
      title: "Offset Progress",
      value: `${((mockPortfolio.offsetThisYear / mockPortfolio.targetOffset) * 100).toFixed(0)}%`,
      icon: <Target className="w-6 h-6" />,
      color: "text-accent",
      change: "Target: 50,000 tCO₂e"
    },
    {
      title: "ESG Score",
      value: "A+",
      icon: <Award className="w-6 h-6" />,
      color: "text-warning",
      change: "Improved from A"
    }
  ];

  const progressPercentage = (mockPortfolio.offsetThisYear / mockPortfolio.targetOffset) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="company" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Building className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Corporate Carbon Portal</h1>
          </div>
          <p className="text-muted-foreground">
            Manage your carbon credit portfolio, track ESG compliance, and offset emissions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {companyStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold carbon-counter">{stat.value}</p>
                    <p className={`text-sm ${stat.color} mt-1`}>{stat.change}</p>
                  </div>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="marketplace" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="reporting">ESG Reporting</TabsTrigger>
          </TabsList>

          {/* Marketplace Tab */}
          <TabsContent value="marketplace">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Available Credits */}
              <div className="lg:col-span-2 space-y-4">
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
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  {getProjectTypeIcon(credit.type)}
                                  <h3 className="font-semibold">{credit.project}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">
                                  Location: {credit.location}
                                </p>
                                <div className="flex items-center gap-4 mt-3">
                                  <span className="text-lg font-bold text-primary carbon-counter">
                                    ₹{credit.pricePerCredit}
                                  </span>
                                  <span className="text-sm text-muted-foreground">
                                    per credit
                                  </span>
                                  <span className="text-sm">
                                    <strong>{credit.availableCredits.toLocaleString()}</strong> available
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                {getVerificationBadge(credit.verificationStatus)}
                                <Badge variant="outline">Vintage {credit.vintage}</Badge>
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
                <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
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

                        {/* Price Info */}
                        <div className="p-4 bg-primary/10 rounded-lg">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary carbon-counter">
                              ₹{selectedCredit.pricePerCredit}
                            </div>
                            <div className="text-sm text-primary">
                              per carbon credit
                            </div>
                          </div>
                        </div>

                        {/* Purchase Form */}
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

                          {/* Total Cost */}
                          <div className="p-3 bg-muted/20 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Total Cost:</span>
                              <span className="text-lg font-bold carbon-counter">
                                ₹{(selectedCredit.pricePerCredit * purchaseQuantity).toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-sm text-muted-foreground">CO₂ Offset:</span>
                              <span className="text-sm text-success">
                                {purchaseQuantity.toLocaleString()} tons CO₂e
                              </span>
                            </div>
                          </div>

                          <Button 
                            className="w-full bg-gradient-primary hover:opacity-90 vayu-glow"
                            onClick={() => handlePurchase(selectedCredit.id, purchaseQuantity)}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Purchase Credits
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
                      {mockPortfolio.credits.map((holding, index) => (
                        <Card key={index} className="border-border/20">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold">{holding.project}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Purchased: {holding.purchaseDate}
                                </p>
                                <div className="flex items-center gap-4 mt-2">
                                  <span className="text-sm">
                                    <strong>{holding.credits.toLocaleString()}</strong> credits
                                  </span>
                                  <span className="text-sm text-muted-foreground">
                                    Avg. Cost: ₹{holding.purchasePrice}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-primary carbon-counter">
                                  ₹{(holding.credits * holding.currentValue).toLocaleString()}
                                </div>
                                <div className={`text-sm ${
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
                {/* Portfolio Summary */}
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Portfolio Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary carbon-counter">
                          ₹{(mockPortfolio.totalValue / 100000).toFixed(1)}L
                        </div>
                        <div className="text-sm text-primary">Total Value</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-success/10 rounded-lg">
                          <div className="text-lg font-bold text-success carbon-counter">
                            {mockPortfolio.totalCredits.toLocaleString()}
                          </div>
                          <div className="text-xs text-success">Total Credits</div>
                        </div>
                        <div className="text-center p-3 bg-accent/10 rounded-lg">
                          <div className="text-lg font-bold text-accent carbon-counter">
                            3
                          </div>
                          <div className="text-xs text-accent">Projects</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Offset Progress */}
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>2024 Offset Target</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary carbon-counter">
                          {progressPercentage.toFixed(0)}%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {mockPortfolio.offsetThisYear.toLocaleString()} / {mockPortfolio.targetOffset.toLocaleString()} tons CO₂e
                        </div>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-3">
                        <div 
                          className="bg-primary h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                        ></div>
                      </div>
                      
                      <div className="text-center text-sm text-muted-foreground">
                        {(mockPortfolio.targetOffset - mockPortfolio.offsetThisYear).toLocaleString()} tons CO₂e remaining
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
                  <ArrowUpDown className="w-5 h-5" />
                  Carbon Credit Trading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">Advanced Trading Features</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Secondary market trading, automated offsetting, and portfolio rebalancing features 
                    coming soon to the VAYU DAO platform.
                  </p>
                  <Button className="mt-6 bg-gradient-primary vayu-glow" disabled>
                    <Calendar className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ESG Reporting Tab */}
          <TabsContent value="reporting">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle>ESG Compliance Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-warning/10 rounded-lg">
                      <div className="text-4xl font-bold text-warning mb-2">A+</div>
                      <div className="text-warning font-medium">ESG Rating</div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Improved from A rating
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                        <span>Environmental Score</span>
                        <Badge className="bg-success text-success-foreground">Excellent</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                        <span>Social Score</span>
                        <Badge className="bg-primary text-primary-foreground">Good</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                        <span>Governance Score</span>
                        <Badge className="bg-success text-success-foreground">Excellent</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle>Carbon Impact Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Leaf className="w-5 h-5 text-success" />
                        <span className="font-medium">Carbon Neutral Status</span>
                      </div>
                      <div className="text-2xl font-bold text-success carbon-counter">
                        {mockPortfolio.offsetThisYear.toLocaleString()}
                      </div>
                      <div className="text-sm text-success">tons CO₂e offset in 2024</div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Project Breakdown:</h4>
                      {mockPortfolio.credits.map((credit, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{credit.project}:</span>
                          <span>{credit.credits.toLocaleString()} credits</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-primary vayu-glow">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Download Full Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyDashboard;