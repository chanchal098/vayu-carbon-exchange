import { useState } from "react";
import Navigation from "@/components/Navigation";
import WalletConnect from "@/components/WalletConnect";
import ResearchLink from "@/components/ResearchLink";
import MRVEngineVerification from "@/components/MRVEngineVerification";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Shield, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  FileText,
  MapPin,
  Camera,
  Eye,
  MessageSquare,
  Award,
  Ban,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const EnhancedVerifierDashboard = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [verificationStep, setVerificationStep] = useState(1);

  const pendingProjects = [
    {
      id: 'PRJ001',
      name: 'Sundarbans Mangrove Expansion Phase 2',
      submitter: 'West Bengal Forest Department',
      location: 'Sundarbans, West Bengal',
      status: 'pending',
      submissionDate: '2024-09-22',
      estimatedCredits: 12500,
      aiVerificationScore: 97.8,
      priority: 'high'
    },
    {
      id: 'PRJ002',
      name: 'Kerala Coastal Seagrass Restoration',
      submitter: 'Marine Conservation NGO Kerala',
      location: 'Kochi, Kerala',
      status: 'under_review',
      submissionDate: '2024-09-20',
      estimatedCredits: 8900,
      aiVerificationScore: 95.2,
      priority: 'medium'
    }
  ];

  const verificationSteps = [
    { name: 'VAYU MRV Engine (AI)', status: 'completed', confidence: '97.8%' },
    { name: 'Document Examination', status: 'in-progress', confidence: '-' },
    { name: 'Land Details Verification', status: 'pending', confidence: '-' },
    { name: 'Carbon Calculations Check', status: 'pending', confidence: '-' },
    { name: 'Site Visit (if needed)', status: 'pending', confidence: '-' },
    { name: 'VAYU Engine Re-verification', status: 'pending', confidence: '-' },
    { name: 'ACVAS Verification', status: 'pending', confidence: '-' },
    { name: 'CCTS Compliance Check', status: 'pending', confidence: '-' },
    { name: 'BEE Database Check', status: 'pending', confidence: '-' },
    { name: 'NSCICM Review', status: 'pending', confidence: '-' },
    { name: 'Carbon Check Indian (CCIPL)', status: 'pending', confidence: '-' },
    { name: 'MOES Final Check', status: 'pending', confidence: '-' },
    { name: 'VAYU Engine Final Validation', status: 'pending', confidence: '-' }
  ];

  const handleProjectAction = (action: string) => {
    toast({
      title: `Project ${action}`,
      description: `Action recorded in verification workflow`,
      className: "border-primary/20 text-primary",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="verifier" />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Verifier Dashboard
              </span>
            </h1>
          </div>
          <p className="text-muted-foreground">
            Multi-layer verification system with AI assistance and comprehensive compliance checking
          </p>
        </div>

        {/* Research Link */}
        <div className="mb-8">
          <ResearchLink />
        </div>

        {/* Wallet Connection */}
        <div className="mb-8">
          <WalletConnect />
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Reviews</p>
                  <p className="text-2xl font-bold text-warning carbon-counter">12</p>
                  <p className="text-xs text-muted-foreground mt-1">Awaiting verification</p>
                </div>
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Review</p>
                  <p className="text-2xl font-bold text-primary carbon-counter">5</p>
                  <p className="text-xs text-muted-foreground mt-1">Currently verifying</p>
                </div>
                <Eye className="w-6 h-6 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-success carbon-counter">48</p>
                  <p className="text-xs text-muted-foreground mt-1">Total verified</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Earnings</p>
                  <p className="text-2xl font-bold text-accent carbon-counter">₹2.4L</p>
                  <p className="text-xs text-success mt-1">+₹12K this month</p>
                </div>
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 bg-muted/50">
            <TabsTrigger value="pending">Pending Verification</TabsTrigger>
            <TabsTrigger value="reviewing">In Review</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          {/* Pending Tab */}
          <TabsContent value="pending">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                {pendingProjects.map((project) => (
                  <Card 
                    key={project.id}
                    className={`cursor-pointer hover:shadow-glow-accent transition-all ${
                      selectedProject?.id === project.id ? 'border-primary shadow-glow-accent' : 'border-border/20'
                    } bg-gradient-card`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{project.name}</h3>
                            <Badge variant={project.priority === 'high' ? 'destructive' : 'secondary'}>
                              {project.priority} priority
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Submitted by: {project.submitter}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </div>
                        </div>
                        <Badge className={
                          project.status === 'pending' ? 'bg-warning/20 text-warning' : 
                          'bg-primary/20 text-primary'
                        }>
                          {project.status === 'pending' ? 'Pending' : 'Under Review'}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <div className="text-lg font-bold text-primary">
                            {project.estimatedCredits.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">Estimated Credits</div>
                        </div>
                        <div className="p-3 bg-success/10 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-success" />
                            <div className="text-lg font-bold text-success">
                              {project.aiVerificationScore}%
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">AI Confidence</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-gradient-primary hover:opacity-90"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectAction('started review');
                          }}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Start Verification
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectAction('viewed documents');
                          }}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Documents
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Selected Project Panel */}
              <div>
                {selectedProject ? (
                  <div className="space-y-6">
                    <Card className="bg-gradient-card border-border/20 shadow-card-vayu sticky top-24">
                      <CardHeader>
                        <CardTitle>Project Details</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-primary mb-1">
                              {selectedProject.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              ID: {selectedProject.id}
                            </p>
                          </div>

                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Submitter:</span>
                              <span className="font-medium text-right max-w-[60%]">
                                {selectedProject.submitter}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Location:</span>
                              <span className="font-medium">{selectedProject.location}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Submitted:</span>
                              <span className="font-medium">{selectedProject.submissionDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Est. Credits:</span>
                              <span className="font-medium text-primary">
                                {selectedProject.estimatedCredits.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-border/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles className="w-4 h-4 text-success" />
                              <span className="font-semibold">AI Pre-Verification</span>
                            </div>
                            <div className="p-3 bg-success/10 rounded-lg">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-success">
                                  {selectedProject.aiVerificationScore}%
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  Confidence Score
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <MRVEngineVerification projectId={selectedProject.id} />
                  </div>
                ) : (
                  <Card className="bg-gradient-card border-border/20">
                    <CardContent className="p-12 text-center text-muted-foreground">
                      <Eye className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="font-medium">Select a project to view details</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* In Review Tab */}
          <TabsContent value="reviewing">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Comprehensive Verification Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-primary mb-4">Multi-Layer Security Protocol</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our 13-step verification process ensures maximum security and compliance with international standards. 
                      Each project undergoes rigorous checks by AI systems, human verifiers, and accredited agencies.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {verificationSteps.map((step, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{step.name}</p>
                            {step.status === 'in-progress' && (
                              <p className="text-xs text-warning mt-1">Currently verifying...</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {step.confidence !== '-' && (
                            <Badge className="bg-success/20 text-success">
                              {step.confidence}
                            </Badge>
                          )}
                          {step.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-success" />}
                          {step.status === 'in-progress' && <Clock className="w-5 h-5 text-warning animate-pulse" />}
                          {step.status === 'pending' && <Clock className="w-5 h-5 text-muted-foreground" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border/20">
                    <h4 className="font-semibold mb-4">Verifier Actions</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Add Verification Notes</label>
                        <Textarea
                          placeholder="Enter your verification observations, findings, or concerns..."
                          className="bg-background/50 border-border/50 min-h-[100px]"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Button className="bg-success hover:bg-success/90">
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button variant="outline">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Request Info
                        </Button>
                        <Button variant="destructive">
                          <Ban className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Completed Tab */}
          <TabsContent value="completed">
            <div className="space-y-4">
              {[
                {
                  id: 'PRJ004',
                  name: 'Tamil Nadu Blue Carbon Initiative',
                  location: 'Pichavaram, Tamil Nadu',
                  verifiedCredits: 10200,
                  completedDate: '2025-01-10',
                  fee: 15300
                },
                {
                  id: 'PRJ005',
                  name: 'Odisha Mangrove Reforestation',
                  location: 'Bhitarkanika, Odisha',
                  verifiedCredits: 18500,
                  completedDate: '2025-01-05',
                  fee: 27750
                }
              ].map((project) => (
                <Card key={project.id} className="bg-gradient-card border-border/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                          <Badge className="bg-success/20 text-success">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-3 bg-success/10 rounded-lg">
                            <div className="text-lg font-bold text-success">
                              {project.verifiedCredits.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground">Verified Credits</div>
                          </div>
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <div className="text-lg font-bold text-primary">
                              ₹{project.fee.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground">Verification Fee</div>
                          </div>
                          <div className="p-3 bg-muted/20 rounded-lg">
                            <div className="text-sm font-medium">{project.completedDate}</div>
                            <div className="text-xs text-muted-foreground">Completed</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4 pt-4 border-t border-border/20">
                      <Button variant="outline" className="flex-1">
                        <FileText className="w-4 h-4 mr-2" />
                        View Report
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Camera className="w-4 h-4 mr-2" />
                        Site Photos
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Verification Guidelines */}
        <Card className="mt-8 bg-gradient-card border-border/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Verification Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>• <strong>Document Review:</strong> Examine land ownership, carbon calculations, and MRV reports thoroughly</p>
            <p>• <strong>Land Verification:</strong> Verify land details using GPS coordinates and satellite imagery</p>
            <p>• <strong>Carbon Calculations:</strong> Check sequestration calculations against approved methodologies (VM0033, AR-ACM0003)</p>
            <p>• <strong>Site Visits:</strong> Schedule physical verification when remote assessment is insufficient</p>
            <p>• <strong>AI Assistance:</strong> Leverage VAYU MRV Engine insights but always apply human judgment</p>
            <p>• <strong>Multi-Agency Coordination:</strong> Coordinate with ACVAS, CCTS, BEE, NSCICM, CCIPL, and MOES</p>
            <p>• <strong>Detailed Reporting:</strong> Submit comprehensive reports with photographic evidence</p>
            <p>• <strong>Compliance:</strong> Ensure adherence to Verra VCS, Gold Standard, and UNFCCC protocols</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedVerifierDashboard;
