import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Bot, Send, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const CarbonChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: "Hello! I'm VAYU AI, your carbon market assistant. I can help you understand carbon tokenization, market trends, and platform features. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "What is carbon tokenization?",
    "How does the verification process work?",
    "What are blue carbon credits?",
    "How can I buy carbon tokens?",
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("carbon tokenization") || lowerMessage.includes("tokenization")) {
      return "Carbon tokenization is the process of converting verified carbon credits into digital tokens on the blockchain. Each token represents 1 tonne of CO2 equivalent. This makes carbon credits tradeable, transparent, and easily verifiable. On VAYU DAO, projects undergo MRV (Monitoring, Reporting, Verification) before tokens are minted.";
    }
    
    if (lowerMessage.includes("verification") || lowerMessage.includes("verify")) {
      return "The verification process involves: 1) Project Developer submits project details and MRV data, 2) Independent Verifier examines documents and conducts site visits, 3) NCCR Administrator cross-checks with database and validates against standards (Verra/UNFCCC/Gold Standard/NSCC), 4) Once approved, carbon tokens are minted and distributed.";
    }

    if (lowerMessage.includes("blue carbon")) {
      return "Blue carbon refers to carbon captured by coastal and marine ecosystems like mangroves, seagrasses, and salt marshes. These ecosystems can sequester up to 10x more carbon per hectare than terrestrial forests. VAYU DAO focuses on blue carbon projects along India's coastline, supporting Mission 2070 and Net Zero 2030 goals.";
    }

    if (lowerMessage.includes("buy") || lowerMessage.includes("purchase")) {
      return "To purchase carbon tokens: 1) Register as a Buyer (Company/Startup), 2) Complete KYC verification, 3) Browse the marketplace and filter by project type/location, 4) Select tokens and make payment via BBPS/UPI/Bank Transfer, 5) Receive digital certificate and track your carbon portfolio. You can retire tokens for ESG compliance.";
    }

    if (lowerMessage.includes("market") || lowerMessage.includes("price")) {
      return "The carbon market on VAYU DAO is dynamic with real-time pricing based on project quality, location, and demand. Current average price ranges from ₹1,200-₹2,500 per token. Premium projects (mangrove restoration, seagrass conservation) command higher prices. You can view live market analytics in the dashboard.";
    }

    if (lowerMessage.includes("nccr") || lowerMessage.includes("admin")) {
      return "NCCR (National Centre for Coastal Research) is the administrative authority overseeing VAYU DAO. They review verified projects, cross-check data, validate against international standards, approve token minting, and monitor marketplace transactions to ensure compliance and transparency.";
    }

    if (lowerMessage.includes("mrv")) {
      return "MRV stands for Monitoring, Reporting, and Verification. It's a systematic approach to measure carbon sequestration: Monitoring involves GPS tracking and satellite imagery, Reporting includes documenting carbon data and project activities, Verification is conducted by independent third-party verifiers who validate the data.";
    }

    if (lowerMessage.includes("mission 2070") || lowerMessage.includes("net zero")) {
      return "Mission 2070 is India's commitment to achieve net-zero carbon emissions by 2070. Net Zero 2030 refers to sector-specific targets. VAYU DAO supports these goals by enabling coastal communities to participate in carbon markets, incentivizing blue carbon projects, and providing transparent carbon accounting.";
    }

    return "I can help you with information about carbon tokenization, verification processes, blue carbon credits, buying tokens, market trends, NCCR administration, MRV data, and India's climate goals. What would you like to know more about?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        role: 'bot',
        content: getBotResponse(input)
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput("");
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-24 right-6 z-50 rounded-full h-14 w-14 bg-gradient-to-br from-primary to-purple-600 hover:opacity-90 vayu-glow shadow-lg animate-pulse-slow"
          size="icon"
        >
          <Bot className="w-6 h-6" />
          <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-400" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-gradient-card border-border/20 flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent flex items-center gap-2">
            <Bot className="w-6 h-6 text-primary" />
            VAYU AI Assistant
          </SheetTitle>
          <p className="text-muted-foreground text-sm">
            Get instant insights about carbon markets and the platform
          </p>
        </SheetHeader>
        
        <ScrollArea className="flex-1 pr-4 my-4">
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${
                    msg.role === 'user'
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'bg-muted/50 border border-border/20'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {messages.length === 1 && (
          <div className="space-y-2 mb-4">
            <p className="text-xs text-muted-foreground">Quick questions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((q, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion(q)}
                  className="text-xs h-auto py-2 px-3 hover:bg-primary/10"
                >
                  {q}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Input
            placeholder="Ask me anything about carbon markets..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="bg-background/50 border-border/50 focus:border-primary"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-primary hover:opacity-90"
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CarbonChatbot;
