import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Leaf, 
  Trees, 
  Waves, 
  BarChart3,
  ZoomIn,
  Building2,
  Users,
  Calendar,
  CheckCircle2,
  TrendingUp,
  FileText
} from "lucide-react";

interface CarbonProject {
  id: string;
  name: string;
  type: 'mangrove' | 'forest' | 'seagrass';
  location: { x: number; y: number };
  state: string;
  credits: number;
  status: 'active' | 'verified' | 'pending';
  co2Absorbed: number;
  developer: string;
  area: number;
  species: string;
  startDate: string;
  methodology: string;
  verificationStandard: string;
  estimatedAnnualSequestration: number;
  community: string;
}

const projectsData: CarbonProject[] = [
  {
    id: 'PRJ001',
    name: 'Sundarbans Mangrove Restoration',
    type: 'mangrove',
    location: { x: 88, y: 35 },
    state: 'West Bengal',
    credits: 15420,
    status: 'verified',
    co2Absorbed: 15420,
    developer: 'West Bengal Forest Department',
    area: 250,
    species: 'Rhizophora mucronata, Avicennia marina',
    startDate: '2023-01-15',
    methodology: 'VM0033 Tidal Wetland and Seagrass Restoration',
    verificationStandard: 'Verra VCS',
    estimatedAnnualSequestration: 12500,
    community: '12 coastal villages, 5000+ beneficiaries'
  },
  {
    id: 'PRJ002', 
    name: 'Kerala Coastal Seagrass Project',
    type: 'seagrass',
    location: { x: 35, y: 70 },
    state: 'Kerala',
    credits: 8930,
    status: 'active',
    co2Absorbed: 8930,
    developer: 'Marine Conservation NGO Kerala',
    area: 180,
    species: 'Thalassia hemprichii, Cymodocea serrulata',
    startDate: '2023-06-20',
    methodology: 'VM0033 Tidal Wetland and Seagrass Restoration',
    verificationStandard: 'Gold Standard',
    estimatedAnnualSequestration: 8900,
    community: '8 fishing communities, 3200+ beneficiaries'
  },
  {
    id: 'PRJ003',
    name: 'Gujarat Mangrove Initiative',
    type: 'mangrove', 
    location: { x: 25, y: 45 },
    state: 'Gujarat',
    credits: 12100,
    status: 'verified',
    co2Absorbed: 12100,
    developer: 'Gujarat Coastal Development Authority',
    area: 320,
    species: 'Avicennia marina, Rhizophora mucronata',
    startDate: '2022-09-10',
    methodology: 'VM0033 Tidal Wetland and Seagrass Restoration',
    verificationStandard: 'Verra VCS + CCB',
    estimatedAnnualSequestration: 15600,
    community: '15 coastal panchayats, 7500+ beneficiaries'
  },
  {
    id: 'PRJ004',
    name: 'Tamil Nadu Blue Carbon Hub',
    type: 'seagrass',
    location: { x: 45, y: 80 },
    state: 'Tamil Nadu',
    credits: 6750,
    status: 'active',
    co2Absorbed: 6750,
    developer: 'Tamil Nadu Marine Conservation Society',
    area: 142,
    species: 'Enhalus acoroides, Halophila ovalis',
    startDate: '2023-03-25',
    methodology: 'VM0033 Tidal Wetland and Seagrass Restoration',
    verificationStandard: 'Gold Standard',
    estimatedAnnualSequestration: 6800,
    community: '6 coastal communities, 2800+ beneficiaries'
  },
  {
    id: 'PRJ005',
    name: 'Odisha Coastal Forest',
    type: 'forest',
    location: { x: 75, y: 50 },
    state: 'Odisha',
    credits: 9840,
    status: 'pending',
    co2Absorbed: 9840,
    developer: 'Odisha Forest Department',
    area: 195,
    species: 'Casuarina equisetifolia, Pandanus fascicularis',
    startDate: '2023-11-08',
    methodology: 'AR-ACM0003 Afforestation and Reforestation',
    verificationStandard: 'Verra VCS',
    estimatedAnnualSequestration: 9840,
    community: '10 coastal villages, 4500+ beneficiaries'
  },
  {
    id: 'PRJ006',
    name: 'Maharashtra Mangrove Conservation',
    type: 'mangrove',
    location: { x: 30, y: 55 },
    state: 'Maharashtra',
    credits: 7200,
    status: 'active',
    co2Absorbed: 7200,
    developer: 'Mumbai Mangrove Conservation Society',
    area: 165,
    species: 'Sonneratia alba, Bruguiera gymnorrhiza',
    startDate: '2023-07-15',
    methodology: 'VM0033 Tidal Wetland and Seagrass Restoration',
    verificationStandard: 'Verra VCS',
    estimatedAnnualSequestration: 7400,
    community: '5 urban coastal areas, 6000+ beneficiaries'
  },
  {
    id: 'PRJ007',
    name: 'Andhra Pradesh Coastal Restoration',
    type: 'mangrove',
    location: { x: 65, y: 65 },
    state: 'Andhra Pradesh',
    credits: 10500,
    status: 'verified',
    co2Absorbed: 10500,
    developer: 'AP Coastal Zone Management Authority',
    area: 228,
    species: 'Avicennia officinalis, Rhizophora apiculata',
    startDate: '2022-12-01',
    methodology: 'VM0033 Tidal Wetland and Seagrass Restoration',
    verificationStandard: 'Gold Standard + CCB',
    estimatedAnnualSequestration: 10800,
    community: '14 fishing villages, 5600+ beneficiaries'
  }
];

const EnhancedCarbonMap = () => {
  const [selectedProject, setSelectedProject] = useState<CarbonProject | null>(null);
  const [filter, setFilter] = useState<'all' | 'mangrove' | 'seagrass' | 'forest'>('all');

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'mangrove': return <Trees className="w-4 h-4" />;
      case 'seagrass': return <Waves className="w-4 h-4" />;
      case 'forest': return <Leaf className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-success';
      case 'active': return 'bg-primary';
      case 'pending': return 'bg-warning';
      default: return 'bg-muted';
    }
  };

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.type === filter);

  const totalCredits = projectsData.reduce((sum, project) => sum + project.credits, 0);
  const totalCO2 = projectsData.reduce((sum, project) => sum + project.co2Absorbed, 0);

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden" id="carbon-map">
      <div className="absolute inset-0 carbon-particle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Indian Carbon Activity Map
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Real-time visualization of India's blue carbon ecosystem restoration projects, 
            carbon credit generation, and environmental impact across coastal regions.
          </p>
          
          {/* Stats Overview */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20 hover:shadow-glow-accent transition-all">
              <div className="text-2xl font-bold text-primary carbon-counter">
                {totalCredits.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Credits Generated</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20 hover:shadow-glow-accent transition-all">
              <div className="text-2xl font-bold text-success carbon-counter">
                {totalCO2.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Sequestered</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20 hover:shadow-glow-accent transition-all">
              <div className="text-2xl font-bold text-accent carbon-counter">
                {projectsData.length}
              </div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/20 overflow-hidden shadow-card-vayu">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 via-background to-accent/5">
                  {/* Enhanced Map Background */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 1000 750" className="w-full h-full">
                      {/* India outline (simplified) */}
                      <path 
                        d="M 200 200 L 250 150 L 350 120 L 450 150 L 550 180 L 600 220 L 650 280 L 700 350 L 720 420 L 710 500 L 680 580 L 620 640 L 550 680 L 480 700 L 400 700 L 320 680 L 250 640 L 200 580 L 180 500 L 180 420 L 190 350 L 200 280 L 200 200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary/30"
                      />
                      <path 
                        d="M 200 200 L 250 150 L 350 120 L 450 150 L 550 180 L 600 220 L 650 280 L 700 350 L 720 420 L 710 500 L 680 580 L 620 640 L 550 680 L 480 700 L 400 700 L 320 680 L 250 640 L 200 580 L 180 500 L 180 420 L 190 350 L 200 280 L 200 200"
                        fill="url(#mapGradient)"
                        opacity="0.1"
                      />
                      <defs>
                        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: 'var(--primary)', stopOpacity: 0.3}} />
                          <stop offset="100%" style={{stopColor: 'var(--accent)', stopOpacity: 0.1}} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background/10"></div>
                  </div>
                  
                  {/* Filter Controls */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                    <Button
                      size="sm"
                      variant={filter === 'all' ? 'default' : 'outline'}
                      onClick={() => setFilter('all')}
                      className="bg-card/90 backdrop-blur-sm hover:shadow-glow-primary"
                    >
                      All Projects
                    </Button>
                    <Button
                      size="sm"
                      variant={filter === 'mangrove' ? 'default' : 'outline'}
                      onClick={() => setFilter('mangrove')}
                      className="bg-card/90 backdrop-blur-sm hover:shadow-glow-success"
                    >
                      <Trees className="w-4 h-4 mr-1" />
                      Mangroves
                    </Button>
                    <Button
                      size="sm"
                      variant={filter === 'seagrass' ? 'default' : 'outline'}
                      onClick={() => setFilter('seagrass')}
                      className="bg-card/90 backdrop-blur-sm hover:shadow-glow-accent"
                    >
                      <Waves className="w-4 h-4 mr-1" />
                      Seagrass
                    </Button>
                    <Button
                      size="sm"
                      variant={filter === 'forest' ? 'default' : 'outline'}
                      onClick={() => setFilter('forest')}
                      className="bg-card/90 backdrop-blur-sm hover:shadow-glow-warning"
                    >
                      <Leaf className="w-4 h-4 mr-1" />
                      Forest
                    </Button>
                  </div>

                  {/* Project Markers */}
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10`}
                      style={{ 
                        left: `${project.location.x}%`, 
                        top: `${project.location.y}%` 
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className={`relative w-6 h-6 rounded-full ${getStatusColor(project.status)} shadow-lg group-hover:scale-150 transition-transform duration-200`}>
                        <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-current"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {getProjectIcon(project.type)}
                        </div>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 pointer-events-none">
                        <div className="bg-popover border border-border/20 rounded-lg p-3 shadow-xl backdrop-blur-sm whitespace-nowrap">
                          <div className="font-semibold text-sm">{project.name}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {project.state}
                          </div>
                          <div className="text-xs font-medium text-primary mt-1">
                            {project.credits.toLocaleString()} credits
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border/20 shadow-lg z-20">
                    <h4 className="font-semibold text-sm mb-3">Project Status</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-success"></div>
                        <span>Verified & Active</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span>Under Development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-warning"></div>
                        <span>Pending Verification</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Details Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Project Details
                </h3>
                
                {selectedProject ? (
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-primary">{selectedProject.name}</h4>
                        <Badge className={`${getStatusColor(selectedProject.status)} text-white capitalize`}>
                          {selectedProject.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        ID: {selectedProject.id}
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <Building2 className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Developer:</span>
                          <p className="font-medium">{selectedProject.developer}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Location:</span>
                          <p className="font-medium">{selectedProject.state}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Leaf className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Type:</span>
                          <p className="font-medium capitalize">{selectedProject.type} Restoration</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Start Date:</span>
                          <p className="font-medium">{new Date(selectedProject.startDate).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Community Impact:</span>
                          <p className="font-medium">{selectedProject.community}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/20">
                      <div className="text-center p-3 bg-primary/10 rounded-lg">
                        <div className="text-lg font-bold carbon-counter text-primary">
                          {selectedProject.area}
                        </div>
                        <div className="text-xs text-muted-foreground">Hectares</div>
                      </div>
                      <div className="text-center p-3 bg-success/10 rounded-lg">
                        <div className="text-lg font-bold carbon-counter text-success">
                          {selectedProject.credits.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">Credits</div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-border/20">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">CO₂ Absorbed:</span>
                        <span className="font-medium">{selectedProject.co2Absorbed.toLocaleString()} tons</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Annual Sequestration:</span>
                        <span className="font-medium">{selectedProject.estimatedAnnualSequestration.toLocaleString()} tCO₂e/yr</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Species:</span>
                        <span className="font-medium text-right max-w-[60%]">{selectedProject.species}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-border/20">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                        <div className="text-xs">
                          <span className="text-muted-foreground">Methodology:</span>
                          <p className="font-medium">{selectedProject.methodology}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                        <div className="text-xs">
                          <span className="text-muted-foreground">Standard:</span>
                          <p className="font-medium">{selectedProject.verificationStandard}</p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary vayu-glow" size="sm">
                      <ZoomIn className="w-4 h-4 mr-2" />
                      View Full Project Details
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="font-medium mb-1">Select a Project</p>
                    <p className="text-xs">Click on any project marker to view detailed information</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Mission Progress */}
            <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  National Progress
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Net Zero 2030</span>
                      <span className="text-sm font-bold text-mission-net-zero">24%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-mission-net-zero h-2.5 rounded-full w-[24%] transition-all duration-1000"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Mission 2070</span>
                      <span className="text-sm font-bold text-mission-2070">12%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-mission-2070 h-2.5 rounded-full w-[12%] transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-center">
                    <strong className="text-primary text-lg block mb-1">
                      {totalCO2.toLocaleString()} tons CO₂
                    </strong>
                    <span className="text-muted-foreground">
                      sequestered through VAYU DAO platform
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCarbonMap;
