import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Sparkles,
  FileCheck,
  Shield
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface MRVEngineProps {
  projectId?: string;
  onVerificationComplete?: (result: any) => void;
}

const MRVEngineVerification = ({ projectId, onVerificationComplete }: MRVEngineProps) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleVerify = async () => {
    setIsVerifying(true);
    toast({
      title: "VAYU MRV Engine Activated",
      description: "AI-powered verification in progress...",
      className: "border-primary/20 text-primary",
    });

    // Simulate AI verification process
    setTimeout(() => {
      const result = {
        status: 'verified',
        confidence: 97.8,
        checks: [
          { name: 'Land Ownership', status: 'passed', confidence: 99.2 },
          { name: 'GPS Coordinates', status: 'passed', confidence: 98.5 },
          { name: 'Carbon Calculations', status: 'passed', confidence: 96.8 },
          { name: 'MRV Data Quality', status: 'passed', confidence: 97.4 },
          { name: 'Species Verification', status: 'passed', confidence: 95.6 },
          { name: 'Image Analysis', status: 'passed', confidence: 98.1 },
        ],
        recommendations: [
          'All verification criteria met',
          'Project ready for human verifier review',
          'Estimated carbon credits: 12,500 tCO2e/year'
        ]
      };
      
      setVerificationResult(result);
      setIsVerifying(false);
      
      toast({
        title: "Verification Complete",
        description: "VAYU MRV Engine has verified all project details",
        className: "border-success/20 text-success",
      });

      if (onVerificationComplete) {
        onVerificationComplete(result);
      }
    }, 3000);
  };

  return (
    <Card className="bg-gradient-card border-border/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-primary" />
          VAYU MRV Engine
          <Badge className="ml-2 bg-primary/20 text-primary">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!verificationResult && !isVerifying && (
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Advanced Verification System
              </h4>
              <p className="text-sm text-muted-foreground">
                Our AI engine analyzes land ownership documents, GPS coordinates, carbon calculations, 
                MRV data quality, species verification, and satellite imagery to ensure project authenticity.
              </p>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Multi-layer verification protocol</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Satellite imagery analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Carbon calculation validation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Compliance checking</span>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-primary hover:opacity-90"
              onClick={handleVerify}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Verify with VAYU MRV Engine
            </Button>
          </div>
        )}

        {isVerifying && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4"></div>
            <h3 className="font-semibold mb-2">AI Verification in Progress</h3>
            <p className="text-sm text-muted-foreground">
              Analyzing project data across multiple verification layers...
            </p>
          </div>
        )}

        {verificationResult && (
          <div className="space-y-4">
            <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-success" />
              <h3 className="font-semibold text-success mb-1">Verification Complete</h3>
              <p className="text-2xl font-bold text-success">
                {verificationResult.confidence}% Confidence
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                Verification Checks
              </h4>
              {verificationResult.checks.map((check: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span className="text-sm">{check.name}</span>
                  </div>
                  <Badge className="bg-success/20 text-success">
                    {check.confidence}%
                  </Badge>
                </div>
              ))}
            </div>

            <div className="p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold mb-2">Recommendations</h4>
              <ul className="space-y-1 text-sm">
                {verificationResult.recommendations.map((rec: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setVerificationResult(null)}
            >
              Run New Verification
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MRVEngineVerification;
