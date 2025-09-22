import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Database,
  CheckCircle2,
  AlertTriangle,
  Search,
  Filter,
  ArrowLeft,
  Eye,
  Download,
  Calendar,
  MapPin,
  Coins,
  Building2,
  TrendingUp,
  Shield,
  FileCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface RegistryEntry {
  id: string;
  projectName: string;
  tokenId: string;
  issueDate: string;
  vintage: string;
  credits: number;
  status: 'active' | 'retired' | 'pending' | 'cancelled';
  verificationStandard: string;
  projectType: 'mangrove' | 'seagrass' | 'forest';
  location: string;
  issuer: string;
  serialNumber: string;
  blockchainTxHash: string;
  additionalCertifications: string[];
}

const mockRegistryEntries: RegistryEntry[] = [
  {
    id: 'REG001',
    projectName: 'Sundarbans Mangrove Restoration Phase 2',
    tokenId: 'VAYU-001-2024',
    issueDate: '2024-09-15',
    vintage: '2024',
    credits: 12500,
    status: 'active',
    verificationStandard: 'NCCR Verified',
    projectType: 'mangrove',
    location: 'Sundarbans, West Bengal',
    issuer: 'NCCR - National Centre for Coastal Research',
    serialNumber: 'IN-NCCR-MG-001-2024-12500',
    blockchainTxHash: '0x742d35cc6df4c9de4f35d9a0c4c5a1234567890abcdef123456789',
    additionalCertifications: ['Climate Bond Standard', 'UNFCCC CDM']
  },
  {
    id: 'REG002',
    projectName: 'Kerala Coastal Seagrass Conservation',
    tokenId: 'VAYU-002-2024',
    issueDate: '2024-08-28',
    vintage: '2024',
    credits: 8900,
    status: 'active',
    verificationStandard: 'Gold Standard',
    projectType: 'seagrass',
    location: 'Kochi, Kerala',
    issuer: 'NCCR - National Centre for Coastal Research',
    serialNumber: 'IN-NCCR-SG-002-2024-8900',
    blockchainTxHash: '0x847f23bd7ef8d2ac3f45g8b1d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1',
    additionalCertifications: ['Verra VCS', 'Plan Vivo']
  },
  {
    id: 'REG003',
    projectName: 'Gujarat Mangrove Initiative',
    tokenId: 'VAYU-003-2024',
    issueDate: '2024-07-12',
    vintage: '2024',
    credits: 15600,
    status: 'retired',
    verificationStandard: 'NCCR Verified',
    projectType: 'mangrove',
    location: 'Kutch, Gujarat',
    issuer: 'NCCR - National Centre for Coastal Research',
    serialNumber: 'IN-NCCR-MG-003-2024-15600',
    blockchainTxHash: '0x923e45cf8gh1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9a0b1c2d3',
    additionalCertifications: ['CAR Protocol', 'ACR Standard']
  },
  {
    id: 'REG004',
    projectName: 'Tamil Nadu Blue Carbon Hub',
    tokenId: 'VAYU-004-2024',
    issueDate: '2024-09-20',
    vintage: '2024',
    credits: 6750,
    status: 'pending',
    verificationStandard: 'Gold Standard',
    projectType: 'seagrass',
    location: 'Palk Bay, Tamil Nadu',
    issuer: 'NCCR - National Centre for Coastal Research',
    serialNumber: 'IN-NCCR-SG-004-2024-6750',
    blockchainTxHash: 'Pending blockchain confirmation',
    additionalCertifications: ['UNFCCC CDM']
  },
  {
    id: 'REG005',
    projectName: 'Odisha Coastal Forest Restoration',
    tokenId: 'VAYU-005-2024',
    issueDate: '2024-06-30',
    vintage: '2024',
    credits: 9840,
    status: 'active',
    verificationStandard: 'NCCR Verified',
    projectType: 'forest',
    location: 'Kendrapara, Odisha',
    issuer: 'NCCR - National Centre for Coastal Research',
    serialNumber: 'IN-NCCR-CF-005-2024-9840',
    blockchainTxHash: '0x456a78bc9de0f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z1a2',
    additionalCertifications: ['Climate Bond Standard', 'Verra VCS']
  }
];

const RegistryVerificationPage = () => {
  const navigate = useNavigate();
  const [entries] = useState<RegistryEntry[]>(mockRegistryEntries);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'retired' | 'pending'>('all');
  const [selectedEntry, setSelectedEntry] = useState<RegistryEntry | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case 'retired':
        return <Badge className="bg-muted text-muted-foreground">Retired</Badge>;
      case 'pending':
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getProjectTypeIcon = (type: string) => {
    switch (type) {
      case 'mangrove': return '🌿';
      case 'seagrass': return '🌊';
      case 'forest': return '🌳';
      default: return '🌱';
    }
  };

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.tokenId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.serialNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || entry.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalActiveCredits = entries.filter(e => e.status === 'active').reduce((sum, e) => sum + e.credits, 0);
  const totalRetiredCredits = entries.filter(e => e.status === 'retired').reduce((sum, e) => sum + e.credits, 0);
  const pendingCredits = entries.filter(e => e.status === 'pending').reduce((sum, e) => sum + e.credits, 0);

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
            <Database className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Carbon Credit Registry</h1>
          </div>
          <p className="text-muted-foreground">
            Comprehensive registry of all verified and issued carbon credits on the VAYU DAO platform
          </p>
        </div>

        {/* Registry Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Credits</p>
                  <p className="text-2xl font-bold carbon-counter text-success">
                    {totalActiveCredits.toLocaleString()}
                  </p>
                  <p className="text-sm text-success mt-1">Available for trading</p>
                </div>
                <Coins className="w-8 h-8 text-success opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Retired Credits</p>
                  <p className="text-2xl font-bold carbon-counter text-primary">
                    {totalRetiredCredits.toLocaleString()}
                  </p>
                  <p className="text-sm text-primary mt-1">Permanently offset</p>
                </div>
                <Shield className="w-8 h-8 text-primary opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Issuance</p>
                  <p className="text-2xl font-bold carbon-counter text-warning">
                    {pendingCredits.toLocaleString()}
                  </p>
                  <p className="text-sm text-warning mt-1">Awaiting verification</p>
                </div>
                <FileCheck className="w-8 h-8 text-warning opacity-60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Registry Entries</p>
                  <p className="text-2xl font-bold carbon-counter text-accent">
                    {entries.length}
                  </p>
                  <p className="text-sm text-accent mt-1">Unique projects</p>
                </div>
                <Database className="w-8 h-8 text-accent opacity-60" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Registry Entries List */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Registry Entries</span>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search projects, tokens, or serial numbers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8 w-80"
                      />
                    </div>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="px-3 py-1 bg-background border border-border rounded-md text-sm"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="retired">Retired</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredEntries.map((entry) => (
                    <Card 
                      key={entry.id}
                      className={`cursor-pointer hover:shadow-glow-accent transition-all ${
                        selectedEntry?.id === entry.id ? 'border-primary shadow-glow-accent' : 'border-border/20'
                      }`}
                      onClick={() => setSelectedEntry(entry)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">{getProjectTypeIcon(entry.projectType)}</span>
                              <h3 className="font-semibold">{entry.projectName}</h3>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-3">
                              <div>
                                <p className="text-xs text-muted-foreground">Token ID</p>
                                <p className="font-mono text-sm">{entry.tokenId}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Serial Number</p>
                                <p className="font-mono text-xs">{entry.serialNumber}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <span className="text-sm font-medium">
                                <MapPin className="w-3 h-3 inline mr-1" />
                                {entry.location}
                              </span>
                              <span className="text-sm">
                                <Calendar className="w-3 h-3 inline mr-1" />
                                {entry.issueDate}
                              </span>
                              <span className="text-sm font-bold text-primary">
                                {entry.credits.toLocaleString()} tCO₂e
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-2">
                            {getStatusBadge(entry.status)}
                            <Badge variant="outline" className="text-xs">
                              {entry.verificationStandard}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Entry Details */}
          <div>
            <Card className="bg-gradient-card border-border/20 shadow-card-vayu">
              <CardHeader>
                <CardTitle>Registry Entry Details</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedEntry ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">
                        {selectedEntry.projectName}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {getProjectTypeIcon(selectedEntry.projectType)} {selectedEntry.projectType.charAt(0).toUpperCase() + selectedEntry.projectType.slice(1)} restoration project
                      </p>
                    </div>

                    {/* Credit Information */}
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary carbon-counter">
                          {selectedEntry.credits.toLocaleString()}
                        </div>
                        <div className="text-sm text-primary">
                          Carbon Credits (tCO₂e)
                        </div>
                      </div>
                    </div>

                    {/* Technical Details */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-2">Technical Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Token ID:</span>
                            <span className="font-mono">{selectedEntry.tokenId}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Vintage:</span>
                            <span>{selectedEntry.vintage}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Issue Date:</span>
                            <span>{selectedEntry.issueDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Issuer:</span>
                            <span className="text-right text-xs">{selectedEntry.issuer}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Blockchain Details</h4>
                        <div className="p-2 bg-muted/20 rounded text-xs font-mono break-all">
                          {selectedEntry.blockchainTxHash}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Additional Certifications</h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedEntry.additionalCertifications.map((cert, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button className="w-full" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Details
                      </Button>
                      
                      <Button variant="outline" className="w-full" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download Certificate
                      </Button>

                      {selectedEntry.status === 'pending' && (
                        <Button className="w-full bg-success hover:bg-success/90" size="sm">
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Approve Issuance
                        </Button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Database className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Select a registry entry to view details</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistryVerificationPage;