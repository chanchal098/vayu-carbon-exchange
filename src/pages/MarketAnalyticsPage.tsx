import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, BarChart3, DollarSign, Activity, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";

const MarketAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="admin" />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Market Analytics</h2>
            <Badge className="bg-success/20 text-success">Live Data</Badge>
          </div>

          {/* Market Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="text-2xl font-bold">₹124.8M</p>
                    <p className="text-xs text-success flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12.5%
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">24h Volume</p>
                    <p className="text-2xl font-bold">₹24.5M</p>
                    <p className="text-xs text-success flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +8.3%
                    </p>
                  </div>
                  <Activity className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Price</p>
                    <p className="text-2xl font-bold">₹16.50</p>
                    <p className="text-xs text-destructive flex items-center mt-1">
                      <TrendingDown className="w-3 h-3 mr-1" />
                      -1.2%
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Transactions</p>
                    <p className="text-2xl font-bold">4,892</p>
                    <p className="text-xs text-success flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +15%
                    </p>
                  </div>
                  <Globe className="w-8 h-8 text-warning" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Trends */}
          <Card className="bg-gradient-card border-border/20">
            <CardHeader>
              <CardTitle>Price Trends (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-end justify-between gap-2">
                {[14.2, 15.1, 14.8, 16.3, 15.9, 16.8, 16.5].map((price, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-gradient-primary rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${(price / 20) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">Day {i + 1}</span>
                    <span className="text-xs font-medium">₹{price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Regional Distribution */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Top Trading States</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { state: 'West Bengal', volume: 8450, percentage: 32 },
                    { state: 'Gujarat', volume: 6200, percentage: 24 },
                    { state: 'Kerala', volume: 5100, percentage: 19 },
                    { state: 'Tamil Nadu', volume: 4300, percentage: 16 },
                    { state: 'Odisha', volume: 2400, percentage: 9 }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.state}</span>
                        <span className="text-sm text-muted-foreground">{item.volume} credits</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Project Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: 'Mangrove Restoration', count: 28, percentage: 60 },
                    { type: 'Seagrass Conservation', count: 12, percentage: 25 },
                    { type: 'Coastal Forest', count: 7, percentage: 15 }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.type}</span>
                        <span className="text-sm text-muted-foreground">{item.count} projects</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-success h-2 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalyticsPage;
