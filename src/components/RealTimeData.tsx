import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Coins, 
  Building2, 
  Leaf, 
  RefreshCw,
  ArrowUpDown,
  Timer
} from "lucide-react";

interface Transaction {
  id: string;
  company: string;
  type: 'purchase' | 'sale';
  credits: number;
  pricePerCredit: number;
  totalValue: number;
  timestamp: Date;
  project: string;
  status: 'completed' | 'pending' | 'processing';
}

interface MarketData {
  currentPrice: number;
  change24h: number;
  volume24h: number;
  totalCredits: number;
  activeProjects: number;
}

const mockTransactions: Transaction[] = [
  {
    id: 'tx001',
    company: 'Tata Steel Limited',
    type: 'purchase',
    credits: 5000,
    pricePerCredit: 15.50,
    totalValue: 77500,
    timestamp: new Date(Date.now() - 2 * 60000),
    project: 'Sundarbans Mangrove Restoration',
    status: 'completed'
  },
  {
    id: 'tx002', 
    company: 'Reliance Industries',
    type: 'purchase',
    credits: 12000,
    pricePerCredit: 16.25,
    totalValue: 195000,
    timestamp: new Date(Date.now() - 8 * 60000),
    project: 'Kerala Coastal Seagrass Project',
    status: 'completed'
  },
  {
    id: 'tx003',
    company: 'Adani Group',
    type: 'purchase', 
    credits: 8500,
    pricePerCredit: 15.75,
    totalValue: 133875,
    timestamp: new Date(Date.now() - 15 * 60000),
    project: 'Gujarat Mangrove Initiative',
    status: 'processing'
  },
  {
    id: 'tx004',
    company: 'ONGC Limited',
    type: 'purchase',
    credits: 3200,
    pricePerCredit: 16.80,
    totalValue: 53760,
    timestamp: new Date(Date.now() - 22 * 60000),
    project: 'Tamil Nadu Blue Carbon Hub',
    status: 'completed'
  },
  {
    id: 'tx005',
    company: 'Mahindra & Mahindra',
    type: 'purchase',
    credits: 6800,
    pricePerCredit: 15.25,
    totalValue: 103700,
    timestamp: new Date(Date.now() - 28 * 60000),
    project: 'Odisha Coastal Forest',
    status: 'pending'
  }
];

const mockMarketData: MarketData = {
  currentPrice: 15.85,
  change24h: 2.4,
  volume24h: 2450000,
  totalCredits: 152400,
  activeProjects: 47
};

const RealTimeData = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [marketData, setMarketData] = useState<MarketData>(mockMarketData);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isLive, setIsLive] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      // Update market data
      setMarketData(prev => ({
        ...prev,
        currentPrice: prev.currentPrice + (Math.random() - 0.5) * 0.5,
        change24h: prev.change24h + (Math.random() - 0.5) * 0.2,
        volume24h: prev.volume24h + Math.random() * 50000,
        totalCredits: prev.totalCredits + Math.floor(Math.random() * 500)
      }));

      // Occasionally add new transactions
      if (Math.random() > 0.7) {
        const newTransaction: Transaction = {
          id: `tx${Date.now()}`,
          company: ['Wipro Limited', 'HCL Technologies', 'Tech Mahindra', 'L&T Infotech'][Math.floor(Math.random() * 4)],
          type: 'purchase',
          credits: Math.floor(Math.random() * 10000) + 1000,
          pricePerCredit: marketData.currentPrice + (Math.random() - 0.5) * 2,
          totalValue: 0,
          timestamp: new Date(),
          project: ['Sundarbans Restoration', 'Kerala Seagrass', 'Gujarat Mangroves', 'Tamil Nadu Hub'][Math.floor(Math.random() * 4)],
          status: 'processing'
        };
        newTransaction.totalValue = newTransaction.credits * newTransaction.pricePerCredit;

        setTransactions(prev => [newTransaction, ...prev.slice(0, 9)]);
      }

      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive, marketData.currentPrice]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(value);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case 'processing':
        return <Badge className="bg-warning text-warning-foreground">Processing</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Market Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Price</p>
                <p className="text-2xl font-bold carbon-counter">
                  ₹{marketData.currentPrice.toFixed(2)}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {marketData.change24h >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                  <span className={`text-sm font-medium ${marketData.change24h >= 0 ? 'text-success' : 'text-destructive'}`}>
                    {marketData.change24h >= 0 ? '+' : ''}{marketData.change24h.toFixed(2)}%
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
                <p className="text-sm font-medium text-muted-foreground">24h Volume</p>
                <p className="text-2xl font-bold carbon-counter">
                  {formatCurrency(marketData.volume24h)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Trading Volume</p>
              </div>
              <Activity className="w-8 h-8 text-accent opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Credits</p>
                <p className="text-2xl font-bold carbon-counter">
                  {marketData.totalCredits.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Available Credits</p>
              </div>
              <Leaf className="w-8 h-8 text-success opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold carbon-counter">
                  {marketData.activeProjects}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Generating Credits</p>
              </div>
              <Building2 className="w-8 h-8 text-warning opacity-60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Transactions */}
      <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CardTitle className="text-xl">Real-time Carbon Credit Transactions</CardTitle>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-success animate-pulse' : 'bg-muted'}`}></div>
                <span className="text-sm text-muted-foreground">
                  {isLive ? 'Live' : 'Paused'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Last updated: {formatTime(lastUpdate)}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLive(!isLive)}
                className="border-border/50"
              >
                {isLive ? (
                  <Timer className="w-4 h-4 mr-2" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                {isLive ? 'Pause' : 'Resume'}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Ticker-style real-time feed */}
          <div className="relative overflow-hidden bg-gradient-to-r from-background via-muted/20 to-background rounded-lg p-4 border border-border/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-sm font-medium text-success">Live Transactions</span>
            </div>
            
            <div className="space-y-2">
              {transactions.slice(0, 5).map((tx, index) => (
                <div 
                  key={tx.id} 
                  className={`flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/10 hover:border-primary/30 hover:bg-card/70 transition-all ${
                    index === 0 ? 'animate-fade-in border-primary/20 shadow-glow-accent' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate">{tx.company}</div>
                      <div className="text-xs text-muted-foreground truncate">{tx.project}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <div className="font-bold text-primary carbon-counter text-sm">
                        {tx.credits.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">credits</div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold carbon-counter text-sm">
                        {formatCurrency(tx.totalValue)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        @₹{tx.pricePerCredit.toFixed(2)}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {getStatusBadge(tx.status)}
                      <div className="text-xs text-muted-foreground">
                        {formatTime(tx.timestamp)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed transactions table */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Transaction History</h4>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {transactions.map((tx) => (
                <div 
                  key={tx.id} 
                  className="grid grid-cols-1 md:grid-cols-6 gap-3 p-4 rounded-lg border border-border/20 hover:bg-muted/30 transition-colors"
                >
                  <div className="md:col-span-2">
                    <div className="font-medium text-sm">{tx.company}</div>
                    <div className="text-xs text-muted-foreground">{tx.project}</div>
                  </div>

                  <div className="text-center">
                    <div className="font-semibold carbon-counter text-sm">{tx.credits.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">credits</div>
                  </div>

                  <div className="text-center">
                    <div className="font-semibold text-primary carbon-counter text-sm">
                      {formatCurrency(tx.totalValue)}
                    </div>
                    <div className="text-xs text-muted-foreground">₹{tx.pricePerCredit.toFixed(2)}/credit</div>
                  </div>

                  <div className="flex justify-center">
                    {getStatusBadge(tx.status)}
                  </div>

                  <div className="text-center">
                    <div className="font-medium text-sm">{formatTime(tx.timestamp)}</div>
                    <div className="text-xs text-muted-foreground">
                      {tx.timestamp.toLocaleDateString('en-IN')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RealTimeData;