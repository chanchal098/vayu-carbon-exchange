import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Upload, 
  FileText, 
  Coins,
  MapPin,
  Camera,
  Leaf,
  Award,
  BarChart3,
  Plus,
  CheckCircle2,
  Clock,
  TreePine
} from "lucide-react";
import Navigation from "@/components/Navigation";
import WalletConnect from "@/components/WalletConnect";

interface ProjectSubmission {
  projectName: string;
  projectType: 'mangrove' | 'seagrass' | 'forest';
  location: string;
  area: number;
  species: string;
  description: string;
  estimatedSequestration: number;
}

interface CommunityProject {
  id: string;
  name: string;
  type: 'mangrove' | 'seagrass' | 'forest';
  location: string;
  submissionDate: string;
  status: 'pending' | 'under_review' | 'verified' | 'generating_credits';
  estimatedCredits: number;
  generatedCredits: number;
  revenue: number;
}

const mockProjects: CommunityProject[] = [
  {
    id: 'NGO001',
    name: 'Coastal Village Mangrove Restoration',
    type: 'mangrove',
    location: 'Sundarbans, West Bengal',
    submissionDate: '2024-08-15',
    status: 'generating_credits',
    estimatedCredits: 8500,
    generatedCredits: 6200,
    revenue: 94300
  },
  {
    id: 'NGO002',
    name: 'Community Seagrass Conservation',
    type: 'seagrass',
    location: 'Palk Bay, Tamil Nadu',
    submissionDate: '2024-09-10',
    status: 'verified',
    estimatedCredits: 4200,
    generatedCredits: 0,
    revenue: 0
  },
  {
    id: 'NGO003',
    name: 'Panchayat Forest Initiative',
    type: 'forest',
    location: 'Kozhikode, Kerala',
    submissionDate: '2024-09-18',
    status: 'under_review',
    estimatedCredits: 6800,
    generatedCredits: 0,
    revenue: 0
  }
];

const NGODashboard = () => {
  const [projectForm, setProjectForm] = useState<ProjectSubmission>({
    projectName: '',
    projectType: 'mangrove',
    location: '',
    area: 0,
    species: '',
    description: '',
    estimatedSequestration: 0
  });

  const handleInputChange = (field: keyof ProjectSubmission, value: any) => {
    setProjectForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitProject = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would submit to API
    console.log('Submitting project:', projectForm);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'generating_credits':
        return <Badge className="bg-success text-success-foreground">Generating Credits</Badge>;
      case 'verified':
        return <Badge className="bg-primary text-primary-foreground">Verified</Badge>;
      case 'under_review':
        return <Badge className="bg-warning text-warning-foreground">Under Review</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'mangrove': return <TreePine className="w-4 h-4" />;
      case 'seagrass': return <Leaf className="w-4 h-4" />;
      case 'forest': return <TreePine className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const totalCredits = mockProjects.reduce((sum, project) => sum + project.generatedCredits, 0);
  const totalRevenue = mockProjects.reduce((sum, project) => sum + project.revenue, 0);
  const activeProjects = mockProjects.filter(p => p.status === 'generating_credits').length;

  const communityStats = [
    {
      title: "Total Credits Generated",
      value: totalCredits.toLocaleString(),
      icon: <Coins className="w-6 h-6" />,
      color: "text-primary",
      change: "+450 this month"
    },
    {
      title: "Community Revenue",
      value: `₹${(totalRevenue / 1000).toFixed(0)}K`,
      icon: <Award className="w-6 h-6" />,
      color: "text-success",
      change: "+₹12K this month"
    },
    {
      title: "Active Projects", 
      value: activeProjects.toString(),
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-accent",
      change: "2 generating credits"
    },
    {
      title: "Environmental Impact",
      value: `${totalCredits} tCO₂e`,
      icon: <Leaf className="w-6 h-6" />,
      color: "text-warning",
      change: "Sequestered to date"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="ngo" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Community & NGO Portal</h1>
          </div>
          <p className="text-muted-foreground">
            Upload restoration projects, generate carbon credits, and empower your community
          </p>
        </div>

        {/* Wallet Connection */}
        <div className="mb-8">
          <WalletConnect />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {communityStats.map((stat, index) => (
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
            <TabsTrigger value="projects">My Projects</TabsTrigger>
            <TabsTrigger value="upload">Upload Project</TabsTrigger>
            <TabsTrigger value="credits">Credits & Revenue</TabsTrigger>
            <TabsTrigger value="community">Community Impact</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Community Restoration Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProjects.map((project) => (
                    <Card key={project.id} className="border-border/20 hover:shadow-glow-accent transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {getProjectIcon(project.type)}
                              <h3 className="font-semibold text-lg">{project.name}</h3>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{project.location}</span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                              <div className="text-center p-3 bg-primary/10 rounded-lg">
                                <div className="text-lg font-bold text-primary carbon-counter">
                                  {project.estimatedCredits.toLocaleString()}
                                </div>
                                <div className="text-xs text-primary">Estimated Credits</div>
                              </div>
                              
                              <div className="text-center p-3 bg-success/10 rounded-lg">
                                <div className="text-lg font-bold text-success carbon-counter">
                                  {project.generatedCredits.toLocaleString()}
                                </div>
                                <div className="text-xs text-success">Generated Credits</div>
                              </div>
                              
                              <div className="text-center p-3 bg-warning/10 rounded-lg">
                                <div className="text-lg font-bold text-warning carbon-counter">
                                  ₹{project.revenue.toLocaleString()}
                                </div>
                                <div className="text-xs text-warning">Revenue Earned</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-3">
                            {getStatusBadge(project.status)}
                            <span className="text-xs text-muted-foreground">
                              Submitted: {project.submissionDate}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              ID: {project.id}
                            </span>
                          </div>
                        </div>

                        {project.status === 'generating_credits' && (
                          <div className="mt-4 pt-4 border-t border-border/20">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Credit Generation Progress</span>
                              <span className="text-sm text-success">
                                {((project.generatedCredits / project.estimatedCredits) * 100).toFixed(0)}%
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-success h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${(project.generatedCredits / project.estimatedCredits) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upload Project Tab */}
          <TabsContent value="upload">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Submit New Restoration Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitProject} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectName">Project Name *</Label>
                      <Input
                        id="projectName"
                        value={projectForm.projectName}
                        onChange={(e) => handleInputChange('projectName', e.target.value)}
                        placeholder="Enter project name"
                        className="bg-background/50 border-border/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={projectForm.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="City, State"
                        className="bg-background/50 border-border/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <select
                        id="projectType"
                        value={projectForm.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value as any)}
                        className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md focus:border-primary"
                        required
                      >
                        <option value="mangrove">Mangrove Restoration</option>
                        <option value="seagrass">Seagrass Conservation</option>
                        <option value="forest">Coastal Forest</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="area">Area (hectares) *</Label>
                      <Input
                        id="area"
                        type="number"
                        value={projectForm.area}
                        onChange={(e) => handleInputChange('area', Number(e.target.value))}
                        placeholder="0"
                        className="bg-background/50 border-border/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="species">Primary Species</Label>
                      <Input
                        id="species"
                        value={projectForm.species}
                        onChange={(e) => handleInputChange('species', e.target.value)}
                        placeholder="e.g., Rhizophora mucronata"
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      value={projectForm.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe your restoration project, methodology, and expected outcomes..."
                      className="bg-background/50 border-border/50 min-h-[120px]"
                      required
                    />
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-4">
                    <Label>Supporting Documentation</Label>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="border-dashed border-2 border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <Camera className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm font-medium">Site Photos</p>
                          <p className="text-xs text-muted-foreground">Before/After images</p>
                        </CardContent>
                      </Card>

                      <Card className="border-dashed border-2 border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <MapPin className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm font-medium">GPS Data</p>
                          <p className="text-xs text-muted-foreground">Location coordinates</p>
                        </CardContent>
                      </Card>

                      <Card className="border-dashed border-2 border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <FileText className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm font-medium">MRV Reports</p>
                          <p className="text-xs text-muted-foreground">Scientific data</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Estimated Impact */}
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary mb-2">Estimated Carbon Impact</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary carbon-counter">
                            {projectForm.area ? (projectForm.area * 140).toLocaleString() : '0'}
                          </div>
                          <div className="text-xs text-primary">Estimated Credits</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary carbon-counter">
                            {projectForm.area ? (projectForm.area * 140).toLocaleString() : '0'}
                          </div>
                          <div className="text-xs text-primary">tons CO₂e Sequestered</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary carbon-counter">
                            ₹{projectForm.area ? (projectForm.area * 140 * 15).toLocaleString() : '0'}
                          </div>
                          <div className="text-xs text-primary">Potential Revenue</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 vayu-glow h-12"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Submit Project for Verification
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Credits & Revenue Tab */}
          <TabsContent value="credits">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    Generated Carbon Credits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-success/10 rounded-lg">
                      <div className="text-4xl font-bold text-success carbon-counter mb-2">
                        {totalCredits.toLocaleString()}
                      </div>
                      <div className="text-success font-medium">
                        Total Credits Generated
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Equivalent to {totalCredits.toLocaleString()} tons CO₂e sequestered
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {mockProjects.map((project) => (
                        <div key={project.id} className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                          <span className="text-sm">{project.name}</span>
                          <div className="text-right">
                            <div className="font-semibold carbon-counter">
                              {project.generatedCredits.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground">credits</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Community Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-warning/10 rounded-lg">
                      <div className="text-4xl font-bold text-warning carbon-counter mb-2">
                        ₹{totalRevenue.toLocaleString()}
                      </div>
                      <div className="text-warning font-medium">
                        Total Revenue Earned
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        From carbon credit sales and ecosystem services
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Revenue Breakdown:</h4>
                      {mockProjects.filter(p => p.revenue > 0).map((project) => (
                        <div key={project.id} className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                          <span className="text-sm">{project.name}</span>
                          <div className="text-right">
                            <div className="font-semibold text-success carbon-counter">
                              ₹{project.revenue.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground">earned</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-primary vayu-glow">
                      <Award className="w-4 h-4 mr-2" />
                      View Payment History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Community Impact Tab */}
          <TabsContent value="community">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Environmental Impact Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center p-4 bg-success/10 rounded-lg">
                        <Leaf className="w-8 h-8 mx-auto mb-2 text-success" />
                        <div className="text-2xl font-bold text-success carbon-counter">
                          {totalCredits.toLocaleString()}
                        </div>
                        <div className="text-sm text-success">tons CO₂ Sequestered</div>
                      </div>
                      
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <TreePine className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-primary carbon-counter">
                          {mockProjects.length}
                        </div>
                        <div className="text-sm text-primary">Active Projects</div>
                      </div>
                      
                      <div className="text-center p-4 bg-accent/10 rounded-lg">
                        <Users className="w-8 h-8 mx-auto mb-2 text-accent" />
                        <div className="text-2xl font-bold text-accent carbon-counter">
                          485
                        </div>
                        <div className="text-sm text-accent">Community Members</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Recent Achievements:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-success/10 border border-success/20 rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-success" />
                          <span className="text-sm">First 1,000 carbon credits generated</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                          <Award className="w-5 h-5 text-primary" />
                          <span className="text-sm">NCCR verification received for coastal project</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-warning/10 border border-warning/20 rounded-lg">
                          <Clock className="w-5 h-5 text-warning" />
                          <span className="text-sm">New mangrove project under review</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Mission Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Net Zero 2030 Contribution</span>
                          <span className="text-sm text-mission-net-zero">0.02%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-mission-net-zero h-2 rounded-full w-[0.02%] transition-all duration-1000"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Mission 2070 Contribution</span>
                          <span className="text-sm text-mission-2070">0.01%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-mission-2070 h-2 rounded-full w-[0.01%] transition-all duration-1000"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm text-center">
                        <strong className="text-primary">
                          {totalCredits.toLocaleString()} tons CO₂
                        </strong> contributed to India's climate goals
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/20">
                  <CardHeader>
                    <CardTitle>Community Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Jobs Created:</span>
                        <span className="font-semibold">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Families Benefited:</span>
                        <span className="font-semibold">158</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Area Restored:</span>
                        <span className="font-semibold">85.5 hectares</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Biodiversity Protected:</span>
                        <span className="font-semibold">12 species</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NGODashboard;