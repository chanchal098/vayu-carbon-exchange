import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Building, 
  Users, 
  BarChart3, 
  Leaf, 
  Menu, 
  X,
  LogOut
} from "lucide-react";
import vayuLogo from "@/assets/vayu-logo.png";

interface NavigationProps {
  userType?: 'admin' | 'company' | 'ngo' | 'verifier' | 'buyer' | 'developer' | null;
}

const Navigation = ({ userType }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // In real app, clear auth tokens
    navigate('/');
  };

  const getNavItems = () => {
    if (!userType) {
      return [
        { label: "Home", href: "/" },
        { label: "Public Portal", href: "/public" },
        { label: "Login", href: "/login" },
        { label: "Register", href: "/register" }
      ];
    }

    switch (userType) {
      case 'admin':
        return [
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Projects", href: "/admin/projects" },
          { label: "Verification", href: "/admin/verification" },
          { label: "Market", href: "/admin/market" },
          { label: "Analytics", href: "/admin/analytics" },
        ];
      case 'company':
      case 'buyer':
        return [
          { label: "Dashboard", href: "/company/dashboard" },
          { label: "Marketplace", href: "/company/marketplace" },
          { label: "Portfolio", href: "/company/portfolio" },
          { label: "Trading", href: "/company/trading" },
        ];
      case 'ngo':
      case 'developer':
        return [
          { label: "Dashboard", href: "/ngo/dashboard" },
          { label: "Projects", href: "/ngo/projects" },
          { label: "Upload Data", href: "/ngo/upload" },
          { label: "Credits", href: "/ngo/credits" },
        ];
      case 'verifier':
        return [
          { label: "Dashboard", href: "/verifier/dashboard" },
          { label: "Pending Reviews", href: "/verifier/dashboard" },
          { label: "Completed", href: "/verifier/dashboard" },
        ];
      default:
        return [];
    }
  };

  const getUserIcon = () => {
    switch (userType) {
      case 'admin': return <User className="w-4 h-4" />;
      case 'company':
      case 'buyer': return <Building className="w-4 h-4" />;
      case 'ngo':
      case 'developer': return <Users className="w-4 h-4" />;
      case 'verifier': return <BarChart3 className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={vayuLogo} 
              alt="VAYU DAO" 
              className="w-10 h-10 transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                VAYU DAO
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Carbon MRV Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavItems().map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {userType ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-primary/10 rounded-lg">
                  {getUserIcon()}
                  <span className="text-sm font-medium capitalize">
                    {userType} Portal
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="hover:bg-destructive/10 hover:text-destructive border-border/50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="outline" className="border-border/50">
                    Login
                  </Button>
                </Link>
                <Link to="#carbon-map">
                  <Button className="bg-gradient-primary hover:opacity-90 vayu-glow">
                    <Leaf className="w-4 h-4 mr-2" />
                    Explore Carbon Map
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {getNavItems().map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {userType ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="mx-4 mt-4 hover:bg-destructive/10 hover:text-destructive"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <div className="flex flex-col space-y-2 px-4 mt-4">
                  <Link to="/login">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="#carbon-map">
                    <Button className="w-full bg-gradient-primary vayu-glow">
                      <Leaf className="w-4 h-4 mr-2" />
                      Explore Carbon Map
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;