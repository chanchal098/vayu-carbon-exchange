import LoginSystem from "@/components/LoginSystem";
import HelpDesk from "@/components/HelpDesk";
import CarbonChatbot from "@/components/CarbonChatbot";
import LaserFlow from "@/components/LaserFlow";

const Login = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Laser Effect */}
      <div className="fixed inset-0 z-0">
        <LaserFlow 
          className=""
          style={{}}
          dpr={1}
          color="#00d4ff"
          horizontalBeamOffset={0.15}
          verticalBeamOffset={0.0}
          fogIntensity={0.3}
          wispDensity={1.2}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <LoginSystem />
        <HelpDesk />
        <CarbonChatbot />
      </div>
    </div>
  );
};

export default Login;