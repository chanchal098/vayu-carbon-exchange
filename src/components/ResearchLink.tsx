import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResearchLink = () => {
  return (
    <Card className="bg-gradient-card border-primary/30 shadow-card-vayu hover:shadow-glow-accent transition-all">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Our Research & Innovation</h3>
            <p className="text-sm text-muted-foreground">
              Explore VAYU DAO's cutting-edge research in blue carbon, MRV technology, and carbon tokenization
            </p>
          </div>
          <Button 
            className="bg-gradient-primary hover:opacity-90 flex-shrink-0"
            onClick={() => window.open('#', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Research Portal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchLink;
