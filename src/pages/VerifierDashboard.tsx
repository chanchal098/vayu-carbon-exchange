import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, FileText, MapPin, Calendar, Eye, Upload } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const VerifierDashboard = () => {
  const { toast } = useToast();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const pendingProjects = [
    {
      id: 1,
      name: "Sundarbans Mangrove Restoration",
      developer: "West Bengal Coastal NGO",
      location: "Sundarbans, West Bengal",
      area: "250 hectares",
      carbonClaim: "12,500 tCO2e/year",
      submittedDate: "2025-01-15",
      status: "pending",
      priority: "high"
    },
    {
      id: 2,
      name: "Kerala Seagrass Conservation",
      developer: "Coastal Communities Alliance",
      location: "Lakshadweep, Kerala",
      area: "180 hectares",
      carbonClaim: "8,900 tCO2e/year",
      submittedDate: "2025-01-18",
      status: "in-review",
      priority: "medium"
    },
    {
      id: 3,
      name: "Gujarat Salt Marsh Protection",
      developer: "Gujarat Marine Foundation",
      location: "Gulf of Kutch, Gujarat",
      area: "320 hectares",
      carbonClaim: "15,600 tCO2e/year",
      submittedDate: "2025-01-20",
      status: "pending",
      priority: "high"
    }
  ];

  const completedVerifications = [
    {
      id: 4,
      name: "Tamil Nadu Blue Carbon Initiative",
      location: "Pichavaram, Tamil Nadu",
      verifiedCarbon: "10,200 tCO2e/year",
      completedDate: "2025-01-10",
      status: "approved"
    },
    {
      id: 5,
      name: "Odisha Mangrove Reforestation",
      location: "Bhitarkanika, Odisha",
      verifiedCarbon: "18,500 tCO2e/year",
      completedDate: "2025-01-05",
      status: "approved"
    }
  ];

  const handleVerifyProject = (projectId: number) => {
    setSelectedProject(projectId);
    toast({
      title: "Verification Started",
      description: "Opening project verification dashboard...",
      className: "border-primary/20 text-primary",
    });
  };

  const handleSubmitReport = () => {
    toast({
      title: "Verification Report Submitted",
      description: "The report has been sent to NCCR administrators for final approval.",
      className: "border-success/20 text-success",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="verifier" />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Verifier Dashboard
            </span>
          </h1>
          <p className="text-muted-foreground">
            Review and verify carbon sequestration projects
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting verification</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-500">5</div>
              <p className="text-xs text-muted-foreground mt-1">Currently reviewing</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">48</div>
              <p className="text-xs text-muted-foreground mt-1">Total verified</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Site Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500">8</div>
              <p className="text-xs text-muted-foreground mt-1">Scheduled this month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted/50">
            <TabsTrigger value="pending">Pending Verification</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            {pendingProjects.map((project) => (
              <Card key={project.id} className="bg-gradient-card border-border/20 hover:border-primary/30 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === 'pending' ? 'secondary' : 'default'}
                      className={project.status === 'in-review' ? 'bg-yellow-500/20 text-yellow-500' : ''}
                    >
                      {project.status === 'pending' ? 'Pending' : 'In Review'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Developer:</span>
                        <span className="text-sm font-medium">{project.developer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Project Area:</span>
                        <span className="text-sm font-medium">{project.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Carbon Claim:</span>
                        <span className="text-sm font-medium text-primary">{project.carbonClaim}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Submitted:</span>
                        <span className="text-sm font-medium">{project.submittedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Priority:</span>
                        <Badge variant={project.priority === 'high' ? 'destructive' : 'secondary'}>
                          {project.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-gradient-primary hover:opacity-90"
                      onClick={() => handleVerifyProject(project.id)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Review Project
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <FileText className="w-4 h-4 mr-2" />
                      View Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            {completedVerifications.map((project) => (
              <Card key={project.id} className="bg-gradient-card border-border/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                    </div>
                    <Badge className="bg-success/20 text-success">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Approved
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Verified Carbon:</span>
                      <span className="text-sm font-medium text-success">{project.verifiedCarbon}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Completed:</span>
                      <span className="text-sm font-medium">{project.completedDate}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    View Verification Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Verification Guidelines */}
        <Card className="mt-8 bg-gradient-card border-border/20">
          <CardHeader>
            <CardTitle>Verification Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>• Examine all project documents thoroughly including land ownership, carbon calculations, and MRV reports</p>
            <p>• Verify land details using GPS coordinates and satellite imagery</p>
            <p>• Check carbon sequestration calculations against approved methodologies</p>
            <p>• Schedule and conduct site visits when necessary for physical verification</p>
            <p>• Submit detailed verification reports with photographic evidence</p>
            <p>• Update project status and receive verification fees upon completion</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default VerifierDashboard;
