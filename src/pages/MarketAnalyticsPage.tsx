import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Globe,
  ArrowLeft,
  Calendar,
  Target,
  Users,
  Building2,
  Coins,
  Activity
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface StateData {
  state: string;
  activeProjects: number;
  totalCredits: number;
  avgPrice: number;
  growth: number;
  sequesteredCO2: number;
}

interface MarketTrend {
  month: string;
  price: number;
  volume: number;
  projects: number;
}

const stateData: StateData[] = [
  {
    state: 'West Bengal',
    activeProjects: 12,
    totalCredits: 45620,
    avgPrice: 16.80,
    growth: 23.4,
    sequesteredCO2: 45620
  },
  {
    state: 'Kerala',
    activeProjects: 8,
    totalCredits: 32400,
    avgPrice: 15.25,
    growth: 18.7,
    sequesteredCO2: 32400
  },
  {
    state: 'Gujarat',
    activeProjects: 15,
    totalCredits: 52800,
    avgPrice: 17.90,
    growth: 31.2,
    sequesteredCO2: 52800
  },
  {
    state: 'Tamil Nadu',
    activeProjects: 10,
    totalCredits: 38900,
    avgPrice: 14.90,
    growth: 15.8,
    sequesteredCO2: 38900
  },
  {
    state: 'Odisha',
    activeProjects: 7,
    totalCredits: 28300,
    avgPrice: 16.40,
    growth: 12.3,
    sequesteredCO2: 28300
  },
  {
    state: 'Karnataka',
    activeProjects: 6,
    totalCredits: 22150,
    avgPrice: 15.75,
    growth: 9.4,
    sequesteredCO2: 22150
  },
  {
    state: 'Andhra Pradesh',
    activeProjects: 9,
    totalCredits: 35700,
    avgPrice: 16.20,
    growth: 21.5,
    sequesteredCO2: 35700
  },
  {
    state: 'Maharashtra',
    activeProjects: 5,
    totalCredits: 18900,
    avgPrice: 17.30,
    growth: 7.8,
    sequesteredCO2: 18900
  }
];

const marketTrends: MarketTrend[] = [
  { month: 'Jan 2024', price: 12.50, volume: 156000, projects: 28 },
  { month: 'Feb 2024', price: 13.20, volume: 178000, projects: 31 },
  { month: 'Mar 2024', price: 14.10, volume: 203000, projects: 35 },
  { month: 'Apr 2024', price: 14.80, volume: 245000, projects: 42 },
  { month: 'May 2024', price: 15.30, volume: 289000, projects: 48 },
  { month: 'Jun 2024', price: 15.90, volume: 312000, projects: 53 },
  { month: 'Jul 2024', price: 16.45, volume: 338000, projects: 58 },
  { month: 'Aug 2024', price: 16.20, volume: 365000, projects: 64 },
  { month: 'Sep 2024', price: 16.85, volume: 398000, projects: 72 }
];

const MarketAnalyticsPage = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [marketData, setMarketData] = useState(marketTrends);
  const [realTimePrice, setRealTimePrice] = useState(16.85);
  const [priceChange, setPriceChange] = useState(0.25);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 0.5;
      setRealTimePrice(prev => Math.max(0, prev + change));
      setPriceChange(change);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const totalCredits = stateData.reduce((sum, state) => sum + state.totalCredits, 0);
  const totalProjects = stateData.reduce((sum, state) => sum + state.activeProjects, 0);
  const avgGrowth = stateData.reduce((sum, state) => sum + state.growth, 0) / stateData.length;
  const totalSequestered = stateData.reduce((sum, state) => sum + state.sequesteredCO2, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="admin" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate('/admin')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Admin Dashboard
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Market Analytics & Regional Distribution</h1>
          </div>
          <p className="text-muted-foreground">
            Comprehensive analytics of India's blue carbon market and regional performance
          </p>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Price</p>
                  <p className="text-2xl font-bold carbon-counter">
                    ₹{realTimePrice.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {priceChange >= 0 ? (
                      <TrendingUp className="w-4 h-4 text-success" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive" />
                    )}
                    <span className={`text-sm font-medium ${priceChange >= 0 ? 'text-success' : 'text-destructive'}`}>
                      {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}
                    </span>
                  </div>
                </div>
                <Coins className="w-8 h-8 text-primary opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Credits</p>
                  <p className="text-2xl font-bold carbon-counter text-success">
                    {totalCredits.toLocaleString()}
                  </p>
                  <p className="text-sm text-success mt-1">Across {stateData.length} states</p>
                </div>
                <Globe className="w-8 h-8 text-success opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold carbon-counter text-accent">
                    {totalProjects}
                  </p>
                  <p className="text-sm text-accent mt-1">+{avgGrowth.toFixed(1)}% growth</p>
                </div>
                <Building2 className="w-8 h-8 text-accent opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">CO₂ Sequestered</p>
                  <p className="text-2xl font-bold carbon-counter text-warning">
                    {(totalSequestered / 1000).toFixed(0)}K
                  </p>
                  <p className="text-sm text-warning mt-1">tons CO₂e</p>
                </div>
                <Target className="w-8 h-8 text-warning opacity-60" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Regional Blue Carbon Distribution */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Regional Blue Carbon Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stateData.map((state, index) => (
                    <Card 
                      key={state.state}
                      className={`cursor-pointer hover:shadow-glow-accent transition-all ${
                        selectedState?.state === state.state ? 'border-primary shadow-glow-accent' : 'border-border/20'
                      }`}
                      onClick={() => setSelectedState(state)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-lg">{state.state}</h3>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-primary text-primary-foreground">
                              {state.activeProjects} Projects
                            </Badge>
                            <div className={`flex items-center gap-1 ${state.growth >= 0 ? 'text-success' : 'text-destructive'}`}>
                              {state.growth >= 0 ? (
                                <TrendingUp className="w-4 h-4" />
                              ) : (
                                <TrendingDown className="w-4 h-4" />
                              )}
                              <span className="text-sm font-medium">
                                {state.growth >= 0 ? '+' : ''}{state.growth}%
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Progress Bar for Credits */}
                        <div className="mb-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-muted-foreground">Carbon Credits Generated</span>
                            <span className="text-sm font-bold">{state.totalCredits.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${(state.totalCredits / Math.max(...stateData.map(s => s.totalCredits))) * 100}%` }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="p-2 bg-primary/10 rounded">
                            <div className="text-sm font-bold text-primary carbon-counter">
                              ₹{state.avgPrice}
                            </div>
                            <div className="text-xs text-primary">Avg Price</div>
                          </div>
                          <div className="p-2 bg-success/10 rounded">
                            <div className="text-sm font-bold text-success carbon-counter">
                              {(state.sequesteredCO2 / 1000).toFixed(1)}K
                            </div>
                            <div className="text-xs text-success">CO₂ Sequestered</div>
                          </div>
                          <div className="p-2 bg-accent/10 rounded">
                            <div className="text-sm font-bold text-accent carbon-counter">
                              {state.activeProjects}
                            </div>
                            <div className="text-xs text-accent">Active Projects</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* State Details */}
          <div>
            <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
              <CardHeader>
                <CardTitle>State Details</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedState ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-primary text-xl mb-2">
                        {selectedState.state}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Leading blue carbon restoration initiatives
                      </p>
                    </div>

                    <div className="p-4 bg-primary/10 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary carbon-counter">
                          {selectedState.totalCredits.toLocaleString()}
                        </div>
                        <div className="text-sm text-primary">
                          Total Carbon Credits
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Active Projects:</span>
                        <span className="font-medium">{selectedState.activeProjects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Average Price:</span>
                        <span className="font-medium">₹{selectedState.avgPrice}/credit</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Growth Rate:</span>
                        <span className={`font-medium ${selectedState.growth >= 0 ? 'text-success' : 'text-destructive'}`}>
                          {selectedState.growth >= 0 ? '+' : ''}{selectedState.growth}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CO₂ Sequestered:</span>
                        <span className="font-medium">{selectedState.sequesteredCO2.toLocaleString()} tons</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary vayu-glow">
                      <Activity className="w-4 h-4 mr-2" />
                      View Detailed Analytics
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <BarChart3 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Select a state to view detailed analytics</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Market Trends */}
        <Card className="bg-gradient-card border-border/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Market Trends (Last 9 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary carbon-counter">
                  ₹{marketTrends[marketTrends.length - 1].price.toFixed(2)}
                </div>
                <div className="text-sm text-primary">Current Price</div>
                <div className="text-xs text-success mt-1">
                  +{((marketTrends[marketTrends.length - 1].price / marketTrends[0].price - 1) * 100).toFixed(1)}% YTD
                </div>
              </div>
              
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <div className="text-2xl font-bold text-success carbon-counter">
                  {(marketTrends[marketTrends.length - 1].volume / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-success">Monthly Volume</div>
                <div className="text-xs text-success mt-1">
                  +{((marketTrends[marketTrends.length - 1].volume / marketTrends[0].volume - 1) * 100).toFixed(0)}% YTD
                </div>
              </div>
              
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-accent carbon-counter">
                  {marketTrends[marketTrends.length - 1].projects}
                </div>
                <div className="text-sm text-accent">Active Projects</div>
                <div className="text-xs text-accent mt-1">
                  +{marketTrends[marketTrends.length - 1].projects - marketTrends[0].projects} new projects
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Monthly Performance</h4>
              {marketTrends.map((trend, index) => (
                <div key={trend.month} className="flex items-center justify-between p-3 border border-border/20 rounded-lg">
                  <span className="font-medium">{trend.month}</span>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm font-bold">₹{trend.price.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">{(trend.volume / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-muted-foreground">Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">{trend.projects}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketAnalyticsPage;