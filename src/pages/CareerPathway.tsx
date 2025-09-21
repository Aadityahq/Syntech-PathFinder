import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "@/components/ui/navigation";
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  Award, 
  Building, 
  Users, 
  ArrowRight,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const CareerPathway = () => {
  const pathwaySteps = [
    {
      id: 1,
      title: "Foundation Skills",
      status: "completed",
      duration: "3 months",
      description: "Build core programming and problem-solving skills",
      items: [
        { name: "Python Programming", completed: true, type: "course" },
        { name: "Data Structures & Algorithms", completed: true, type: "course" },
        { name: "Git & Version Control", completed: true, type: "skill" },
        { name: "Problem Solving Assessment", completed: true, type: "assessment" }
      ]
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      status: "in-progress",
      duration: "4 months",
      description: "Learn modern web technologies and frameworks",
      items: [
        { name: "HTML, CSS, JavaScript", completed: true, type: "course" },
        { name: "React.js Fundamentals", completed: true, type: "course" },
        { name: "Node.js & Express", completed: false, type: "course" },
        { name: "Database Design (SQL)", completed: false, type: "course" },
        { name: "Build Portfolio Project", completed: false, type: "project" }
      ]
    },
    {
      id: 3,
      title: "Advanced Development",
      status: "upcoming",
      duration: "5 months",
      description: "Master advanced concepts and industry practices",
      items: [
        { name: "Advanced React & State Management", completed: false, type: "course" },
        { name: "Cloud Services (AWS/Azure)", completed: false, type: "course" },
        { name: "Testing & CI/CD", completed: false, type: "skill" },
        { name: "System Design Principles", completed: false, type: "course" },
        { name: "Capstone Project", completed: false, type: "project" }
      ]
    },
    {
      id: 4,
      title: "Professional Preparation",
      status: "upcoming",
      duration: "3 months",
      description: "Prepare for job applications and interviews",
      items: [
        { name: "Technical Interview Prep", completed: false, type: "course" },
        { name: "Behavioral Interview Training", completed: false, type: "course" },
        { name: "Resume & LinkedIn Optimization", completed: false, type: "skill" },
        { name: "Mock Interviews", completed: false, type: "assessment" },
        { name: "Networking & Job Applications", completed: false, type: "skill" }
      ]
    },
    {
      id: 5,
      title: "Career Launch",
      status: "future",
      duration: "3 months",
      description: "Secure internships and entry-level positions",
      items: [
        { name: "Internship Applications", completed: false, type: "application" },
        { name: "Company Research & Applications", completed: false, type: "application" },
        { name: "Interview Rounds", completed: false, type: "interview" },
        { name: "Offer Negotiations", completed: false, type: "skill" },
        { name: "Career Start!", completed: false, type: "milestone" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'in-progress': return 'text-primary';
      case 'upcoming': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle2;
      case 'in-progress': return Clock;
      default: return Circle;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return BookOpen;
      case 'skill': return Users;
      case 'assessment': return Award;
      case 'project': return Building;
      default: return Circle;
    }
  };

  const calculateProgress = () => {
    const totalSteps = pathwaySteps.length;
    const completedSteps = pathwaySteps.filter(step => step.status === 'completed').length;
    const inProgressSteps = pathwaySteps.filter(step => step.status === 'in-progress').length * 0.5;
    return Math.round(((completedSteps + inProgressSteps) / totalSteps) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Software Engineer Career Pathway
              </h1>
              <p className="text-muted-foreground">
                Your personalized roadmap to becoming a software engineer
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary mb-1">
                {calculateProgress()}%
              </div>
              <div className="text-sm text-muted-foreground">Complete</div>
            </div>
          </div>
          <Progress value={calculateProgress()} className="h-3" />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {pathwaySteps.map((step, index) => {
                  const StatusIcon = getStatusIcon(step.status);
                  
                  return (
                    <div key={step.id} className="relative">
                      {/* Timeline Node */}
                      <div className={`absolute left-3 w-6 h-6 rounded-full border-2 bg-background flex items-center justify-center ${getStatusColor(step.status)} border-current`}>
                        <StatusIcon className="w-4 h-4" />
                      </div>
                      
                      {/* Content */}
                      <div className="ml-16">
                        <Card className="shadow-soft hover:shadow-medium transition-all duration-medium">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div>
                                <CardTitle className="flex items-center space-x-2">
                                  <span>{step.title}</span>
                                  <Badge variant={step.status === 'completed' ? 'default' : 'outline'}>
                                    {step.status.replace('-', ' ')}
                                  </Badge>
                                </CardTitle>
                                <CardDescription className="mt-1">
                                  {step.description}
                                </CardDescription>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-1 text-muted-foreground">
                                  <Clock className="w-4 h-4" />
                                  <span className="text-sm">{step.duration}</span>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {step.items.map((item, itemIndex) => {
                                const TypeIcon = getTypeIcon(item.type);
                                
                                return (
                                  <div key={itemIndex} className="flex items-center space-x-3">
                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                      item.completed 
                                        ? 'bg-success border-success' 
                                        : 'border-muted-foreground'
                                    }`}>
                                      {item.completed && <CheckCircle2 className="w-3 h-3 text-white" />}
                                    </div>
                                    <TypeIcon className="w-4 h-4 text-muted-foreground" />
                                    <span className={`text-sm ${
                                      item.completed ? 'text-muted-foreground line-through' : 'text-foreground'
                                    }`}>
                                      {item.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            
                            {step.status === 'in-progress' && (
                              <div className="mt-4 pt-4 border-t border-border">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">Current Progress</span>
                                  <span className="text-sm font-medium">60%</span>
                                </div>
                                <Progress value={60} className="mt-2 h-1" />
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Focus */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Current Focus</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Web Development Fundamentals</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Building modern web applications with React and Node.js
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Continue Learning
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Next Milestones */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Upcoming Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-warning"></div>
                    <div>
                      <p className="text-sm font-medium">Complete Node.js Course</p>
                      <p className="text-xs text-muted-foreground">Due in 2 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-warning"></div>
                    <div>
                      <p className="text-sm font-medium">Build Portfolio Project</p>
                      <p className="text-xs text-muted-foreground">Due in 1 month</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                    <div>
                      <p className="text-sm font-medium">Start Advanced React</p>
                      <p className="text-xs text-muted-foreground">Starts in 2 months</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Needed */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Skills to Develop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Database Design</Badge>
                  <Badge variant="outline">Testing</Badge>
                  <Badge variant="outline">System Design</Badge>
                </div>
                <Link to="/skill-gap-analyzer" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    Analyze Skill Gaps
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathway;