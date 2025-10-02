import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  TrendingUp, 
  Globe, 
  Database, 
  Shield, 
  BarChart3, 
  Network,
  Target,
  ChevronRight
} from "lucide-react";

const sections = [
  { id: "abstract", label: "Abstract", icon: FileText },
  { id: "india-market", label: "India Market", icon: TrendingUp },
  { id: "government", label: "Government Bodies", icon: Shield },
  { id: "mrv", label: "MRV Framework", icon: Database },
  { id: "blockchain", label: "Blockchain Comparison", icon: Network },
  { id: "global", label: "Global Comparison", icon: Globe },
  { id: "architecture", label: "Technical Architecture", icon: BarChart3 },
  { id: "impact", label: "Economic Impact", icon: Target },
];

export const ResearchNavigation = () => {
  const [activeSection, setActiveSection] = useState("abstract");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <Card className="sticky top-24 p-4 bg-card/95 backdrop-blur-sm border-primary/20">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Navigation
        </h3>
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(section.id)}
              className={`w-full justify-start text-left transition-all ${
                activeSection === section.id
                  ? "bg-primary/10 text-primary border-l-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              <span className="flex-1">{section.label}</span>
              {activeSection === section.id && (
                <ChevronRight className="w-4 h-4" />
              )}
            </Button>
          );
        })}
      </div>
    </Card>
  );
};
