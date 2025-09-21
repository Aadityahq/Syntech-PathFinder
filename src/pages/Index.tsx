import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Users, TrendingUp, MessageSquare, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Personalized Career Paths",
      description: "AI-powered recommendations based on your interests, skills, and academic background"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your skill development and career milestones with visual progress indicators"
    },
    {
      icon: BookOpen,
      title: "Skill Gap Analysis",
      description: "Identify missing skills and get curated learning resources to bridge the gaps"
    },
    {
      icon: MessageSquare,
      title: "AI Career Assistant",
      description: "24/7 personalized career guidance and answers to your professional questions"
    },
    {
      icon: Award,
      title: "Mock Interviews",
      description: "Practice interviews with AI-driven feedback to boost your confidence"
    },
    {
      icon: Users,
      title: "Career Community",
      description: "Connect with peers and professionals in your field of interest"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">SynTech Squad</span>
          </div>
          <Link to="/onboarding">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Your Future Starts with the Right
                <span className="text-accent-foreground"> Career Path</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Discover personalized career opportunities, develop essential skills, and prepare for your dream job with AI-powered guidance tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/onboarding">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students collaborating on career planning with digital tools"
                className="rounded-xl shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Career Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines AI technology with career expertise to guide you toward your professional goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-medium">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already building successful careers with SynTech Squad.
          </p>
          <Link to="/onboarding">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
              Begin Your Career Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 rounded bg-gradient-primary flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-foreground">SynTech Squad</span>
          </div>
          <p className="text-muted-foreground">
            Empowering the next generation of professionals with AI-driven career guidance.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;