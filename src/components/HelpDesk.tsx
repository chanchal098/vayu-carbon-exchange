import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, User, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const HelpDesk = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Help Request Submitted",
      description: "Our support team will get back to you within 24 hours.",
      className: "border-success/20 text-success",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 bg-gradient-primary hover:opacity-90 vayu-glow shadow-lg"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-gradient-card border-border/20">
        <SheetHeader>
          <SheetTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
            Help Desk
          </SheetTitle>
          <p className="text-muted-foreground text-sm">
            Need assistance? Our support team is here to help with any questions about the platform.
          </p>
        </SheetHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="help-name" className="text-sm font-medium">
              Your Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="help-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="help-email" className="text-sm font-medium">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="help-email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="help-message" className="text-sm font-medium">
              How can we help you?
            </Label>
            <Textarea
              id="help-message"
              placeholder="Describe your issue or question..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:opacity-90"
          >
            <Send className="w-4 h-4 mr-2" />
            Submit Request
          </Button>

          <div className="space-y-3 pt-4 border-t border-border/20">
            <h4 className="font-semibold text-sm">Quick Help</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <span className="text-primary">Login Issues:</span> Contact admin@vayudao.in</p>
              <p>• <span className="text-primary">Technical Support:</span> Available 24/7</p>
              <p>• <span className="text-primary">Response Time:</span> Within 24 hours</p>
            </div>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default HelpDesk;
