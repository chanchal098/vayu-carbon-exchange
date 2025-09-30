import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Users,
  Building2,
  Leaf,
  TrendingUp,
  FileCheck,
  Activity,
  Settings
} from "lucide-react";
import Navigation from "@/components/Navigation";
import RealTimeData from "@/components/RealTimeData";
import WalletConnect from "@/components/WalletConnect";

interface Project {
  id: string;
  name: string;
  submitter: string;
  type: 'mangrove' | 'seagrass' | 'forest';
  location: string;
  status: 'pending' | 'under_review' | 'verified' | 'rejected';
  submissionDate: string;
  estimatedCredits: number;
  mrvData: {
    area: number;
    species: string;
    sequestrationRate: number;
  };
}

const mockPendingProjects: Project[] = [
  {
    id: 'PRJ001',
    name: 'Sundarbans Mangrove Expansion Phase 2',
    submitter: 'West Bengal Forest Department',
    type: 'mangrove',
    location: 'Sundarbans, West Bengal',
    status: 'pending',
    submissionDate: '2024-09-22',
    estimatedCredits: 12500,
    mrvData: {
      area: 85.5,
      species: 'Rhizophora mucronata',
      sequestrationRate: 146.2
    }
  },
  {
    id: 'PRJ002',
    name: 'Kerala Coastal Seagrass Restoration',
    submitter: 'Marine Conservation NGO Kerala',
    type: 'seagrass',
    location: 'Kochi, Kerala',
    status: 'under_review',
    submissionDate: '2024-09-20',
    estimatedCredits: 8900,
    mrvData: {
      area: 62.3,
      species: 'Thalassia hemprichii',
      sequestrationRate: 142.8
    }
  },
  {
    id: 'PRJ003',
    name: 'Gujarat Mangrove Conservation Initiative',
    submitter: 'Gujarat Coastal Development Authority',
    type: 'mangrove',
    location: 'Kutch, Gujarat',
    status: 'verified',
    submissionDate: '2024-09-18',
    estimatedCredits: 15600,
    mrvData: {
      area: 112.8,
      species: 'Avicennia marina',
      sequestrationRate: 138.4
    }
  }
];

const AdminDashboard = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-success text-success-foreground">Verified</Badge>;
      case 'under_review':
        return <Badge className="bg-warning text-warning-foreground">Under Review</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending Review</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'mangrove': return <Leaf className="w-4 h-4" />;
      case 'seagrass': return <Activity className="w-4 h-4" />;
      case 'forest': return <Leaf className="w-4 h-4" />;
      default: return <FileCheck className="w-4 h-4" />;
    }
  };

  const handleProjectAction = (projectId: string, action: 'approve' | 'reject' | 'request_more_info') => {
    // In real app, this would call API
    console.log(`${action} project ${projectId}`);
  };

  const adminStats = [
    {
      title: "Pending Reviews",
      value: "12",
      icon: <Clock className="w-6 h-6" />,
      color: "text-warning",
      change: "+3 today"
    },
    {
      title: "Verified Projects",
      value: "47",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "text-success",
      change: "+5 this week"
    },
    {
      title: "Active Users",
      value: "1,284",
      icon: <Users className="w-6 h-6" />,
      color: "text-primary",
      change: "+12% this month"
    },
    {
      title: "Total Credits Issued",
      value: "152,400",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-accent",
      change: "+8,900 today"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="admin" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold">NCCR Admin Dashboard</h1>
              </div>
              <p className="text-muted-foreground">
                National Centre for Coastal Research - Project Verification & Platform Management
              </p>
            </div>
          </div>
        </div>

        {/* Wallet Connection */}
        <div className="mb-8">
          <WalletConnect />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold carbon-counter">{stat.value}</p>
                    <p className={`text-sm ${stat.color} mt-1`}>{stat.change}</p>
                  </div>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="projects">Project Verification</TabsTrigger>
            <TabsTrigger value="market">Market Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Project Verification Tab */}
          <TabsContent value="projects">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Project List */}
              <div className="lg:col-span-2 space-y-4">
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="w-5 h-5" />
                      Projects Pending Verification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockPendingProjects.map((project) => (
                        <Card 
                          key={project.id}
                          className={`cursor-pointer hover:shadow-glow-accent transition-all ${
                            selectedProject?.id === project.id ? 'border-primary shadow-glow-accent' : 'border-border/20'
                          }`}
                          onClick={() => setSelectedProject(project)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  {getProjectIcon(project.type)}
                                  <h3 className="font-semibold">{project.name}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">
                                  Submitted by: {project.submitter}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Location: {project.location}
                                </p>
                                <div className="flex items-center gap-4 mt-3">
                                  <span className="text-sm">
                                    <strong>{project.estimatedCredits.toLocaleString()}</strong> credits
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {project.submissionDate}
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                {getStatusBadge(project.status)}
                                <span className="text-xs text-muted-foreground">
                                  ID: {project.id}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project Details Panel */}
              <div>
                <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedProject ? (
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-primary mb-2">
                            {selectedProject.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedProject.submitter}
                          </p>
                        </div>

                        {/* MRV Data */}
                        <div>
                          <h4 className="font-medium mb-3">MRV Data</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Area:</span>
                              <span>{selectedProject.mrvData.area} hectares</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Species:</span>
                              <span>{selectedProject.mrvData.species}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Sequestration Rate:</span>
                              <span>{selectedProject.mrvData.sequestrationRate} tCO₂e/ha/yr</span>
                            </div>
                          </div>
                        </div>

                        {/* Estimated Credits */}
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary carbon-counter">
                              {selectedProject.estimatedCredits.toLocaleString()}
                            </div>
                            <div className="text-sm text-primary">
                              Estimated Carbon Credits
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        {selectedProject.status === 'pending' && (
                          <div className="space-y-2">
                            <Button 
                              className="w-full bg-success hover:bg-success/90"
                              onClick={() => handleProjectAction(selectedProject.id, 'approve')}
                            >
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Approve & Verify
                            </Button>
                            <Button 
                              variant="outline"
                              className="w-full"
                              onClick={() => handleProjectAction(selectedProject.id, 'request_more_info')}
                            >
                              Request More Information
                            </Button>
                            <Button 
                              variant="destructive"
                              className="w-full"
                              onClick={() => handleProjectAction(selectedProject.id, 'reject')}
                            >
                              <AlertTriangle className="w-4 h-4 mr-2" />
                              Reject Project
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <FileCheck className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>Select a project to view details and verification options</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Market Overview Tab */}
          <TabsContent value="market">
            <RealTimeData />
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle>Platform Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-primary/10 rounded-lg">
                      <div className="text-3xl font-bold text-primary carbon-counter mb-2">
                        47
                      </div>
                      <div className="text-primary font-medium">
                        Total Verified Projects
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-success/10 rounded-lg">
                        <div className="text-xl font-bold text-success carbon-counter">
                          152,400
                        </div>
                        <div className="text-xs text-success">Credits Issued</div>
                      </div>
                      <div className="text-center p-4 bg-warning/10 rounded-lg">
                        <div className="text-xl font-bold text-warning carbon-counter">
                          12
                        </div>
                        <div className="text-xs text-warning">Pending Review</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle>User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-primary" />
                        <span>Companies</span>
                      </div>
                      <Badge>284 Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-success" />
                        <span>NGOs & Communities</span>
                      </div>
                      <Badge>128 Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Platform Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Verification Settings</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <span>Auto-approve verified submitters</span>
                        <Badge variant="outline">Disabled</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <span>Minimum MRV data requirements</span>
                        <Badge>Strict</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">System Status</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          <span className="font-medium">Blockchain Network</span>
                        </div>
                        <Badge className="bg-success text-success-foreground">Operational</Badge>
                      </div>
                      <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          <span className="font-medium">IPFS Storage</span>
                        </div>
                        <Badge className="bg-success text-success-foreground">Operational</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;