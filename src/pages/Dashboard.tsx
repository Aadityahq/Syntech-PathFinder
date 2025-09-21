import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { TrendingUp, Target, BookOpen, Award, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const careerPaths = [
    {
      title: "Software Engineer",
      match: 92,
      description: "Full-stack development with modern frameworks",
      skills: ["React", "Node.js", "Python", "AWS"],
      timeToGoal: "18 months",
      status: "recommended"
    },
    {
      title: "Data Scientist",
      match: 87,
      description: "Machine learning and data analysis",
      skills: ["Python", "SQL", "TensorFlow", "Statistics"],
      timeToGoal: "24 months",
      status: "exploring"
    },
    {
      title: "Product Manager",
      match: 78,
      description: "Drive product strategy and development",
      skills: ["Strategy", "Analytics", "Communication", "Design"],
      timeToGoal: "12 months",
      status: "potential"
    }
  ];

  const recentActivities = [
    { activity: "Completed Python Fundamentals", time: "2 hours ago", type: "course" },
    { activity: "Skill assessment in Data Analysis", time: "1 day ago", type: "assessment" },
    { activity: "Mock interview with AI", time: "3 days ago", type: "interview" },
    { activity: "Updated career interests", time: "1 week ago", type: "profile" }
  ];

  const skillProgress = [
    { skill: "Programming", current: 75, target: 90 },
    { skill: "Communication", current: 85, target: 90 },
    { skill: "Problem Solving", current: 80, target: 95 },
    { skill: "Leadership", current: 60, target: 80 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's your personalized career development overview
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Career Paths */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Recommended Career Paths
                </h2>
                <Link to="/career-pathway">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <span>View All</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {careerPaths.map((path, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-medium">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center space-x-2">
                            <span>{path.title}</span>
                            <Badge variant={path.status === "recommended" ? "default" : "secondary"}>
                              {path.match}% match
                            </Badge>
                          </CardTitle>
                          <CardDescription>{path.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Time to goal</p>
                          <p className="font-semibold text-primary">{path.timeToGoal}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {path.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Link to="/career-pathway">
                          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                            Explore Path
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skill Progress */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Skill Development Progress
              </h2>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {skillProgress.map((skill, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">{skill.skill}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.current}% / {skill.target}%
                          </span>
                        </div>
                        <Progress value={skill.current} className="h-2" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link to="/skill-gap-analyzer">
                      <Button className="w-full bg-gradient-success hover:opacity-90">
                        Analyze Skill Gaps
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/mock-interview">
                  <Button variant="outline" className="w-full justify-start">
                    <Award className="w-4 h-4 mr-2" />
                    Start Mock Interview
                  </Button>
                </Link>
                <Link to="/chat-assistant">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Ask Career Assistant
                  </Button>
                </Link>
                <Link to="/skill-gap-analyzer">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Find Learning Resources
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {activity.activity}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievement Stats */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span>This Month</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Courses Completed</span>
                    <span className="font-bold text-success">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Skills Improved</span>
                    <span className="font-bold text-success">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Mock Interviews</span>
                    <span className="font-bold text-success">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Progress Score</span>
                    <span className="font-bold text-primary">87%</span>
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

export default Dashboard;