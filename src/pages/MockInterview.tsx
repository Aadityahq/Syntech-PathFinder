import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "@/components/ui/navigation";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Mic, 
  MicOff,
  Volume2,
  Star,
  TrendingUp,
  BookOpen
} from "lucide-react";

const MockInterview = () => {
  const [currentSession, setCurrentSession] = useState<'select' | 'interview' | 'feedback'>('select');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [sessionType, setSessionType] = useState<string>('');
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes

  const interviewTypes = [
    {
      id: 'technical',
      title: 'Technical Interview',
      description: 'Programming problems and algorithm questions',
      duration: '45 min',
      difficulty: 'Medium',
      topics: ['Data Structures', 'Algorithms', 'Problem Solving', 'Code Review']
    },
    {
      id: 'behavioral',
      title: 'Behavioral Interview',
      description: 'Leadership, teamwork, and situation-based questions',
      duration: '30 min',
      difficulty: 'Easy',
      topics: ['Communication', 'Leadership', 'Conflict Resolution', 'Career Goals']
    },
    {
      id: 'system-design',
      title: 'System Design',
      description: 'Architecture and scalability discussions',
      duration: '60 min',
      difficulty: 'Hard',
      topics: ['Architecture', 'Scalability', 'Database Design', 'APIs']
    },
    {
      id: 'full-stack',
      title: 'Full-Stack Interview',
      description: 'Comprehensive technical and behavioral questions',
      duration: '90 min',
      difficulty: 'Hard',
      topics: ['Frontend', 'Backend', 'Databases', 'Deployment']
    }
  ];

  const sampleQuestions = {
    technical: [
      {
        question: "Explain the difference between let, const, and var in JavaScript. When would you use each?",
        category: "JavaScript Fundamentals",
        difficulty: "Easy",
        expectedTime: "3-5 minutes"
      },
      {
        question: "Design a function that reverses a linked list. Walk through your approach and implement it.",
        category: "Data Structures",
        difficulty: "Medium",
        expectedTime: "10-15 minutes"
      },
      {
        question: "How would you optimize a React application that's rendering slowly? What tools and techniques would you use?",
        category: "Performance Optimization",
        difficulty: "Medium",
        expectedTime: "8-12 minutes"
      }
    ],
    behavioral: [
      {
        question: "Tell me about a time when you had to work with a difficult team member. How did you handle the situation?",
        category: "Teamwork",
        difficulty: "Medium",
        expectedTime: "5-7 minutes"
      },
      {
        question: "Describe a project you're particularly proud of. What challenges did you face and how did you overcome them?",
        category: "Problem Solving",
        difficulty: "Easy",
        expectedTime: "7-10 minutes"
      },
      {
        question: "Where do you see yourself in 5 years? How does this role fit into your career goals?",
        category: "Career Development",
        difficulty: "Easy",
        expectedTime: "3-5 minutes"
      }
    ]
  };

  const mockFeedback = {
    overall: 85,
    categories: [
      { name: "Technical Knowledge", score: 90, feedback: "Strong understanding of concepts with clear explanations" },
      { name: "Communication", score: 80, feedback: "Good articulation, could improve on structuring answers" },
      { name: "Problem Solving", score: 85, feedback: "Solid approach to breaking down problems" },
      { name: "Confidence", score: 75, feedback: "Generally confident, some hesitation on complex topics" }
    ],
    strengths: [
      "Clear and logical thinking process",
      "Good use of examples to illustrate points",
      "Strong technical foundation"
    ],
    improvements: [
      "Practice structuring answers with STAR method",
      "Work on reducing filler words",
      "Provide more specific examples from experience"
    ]
  };

  const startInterview = (type: string) => {
    setSessionType(type);
    setCurrentSession('interview');
    setCurrentQuestion(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-success';
      case 'Medium': return 'text-warning';
      case 'Hard': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const renderInterviewSelect = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Choose Your Interview Type
        </h2>
        <p className="text-muted-foreground">
          Practice with AI-driven questions tailored to your experience level
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {interviewTypes.map((type) => (
          <Card key={type.id} className="shadow-soft hover:shadow-medium transition-all duration-medium cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{type.title}</CardTitle>
                <Badge variant={type.difficulty === 'Easy' ? 'secondary' : type.difficulty === 'Medium' ? 'default' : 'destructive'}>
                  {type.difficulty}
                </Badge>
              </div>
              <CardDescription>{type.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{type.duration}</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Topics covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {type.topics.map((topic, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button 
                  onClick={() => startInterview(type.id)}
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Interview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderInterview = () => {
    const questions = sampleQuestions[sessionType as keyof typeof sampleQuestions] || sampleQuestions.technical;
    const currentQ = questions[currentQuestion];

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {interviewTypes.find(t => t.id === sessionType)?.title} - Question {currentQuestion + 1}
            </h2>
            <p className="text-muted-foreground">Take your time and explain your thought process</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{formatTime(timeRemaining)}</div>
            <div className="text-sm text-muted-foreground">Time remaining</div>
          </div>
        </div>

        {/* Progress */}
        <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />

        {/* Question Card */}
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Badge variant="outline">{currentQ.category}</Badge>
                <Badge className={getDifficultyColor(currentQ.difficulty)}>
                  {currentQ.difficulty}
                </Badge>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{currentQ.expectedTime}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {currentQ.question}
            </h3>
            
            {/* Recording Interface */}
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="mb-4">
                <Button
                  size="lg"
                  onClick={() => setIsRecording(!isRecording)}
                  className={`rounded-full w-16 h-16 ${
                    isRecording 
                      ? 'bg-destructive hover:bg-destructive/90 animate-pulse' 
                      : 'bg-gradient-primary hover:opacity-90'
                  }`}
                >
                  {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {isRecording ? 'Recording your response...' : 'Click to start recording your answer'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentSession('select')}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Back to Selection
          </Button>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            >
              Previous
            </Button>
            {currentQuestion < questions.length - 1 ? (
              <Button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                className="bg-gradient-primary hover:opacity-90"
              >
                Next Question
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentSession('feedback')}
                className="bg-gradient-success hover:opacity-90"
              >
                Finish Interview
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderFeedback = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Interview Complete! 🎉
        </h2>
        <p className="text-muted-foreground">
          Here's your personalized feedback and areas for improvement
        </p>
      </div>

      {/* Overall Score */}
      <Card className="shadow-soft">
        <CardContent className="p-8 text-center">
          <div className="text-4xl font-bold text-primary mb-2">
            {mockFeedback.overall}%
          </div>
          <div className="text-lg text-muted-foreground">Overall Performance</div>
          <Progress value={mockFeedback.overall} className="mt-4 h-3" />
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6">Performance Breakdown</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {mockFeedback.categories.map((category, index) => (
            <Card key={index} className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-primary">{category.score}%</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(category.score / 20) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{category.feedback}</p>
                <Progress value={category.score} className="mt-3 h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Strengths and Improvements */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>Strengths</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {mockFeedback.strengths.map((strength, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                  <span className="text-sm text-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              <span>Areas for Improvement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {mockFeedback.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-warning mt-2"></div>
                  <span className="text-sm text-foreground">{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          onClick={() => setCurrentSession('select')}
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Try Another Interview
        </Button>
        <Button className="bg-gradient-primary hover:opacity-90">
          <BookOpen className="w-4 h-4 mr-2" />
          Get Learning Resources
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Mock Interview Practice
          </h1>
          <p className="text-muted-foreground">
            Practice interviews with AI-powered feedback to boost your confidence
          </p>
        </div>

        {currentSession === 'select' && renderInterviewSelect()}
        {currentSession === 'interview' && renderInterview()}
        {currentSession === 'feedback' && renderFeedback()}
      </div>
    </div>
  );
};

export default MockInterview;