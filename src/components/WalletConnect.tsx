import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Check, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WalletConnectProps {
  className?: string;
}

const WalletConnect = ({ className }: WalletConnectProps) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [chainType, setChainType] = useState<'ethereum' | 'solana' | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if wallet is already connected
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            setChainType('ethereum');
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
        }
      }
    };
    
    checkConnection();
  }, []);

  const connectEthereum = async () => {
    if (typeof window.ethereum === 'undefined') {
      toast({
        title: "MetaMask Not Found",
        description: "Please install MetaMask extension to connect your Ethereum wallet.",
        variant: "destructive"
      });
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setChainType('ethereum');
        
        toast({
          title: "Wallet Connected",
          description: `Ethereum wallet connected: ${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`,
          className: "border-success/20 text-success"
        });
      }
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      toast({
        title: "Connection Failed",
        description: error.message || "Failed to connect wallet. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const connectSolana = async () => {
    if (typeof window.solana === 'undefined' || !window.solana.isPhantom) {
      toast({
        title: "Phantom Wallet Not Found",
        description: "Please install Phantom wallet extension to connect your Solana wallet.",
        variant: "destructive"
      });
      return;
    }

    setIsConnecting(true);
    try {
      const response = await window.solana.connect();
      const address = response.publicKey.toString();
      
      setWalletAddress(address);
      setChainType('solana');
      
      toast({
        title: "Wallet Connected",
        description: `Solana wallet connected: ${address.substring(0, 6)}...${address.substring(address.length - 4)}`,
        className: "border-success/20 text-success"
      });
    } catch (error: any) {
      console.error('Error connecting Solana wallet:', error);
      toast({
        title: "Connection Failed",
        description: error.message || "Failed to connect Solana wallet. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setChainType(null);
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected successfully.",
      className: "border-warning/20 text-warning"
    });
  };

  if (walletAddress) {
    return (
      <Card className={`bg-gradient-card border-primary/30 ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-success text-success-foreground text-xs">
                    <Check className="w-3 h-3 mr-1" />
                    Connected
                  </Badge>
                  <Badge variant="outline" className="text-xs capitalize">
                    {chainType}
                  </Badge>
                </div>
                <div className="text-sm font-mono text-muted-foreground">
                  {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => {
                  const explorerUrl = chainType === 'ethereum' 
                    ? `https://etherscan.io/address/${walletAddress}`
                    : `https://explorer.solana.com/address/${walletAddress}`;
                  window.open(explorerUrl, '_blank');
                }}
              >
                <ExternalLink className="w-3 h-3" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={disconnectWallet}
                className="text-xs"
              >
                Disconnect
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-gradient-card border-border/20 ${className}`}>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <Wallet className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Connect Your Wallet</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              onClick={connectEthereum}
              disabled={isConnecting}
              className="bg-gradient-primary hover:opacity-90 vayu-glow"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isConnecting ? 'Connecting...' : 'MetaMask (ETH)'}
            </Button>
            <Button
              onClick={connectSolana}
              disabled={isConnecting}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isConnecting ? 'Connecting...' : 'Phantom (SOL)'}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Connect your wallet to access blockchain features and manage your carbon credits
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletConnect;

// TypeScript declarations for window objects
declare global {
  interface Window {
    ethereum?: any;
    solana?: any;
  }
}
