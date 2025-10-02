import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

const stateData = [
  { state: 'West Bengal', credits: 45200, percentage: 28, color: 'bg-primary' },
  { state: 'Gujarat', credits: 38900, percentage: 24, color: 'bg-success' },
  { state: 'Tamil Nadu', credits: 32100, percentage: 20, color: 'bg-warning' },
  { state: 'Kerala', credits: 24500, percentage: 15, color: 'bg-accent' },
  { state: 'Odisha', credits: 21300, percentage: 13, color: 'bg-secondary' },
];

const RegionalDistributionChart = () => {
  return (
    <Card className="bg-gradient-card border-border/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Regional Blue Carbon Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stateData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{item.state}</span>
                <div className="text-right">
                  <span className="font-bold text-primary">
                    {item.credits.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">credits</span>
                </div>
              </div>
              <div className="relative w-full bg-muted rounded-full h-3 overflow-hidden">
                <div 
                  className={`${item.color} h-full rounded-full transition-all duration-1000 flex items-center justify-end pr-2`}
                  style={{ width: `${item.percentage}%` }}
                >
                  <span className="text-[10px] font-bold text-white">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-4 border-t border-border/20">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total National Credits</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="font-bold text-success">162,000</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegionalDistributionChart;
