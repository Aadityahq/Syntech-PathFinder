import { Button } from "@/components/ui/button";
import { Target, Home, User, BarChart3, Route, Search, MessageSquare, Mic } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();
  
  const navigationItems = [
    { path: "/dashboard", icon: Home, label: "Dashboard" },
    { path: "/career-pathway", icon: Route, label: "Career Path" },
    { path: "/skill-gap-analyzer", icon: Search, label: "Skill Analysis" },
    { path: "/chat-assistant", icon: MessageSquare, label: "AI Assistant" },
    { path: "/mock-interview", icon: Mic, label: "Mock Interview" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">SynTech Squad</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={cn(
                    "flex items-center space-x-2",
                    isActive(item.path) 
                      ? "bg-gradient-primary text-white" 
                      : "hover:bg-muted"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};