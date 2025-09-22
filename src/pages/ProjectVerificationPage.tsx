import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  FileText,
  MapPin,
  Camera,
  Download,
  Eye,
  MessageSquare,
  ArrowLeft,
  Calendar,
  User,
  Building2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface ProjectDocument {
  id: string;
  type: 'site_photo' | 'gps_data' | 'mrv_report' | 'compliance_cert';
  name: string;
  uploadDate: string;
  verified: boolean;
  fileSize: string;
  url: string;
}

interface VerificationProject {
  id: string;
  name: string;
  submitter: string;
  submitterType: 'NGO' | 'Community' | 'Government';
  type: 'mangrove' | 'seagrass' | 'forest';
  location: string;
  area: number;
  species: string;
  description: string;
  submissionDate: string;
  status: 'pending' | 'under_review' | 'verified' | 'rejected';
  estimatedCredits: number;
  mrvData: {
    sequestrationRate: number;
    biomassData: string;
    soilCarbon: number;
    waterQuality: string;
  };
  documents: ProjectDocument[];
  reviewNotes: string[];
  verificationHistory: {
    date: string;
    action: string;
    reviewer: string;
    notes: string;
  }[];
}

const mockProject: VerificationProject = {
  id: 'PRJ001',
  name: 'Sundarbans Mangrove Expansion Phase 2',
  submitter: 'West Bengal Forest Department',
  submitterType: 'Government',
  type: 'mangrove',
  location: 'Sundarbans, West Bengal (22.2587° N, 88.9414° E)',
  area: 85.5,
  species: 'Rhizophora mucronata, Avicennia marina, Ceriops decandra',
  description: 'Comprehensive mangrove restoration project covering 85.5 hectares in the Sundarbans delta. This project focuses on restoring degraded mangrove areas through scientifically planned plantation of native species. The project includes community involvement, regular monitoring through satellite imagery and field surveys, and establishment of long-term carbon sequestration monitoring systems.',
  submissionDate: '2024-09-22',
  status: 'under_review',
  estimatedCredits: 12500,
  mrvData: {
    sequestrationRate: 146.2,
    biomassData: 'Above-ground: 45.2 tC/ha, Below-ground: 32.8 tC/ha',
    soilCarbon: 78.4,
    waterQuality: 'pH: 7.8, Salinity: 15-25 ppt, DO: 6.2 mg/L'
  },
  documents: [
    {
      id: 'DOC001',
      type: 'site_photo',
      name: 'Pre-restoration_site_photos.zip',
      uploadDate: '2024-09-22',
      verified: true,
      fileSize: '45.2 MB',
      url: '/docs/site_photos.zip'
    },
    {
      id: 'DOC002',
      type: 'gps_data',
      name: 'GPS_coordinates_boundaries.kml',
      uploadDate: '2024-09-22',
      verified: true,
      fileSize: '2.8 MB',
      url: '/docs/gps_data.kml'
    },
    {
      id: 'DOC003',
      type: 'mrv_report',
      name: 'MRV_methodology_report.pdf',
      uploadDate: '2024-09-22',
      verified: false,
      fileSize: '12.4 MB',
      url: '/docs/mrv_report.pdf'
    },
    {
      id: 'DOC004',
      type: 'compliance_cert',
      name: 'Environmental_clearance.pdf',
      uploadDate: '2024-09-20',
      verified: true,
      fileSize: '3.1 MB',
      url: '/docs/clearance.pdf'
    }
  ],
  reviewNotes: [
    'Initial documentation review completed - all required files present',
    'GPS coordinates verified against satellite imagery',
    'Requesting additional soil carbon measurements for validation'
  ],
  verificationHistory: [
    {
      date: '2024-09-22',
      action: 'Project Submitted',
      reviewer: 'System',
      notes: 'Project submitted for NCCR verification'
    },
    {
      date: '2024-09-23',
      action: 'Initial Review Started',
      reviewer: 'Dr. Rajesh Kumar',
      notes: 'Assigned to marine ecosystem specialist for preliminary assessment'
    },
    {
      date: '2024-09-24',
      action: 'Documentation Reviewed',
      reviewer: 'Dr. Rajesh Kumar',
      notes: 'All mandatory documents present. Site photos and GPS data verified.'
    }
  ]
};

const ProjectVerificationPage = () => {
  const navigate = useNavigate();
  const [project] = useState<VerificationProject>(mockProject);
  const [reviewNote, setReviewNote] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<ProjectDocument | null>(null);

  const handleApprove = () => {
    console.log('Approving project:', project.id);
    // Add approval logic
  };

  const handleReject = () => {
    console.log('Rejecting project:', project.id);
    // Add rejection logic
  };

  const handleRequestMoreInfo = () => {
    console.log('Requesting more info for project:', project.id);
    // Add request more info logic
  };

  const addReviewNote = () => {
    if (reviewNote.trim()) {
      console.log('Adding review note:', reviewNote);
      setReviewNote('');
    }
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'site_photo': return <Camera className="w-5 h-5" />;
      case 'gps_data': return <MapPin className="w-5 h-5" />;
      case 'mrv_report': return <FileText className="w-5 h-5" />;
      case 'compliance_cert': return <FileCheck className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getSubmitterIcon = (type: string) => {
    switch (type) {
      case 'Government': return <Building2 className="w-4 h-4" />;
      case 'NGO': return <User className="w-4 h-4" />;
      case 'Community': return <User className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="admin" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate('/admin')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Admin Dashboard
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <FileCheck className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Project Verification</h1>
          </div>
          <p className="text-muted-foreground">
            Comprehensive review and verification of carbon credit projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Overview */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.name}</span>
                  <Badge className="bg-warning text-warning-foreground">
                    Under Review
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">SUBMITTER DETAILS</h4>
                    <div className="flex items-center gap-2 mb-1">
                      {getSubmitterIcon(project.submitterType)}
                      <span className="font-medium">{project.submitter}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.submitterType}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">PROJECT TYPE</h4>
                    <Badge className="bg-primary text-primary-foreground capitalize">
                      {project.type} Restoration
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">PROJECT DESCRIPTION</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Location</h4>
                    <p className="text-sm">{project.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Area</h4>
                    <p className="text-sm">{project.area} hectares</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Estimated Credits</h4>
                    <p className="text-sm font-bold text-primary">
                      {project.estimatedCredits.toLocaleString()} tCO₂e
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Species Information</h4>
                  <p className="text-sm italic">{project.species}</p>
                </div>
              </CardContent>
            </Card>

            {/* MRV Data */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>MRV (Monitoring, Reporting, Verification) Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Carbon Sequestration</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sequestration Rate:</span>
                        <span className="font-medium">{project.mrvData.sequestrationRate} tCO₂e/ha/yr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Soil Carbon:</span>
                        <span className="font-medium">{project.mrvData.soilCarbon} tC/ha</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Biomass Data</h4>
                    <p className="text-sm text-muted-foreground">{project.mrvData.biomassData}</p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Water Quality</h4>
                    <p className="text-sm text-muted-foreground">{project.mrvData.waterQuality}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supporting Documents */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Supporting Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 border border-border/20 rounded-lg hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-primary">
                          {getDocumentIcon(doc.type)}
                        </div>
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {doc.fileSize} • Uploaded {doc.uploadDate}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge 
                          className={doc.verified 
                            ? "bg-success text-success-foreground" 
                            : "bg-warning text-warning-foreground"
                          }
                        >
                          {doc.verified ? 'Verified' : 'Pending'}
                        </Badge>
                        
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Verification History */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Verification History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.verificationHistory.map((entry, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border-l-2 border-primary/20">
                      <Calendar className="w-4 h-4 text-primary mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{entry.action}</span>
                          <span className="text-xs text-muted-foreground">by {entry.reviewer}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{entry.notes}</p>
                        <span className="text-xs text-muted-foreground">{entry.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
              <CardHeader>
                <CardTitle>Verification Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-success hover:bg-success/90"
                  onClick={handleApprove}
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Approve & Issue Credits
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={handleRequestMoreInfo}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request Additional Info
                </Button>
                
                <Button 
                  variant="destructive"
                  className="w-full"
                  onClick={handleReject}
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Reject Application
                </Button>
              </CardContent>
            </Card>

            {/* Add Review Note */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Add Review Note</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter your review comments..."
                  value={reviewNote}
                  onChange={(e) => setReviewNote(e.target.value)}
                  className="bg-background/50 border-border/50 min-h-[100px]"
                />
                
                <Button 
                  onClick={addReviewNote}
                  disabled={!reviewNote.trim()}
                  className="w-full"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Add Note
                </Button>
              </CardContent>
            </Card>

            {/* Project Summary */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Project Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary carbon-counter">
                    {project.estimatedCredits.toLocaleString()}
                  </div>
                  <div className="text-sm text-primary">Estimated Credits</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-success/10 rounded-lg">
                    <div className="text-lg font-bold text-success">
                      {project.area}
                    </div>
                    <div className="text-xs text-success">Hectares</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="text-lg font-bold text-accent">
                      {project.mrvData.sequestrationRate}
                    </div>
                    <div className="text-xs text-accent">tCO₂e/ha/yr</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Documents Verified</span>
                    <span className="text-sm font-medium">
                      {project.documents.filter(d => d.verified).length}/{project.documents.length}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-success h-2 rounded-full transition-all"
                      style={{ 
                        width: `${(project.documents.filter(d => d.verified).length / project.documents.length) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVerificationPage;