import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "@/components/ui/navigation";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle, 
  BookOpen, 
  ExternalLink,
  Star,
  Clock,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const SkillGapAnalyzer = () => {
  const targetRole = "Software Engineer";
  
  const skillAnalysis = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", current: 85, required: 80, status: "strong", trend: "up" },
        { name: "JavaScript", current: 75, required: 90, status: "gap", trend: "up" },
        { name: "TypeScript", current: 40, required: 70, status: "critical", trend: "neutral" },
        { name: "Java", current: 30, required: 60, status: "gap", trend: "down" }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React", current: 70, required: 85, status: "gap", trend: "up" },
        { name: "Node.js", current: 45, required: 80, status: "critical", trend: "up" },
        { name: "HTML/CSS", current: 90, required: 80, status: "strong", trend: "neutral" },
        { name: "REST APIs", current: 60, required: 85, status: "gap", trend: "up" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", current: 80, required: 75, status: "strong", trend: "neutral" },
        { name: "Docker", current: 25, required: 70, status: "critical", trend: "neutral" },
        { name: "AWS", current: 35, required: 65, status: "gap", trend: "up" },
        { name: "Database (SQL)", current: 55, required: 80, status: "gap", trend: "up" }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication", current: 85, required: 80, status: "strong", trend: "up" },
        { name: "Problem Solving", current: 80, required: 90, status: "gap", trend: "up" },
        { name: "Teamwork", current: 75, required: 85, status: "gap", trend: "neutral" },
        { name: "Leadership", current: 60, required: 70, status: "gap", trend: "up" }
      ]
    }
  ];

  const learningResources = [
    {
      skill: "TypeScript",
      title: "TypeScript for Beginners",
      provider: "Microsoft Learn",
      type: "Course",
      duration: "6 hours",
      rating: 4.8,
      price: "Free",
      link: "#"
    },
    {
      skill: "Node.js",
      title: "The Complete Node.js Developer Course",
      provider: "Udemy",
      type: "Course",
      duration: "35 hours",
      rating: 4.7,
      price: "$89.99",
      link: "#"
    },
    {
      skill: "Docker",
      title: "Docker Mastery: with Kubernetes + Swarm",
      provider: "Docker",
      type: "Course",
      duration: "19 hours",
      rating: 4.6,
      price: "$94.99",
      link: "#"
    },
    {
      skill: "React",
      title: "Advanced React Patterns",
      provider: "Frontend Masters",
      type: "Workshop",
      duration: "8 hours",
      rating: 4.9,
      price: "$39/month",
      link: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'strong': return 'text-success';
      case 'gap': return 'text-warning';
      case 'critical': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'strong': return CheckCircle;
      case 'gap': return AlertCircle;
      case 'critical': return TrendingDown;
      default: return AlertCircle;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return TrendingUp;
      case 'down': return TrendingDown;
      default: return null;
    }
  };

  const calculateOverallScore = () => {
    const allSkills = skillAnalysis.flatMap(category => category.skills);
    const totalScore = allSkills.reduce((sum, skill) => sum + skill.current, 0);
    return Math.round(totalScore / allSkills.length);
  };

  const getSkillGaps = () => {
    return skillAnalysis.flatMap(category => 
      category.skills.filter(skill => skill.status === 'critical' || skill.status === 'gap')
    ).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Skill Gap Analysis
          </h1>
          <p className="text-muted-foreground">
            Analyze your skills against {targetRole} requirements and get personalized recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Analysis */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {calculateOverallScore()}%
                  </div>
                  <div className="text-sm text-muted-foreground">Overall Skill Score</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-warning mb-2">
                    {getSkillGaps()}
                  </div>
                  <div className="text-sm text-muted-foreground">Skills Need Improvement</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-success mb-2">
                    85%
                  </div>
                  <div className="text-sm text-muted-foreground">Match for Target Role</div>
                </CardContent>
              </Card>
            </div>

            {/* Skill Categories */}
            <div className="space-y-6">
              {skillAnalysis.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="shadow-soft">
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                    <CardDescription>
                      Skills assessment for {category.category.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => {
                        const StatusIcon = getStatusIcon(skill.status);
                        const TrendIcon = getTrendIcon(skill.trend);
                        const gap = skill.required - skill.current;
                        
                        return (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <StatusIcon className={`w-4 h-4 ${getStatusColor(skill.status)}`} />
                                <span className="font-medium text-foreground">{skill.name}</span>
                                {TrendIcon && <TrendIcon className="w-4 h-4 text-muted-foreground" />}
                              </div>
                              <div className="flex items-center space-x-4">
                                <span className="text-sm text-muted-foreground">
                                  {skill.current}% / {skill.required}%
                                </span>
                                {gap > 0 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{gap}% needed
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="relative">
                              <Progress value={skill.current} className="h-2" />
                              <div 
                                className="absolute top-0 h-2 bg-muted-foreground/20 rounded-full"
                                style={{ 
                                  left: `${skill.current}%`, 
                                  width: `${Math.max(0, skill.required - skill.current)}%` 
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Learning Resources */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Recommended Learning Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {learningResources.map((resource, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-medium">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {resource.skill}
                          </Badge>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <CardDescription>{resource.provider}</CardDescription>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{resource.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{resource.duration}</span>
                          </div>
                          <Badge variant="secondary">{resource.type}</Badge>
                        </div>
                        <div className="font-semibold text-primary">{resource.price}</div>
                      </div>
                      <Button className="w-full bg-gradient-primary hover:opacity-90">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Start Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Priority Skills */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-warning" />
                  <span>Priority Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">TypeScript</span>
                    <Badge variant="destructive" className="text-xs">Critical</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Node.js</span>
                    <Badge variant="destructive" className="text-xs">Critical</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Docker</span>
                    <Badge variant="destructive" className="text-xs">Critical</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">React</span>
                    <Badge variant="outline" className="text-xs">Gap</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Study Plan */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>3-Month Plan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Month 1: Foundation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Complete TypeScript basics</li>
                      <li>• Start Node.js fundamentals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Month 2: Practice</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Build Node.js projects</li>
                      <li>• Learn Docker basics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Month 3: Advanced</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Advanced React patterns</li>
                      <li>• Deploy with Docker</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-gradient-success hover:opacity-90">
                  Start Study Plan
                </Button>
              </CardContent>
            </Card>

            {/* Assessment */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Skill Assessment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Take our comprehensive assessment to get more accurate skill ratings.
                </p>
                <Button variant="outline" className="w-full">
                  Take Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillGapAnalyzer;