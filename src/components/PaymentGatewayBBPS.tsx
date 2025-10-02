import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  CreditCard, 
  Smartphone,
  Building2,
  CheckCircle2,
  IndianRupee
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PaymentGatewayProps {
  amount: number;
  purpose: string;
  onPaymentComplete?: (transactionId: string) => void;
}

const PaymentGatewayBBPS = ({ amount, purpose, onPaymentComplete }: PaymentGatewayProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'netbanking' | 'card'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', cvv: '', expiry: '' });

  const handlePayment = async () => {
    setIsProcessing(true);
    
    toast({
      title: "Processing Payment",
      description: "Connecting to BBPS payment gateway...",
      className: "border-primary/20 text-primary",
    });

    // Simulate payment processing
    setTimeout(() => {
      const transactionId = `TXN${Date.now()}`;
      
      setIsProcessing(false);
      toast({
        title: "Payment Successful",
        description: `Transaction ID: ${transactionId}`,
        className: "border-success/20 text-success",
      });

      if (onPaymentComplete) {
        onPaymentComplete(transactionId);
      }
    }, 2000);
  };

  return (
    <Card className="bg-gradient-card border-border/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          BBPS Payment Gateway
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Amount Display */}
          <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground mb-2">{purpose}</p>
            <div className="flex items-center justify-center gap-1">
              <IndianRupee className="w-6 h-6 text-primary" />
              <span className="text-4xl font-bold text-primary">
                {amount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div>
            <Label className="mb-3 block">Select Payment Method</Label>
            <div className="grid grid-cols-3 gap-3">
              <Button
                type="button"
                variant={paymentMethod === 'upi' ? 'default' : 'outline'}
                className="flex-col h-auto py-4"
                onClick={() => setPaymentMethod('upi')}
              >
                <Smartphone className="w-6 h-6 mb-2" />
                <span className="text-xs">UPI</span>
              </Button>
              <Button
                type="button"
                variant={paymentMethod === 'netbanking' ? 'default' : 'outline'}
                className="flex-col h-auto py-4"
                onClick={() => setPaymentMethod('netbanking')}
              >
                <Building2 className="w-6 h-6 mb-2" />
                <span className="text-xs">Net Banking</span>
              </Button>
              <Button
                type="button"
                variant={paymentMethod === 'card' ? 'default' : 'outline'}
                className="flex-col h-auto py-4"
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard className="w-6 h-6 mb-2" />
                <span className="text-xs">Card</span>
              </Button>
            </div>
          </div>

          {/* Payment Details Form */}
          {paymentMethod === 'upi' && (
            <div className="space-y-2">
              <Label htmlFor="upi">UPI ID</Label>
              <Input
                id="upi"
                placeholder="yourname@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="bg-background/50 border-border/50"
              />
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="password"
                    placeholder="***"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                    className="bg-background/50 border-border/50"
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'netbanking' && (
            <div className="space-y-2">
              <Label htmlFor="bank">Select Bank</Label>
              <select
                id="bank"
                className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md"
              >
                <option>State Bank of India</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>Axis Bank</option>
                <option>Punjab National Bank</option>
              </select>
            </div>
          )}

          {/* Payment Button */}
          <Button 
            className="w-full bg-gradient-primary hover:opacity-90"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Pay ₹{amount.toLocaleString()}
              </>
            )}
          </Button>

          {/* Security Note */}
          <p className="text-xs text-center text-muted-foreground">
            🔒 Secured by BBPS (Bharat Bill Payment System)
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentGatewayBBPS;
