import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Leaf, 
  Factory, 
  Trees, 
  Waves, 
  BarChart3,
  ZoomIn,
  Filter
} from "lucide-react";
import indiaMapImage from "@/assets/india-carbon-map.jpg";

interface CarbonProject {
  id: string;
  name: string;
  type: 'mangrove' | 'forest' | 'seagrass' | 'industrial';
  location: { x: number; y: number };
  credits: number;
  status: 'active' | 'verified' | 'pending';
  co2Absorbed: number;
}

const mockProjects: CarbonProject[] = [
  {
    id: '1',
    name: 'Sundarbans Mangrove Restoration',
    type: 'mangrove',
    location: { x: 88, y: 35 },
    credits: 15420,
    status: 'verified',
    co2Absorbed: 15420
  },
  {
    id: '2', 
    name: 'Kerala Coastal Seagrass Project',
    type: 'seagrass',
    location: { x: 35, y: 70 },
    credits: 8930,
    status: 'active',
    co2Absorbed: 8930
  },
  {
    id: '3',
    name: 'Gujarat Mangrove Initiative',
    type: 'mangrove', 
    location: { x: 25, y: 45 },
    credits: 12100,
    status: 'verified',
    co2Absorbed: 12100
  },
  {
    id: '4',
    name: 'Tamil Nadu Blue Carbon Hub',
    type: 'seagrass',
    location: { x: 45, y: 80 },
    credits: 6750,
    status: 'active',
    co2Absorbed: 6750
  },
  {
    id: '5',
    name: 'Odisha Coastal Forest',
    type: 'forest',
    location: { x: 75, y: 50 },
    credits: 9840,
    status: 'pending',
    co2Absorbed: 9840
  }
];

const CarbonMap = () => {
  const [selectedProject, setSelectedProject] = useState<CarbonProject | null>(null);
  const [filter, setFilter] = useState<'all' | 'mangrove' | 'seagrass' | 'forest'>('all');

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'mangrove': return <Trees className="w-4 h-4" />;
      case 'seagrass': return <Waves className="w-4 h-4" />;
      case 'forest': return <Leaf className="w-4 h-4" />;
      case 'industrial': return <Factory className="w-4 h-4" />;
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
    ? mockProjects 
    : mockProjects.filter(p => p.type === filter);

  const totalCredits = mockProjects.reduce((sum, project) => sum + project.credits, 0);
  const totalCO2 = mockProjects.reduce((sum, project) => sum + project.co2Absorbed, 0);

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
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-2xl font-bold text-primary carbon-counter">
                {totalCredits.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Credits Generated</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-2xl font-bold text-success carbon-counter">
                {totalCO2.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Sequestered</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-2xl font-bold text-accent carbon-counter">
                {mockProjects.length}
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
                <div className="relative aspect-[4/3] bg-gradient-to-br from-background to-muted">
                  {/* India Map Background with enhanced design */}
                  <div className="absolute inset-0">
                    <img 
                      src={indiaMapImage}
                      alt="India Carbon Map"
                      className="w-full h-full object-cover opacity-90"
                      style={{
                        filter: 'brightness(1.1) contrast(1.2) saturate(1.3)',
                        mixBlendMode: 'luminosity'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background/20"></div>
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40"></div>
                  </div>
                  
                  {/* Filter Controls */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Button
                      size="sm"
                      variant={filter === 'all' ? 'default' : 'outline'}
                      onClick={() => setFilter('all')}
                      className="bg-card/80 backdrop-blur-sm"
                    >
                      All
                    </Button>
                    <Button
                      size="sm"
                      variant={filter === 'mangrove' ? 'default' : 'outline'}
                      onClick={() => setFilter('mangrove')}
                      className="bg-card/80 backdrop-blur-sm"
                    >
                      <Trees className="w-4 h-4 mr-1" />
                      Mangroves
                    </Button>
                    <Button
                      size="sm"
                      variant={filter === 'seagrass' ? 'default' : 'outline'}
                      onClick={() => setFilter('seagrass')}
                      className="bg-card/80 backdrop-blur-sm"
                    >
                      <Waves className="w-4 h-4 mr-1" />
                      Seagrass
                    </Button>
                  </div>

                  {/* Project Markers */}
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group animate-bounce-subtle`}
                      style={{ 
                        left: `${project.location.x}%`, 
                        top: `${project.location.y}%` 
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className={`w-4 h-4 rounded-full ${getStatusColor(project.status)} shadow-lg group-hover:scale-125 transition-transform duration-200`}>
                        <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-current"></div>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                        <div className="bg-popover border border-border/20 rounded-lg p-3 shadow-lg backdrop-blur-sm whitespace-nowrap">
                          <div className="font-semibold text-sm">{project.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {project.credits.toLocaleString()} credits
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border/20">
                    <h4 className="font-semibold text-sm mb-2">Project Status</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-success"></div>
                        <span>Verified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span>Active</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-warning"></div>
                        <span>Pending</span>
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
                      <h4 className="font-semibold text-primary">{selectedProject.name}</h4>
                      <p className="text-sm text-muted-foreground capitalize">
                        {selectedProject.type} restoration project
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-lg font-bold carbon-counter">
                          {selectedProject.credits.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">Carbon Credits</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold carbon-counter">
                          {selectedProject.co2Absorbed.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">Tons CO₂</div>
                      </div>
                    </div>
                    
                    <Badge 
                      className={`${getStatusColor(selectedProject.status)} text-white capitalize`}
                    >
                      {selectedProject.status}
                    </Badge>

                    <Button className="w-full bg-gradient-primary vayu-glow" size="sm">
                      <ZoomIn className="w-4 h-4 mr-2" />
                      View Project Details
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Click on a project marker to view details</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Mission Progress */}
            <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Mission Progress</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Net Zero 2030</span>
                      <span className="text-sm text-mission-net-zero">24%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-mission-net-zero h-2 rounded-full w-[24%] transition-all duration-1000"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Mission 2070</span>
                      <span className="text-sm text-mission-2070">12%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-mission-2070 h-2 rounded-full w-[12%] transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-center">
                    <strong className="text-primary">
                      {totalCO2.toLocaleString()} tons CO₂
                    </strong> sequestered through VAYU DAO platform
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

export default CarbonMap;