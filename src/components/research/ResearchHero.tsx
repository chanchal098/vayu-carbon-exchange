import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Globe, Download, Home, Sparkles } from "lucide-react";
import { jsPDF } from "jspdf";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const ResearchHero = () => {
  const navigate = useNavigate();
  
  const handleGoToMainPlatform = () => {
    navigate('/');
  };

  const handleDownloadPDF = () => {
    toast.success("Preparing research paper for download.");
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 20;

    // Title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("VAYU DAO: Blockchain-Powered Blue Carbon", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 10;
    doc.text("Credit Management Framework", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 15;

    // Author
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Author: Shriom Verma | Researchers: Team Algorix", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 10;
    doc.text("Published: January 2025", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 20;

    // Abstract
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Abstract", margin, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const abstractText = "The voluntary carbon market presents a promising mechanism for channeling climate finance into nature-based solutions. This paper presents VAYU DAO, a blockchain-based MRV platform designed for India's blue carbon ecosystems, leveraging Polygon blockchain, smart contracts, and proprietary MRV technology to create a transparent, efficient carbon credit system with dual payment gateways for financial inclusion.";
    const splitAbstract = doc.splitTextToSize(abstractText, pageWidth - 2 * margin);
    doc.text(splitAbstract, margin, yPosition);
    yPosition += splitAbstract.length * 5 + 10;

    // Key Findings
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Key Findings", margin, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const findings = [
      "India possesses 700 million ton CO2 sequestration potential from blue carbon ecosystems",
      "67% reduction in verification time compared to traditional systems",
      "75% reduction in transaction costs through blockchain automation",
      "Four-layer MRV verification system with 95% accuracy",
      "Dual payment gateway enables 100% financial inclusion for rural communities"
    ];
    
    findings.forEach(finding => {
      const bullet = `• ${finding}`;
      const splitFinding = doc.splitTextToSize(bullet, pageWidth - 2 * margin - 5);
      doc.text(splitFinding, margin + 5, yPosition);
      yPosition += splitFinding.length * 5 + 3;
    });

    yPosition += 10;

    // Platform Features
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Platform Features", margin, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const features = [
      "Proprietary VAYU MRV Engine with multi-modal carbon intelligence",
      "Blockchain-based tokenization on Polygon network",
      "BBPS integration for traditional banking access",
      "Multi-wallet support (MetaMask, Ethereum, Solana)",
      "Automated smart contracts for transparent revenue distribution"
    ];
    
    features.forEach(feature => {
      const bullet = `• ${feature}`;
      const splitFeature = doc.splitTextToSize(bullet, pageWidth - 2 * margin - 5);
      doc.text(splitFeature, margin + 5, yPosition);
      yPosition += splitFeature.length * 5 + 3;
    });

    // Add new page for methodology
    doc.addPage();
    yPosition = 20;

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Methodology: Four-Layer Verification System", margin, yPosition);
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const methodology = [
      "Layer 1 - Image Analysis: Geotagged images with computer vision algorithms analyzing vegetation density and health indicators",
      "Layer 2 - Government Database Cross-Referencing: Automated APIs verify data with NCCR and government sources",
      "Layer 3 - Satellite & Drone Data: Independent validation through Sentinel-2 and drone surveys",
      "Layer 4 - Third-Party Auditing: Certified verifiers conduct physical site visits with blockchain-immutable records"
    ];

    methodology.forEach((method, index) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${index + 1}. `, margin, yPosition);
      doc.setFont("helvetica", "normal");
      const splitMethod = doc.splitTextToSize(method, pageWidth - 2 * margin - 10);
      doc.text(splitMethod, margin + 10, yPosition);
      yPosition += splitMethod.length * 5 + 5;
    });

    yPosition += 10;

    // Contact
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Contact & Resources", margin, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Platform: https://vayu-carbon-exchange.lovable.app/", margin, yPosition);
    yPosition += 6;
    doc.text("Research Team: Team Algorix", margin, yPosition);
    yPosition += 6;
    doc.text("Lead Author: Shriom Verma", margin, yPosition);

    // Footer
    const pageCount = doc.internal.pages.length - 1;
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.text(`© 2025 VAYU DAO - Page ${i} of ${pageCount}`, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: "center" });
    }

    doc.save("VAYU_DAO_Research_Paper.pdf");
    toast.success("Research paper downloaded successfully!");
  };

  return (
    <div className="relative bg-gradient-to-br from-background via-card to-background border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight">
              VAYU DAO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Carbon MRV Platform
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Badge variant="outline" className="bg-primary/10 border-primary text-primary">
              <FileText className="w-3 h-3 mr-1" />
              Research Paper
            </Badge>
            <Badge variant="outline" className="bg-primary/10 border-primary text-primary">
              <TrendingUp className="w-3 h-3 mr-1" />
              Blockchain Innovation
            </Badge>
            <Badge variant="outline" className="bg-primary/10 border-primary text-primary">
              <Globe className="w-3 h-3 mr-1" />
              Climate Finance
            </Badge>
          </div>
          
          <p className="text-xl md:text-2xl font-semibold text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            A Blockchain-Powered Framework for Transparent Blue Carbon Credit Management in Indian Coastal Ecosystems
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg hover:shadow-primary/20 transition-all"
              onClick={handleDownloadPDF}
            >
              <Download className="w-5 h-5" />
              Download Research Paper
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 gap-2"
              onClick={handleGoToMainPlatform}
            >
              <Home className="w-5 h-5" />
              Visit Main Platform
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 hover:border-primary/50 gap-2 shadow-md hover:shadow-lg transition-all"
              onClick={() => window.location.href = '/innovation'}
            >
              <Sparkles className="w-5 h-5" />
              Our Innovation
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Author: Shriom Verma</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Team Algorix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};