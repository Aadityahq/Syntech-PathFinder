import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { 
  Send, 
  Bot, 
  User, 
  Lightbulb, 
  BookOpen, 
  TrendingUp, 
  MessageSquare,
  Sparkles
} from "lucide-react";

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi Alex! I'm your AI Career Assistant. I'm here to help you with career planning, skill development, interview preparation, and any questions about your professional journey. What can I help you with today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    {
      question: "How can I improve my programming skills?",
      category: "Skills",
      icon: BookOpen
    },
    {
      question: "What's the job market like for software engineers?",
      category: "Market",
      icon: TrendingUp
    },
    {
      question: "How should I prepare for technical interviews?",
      category: "Interview",
      icon: MessageSquare
    },
    {
      question: "What projects should I build for my portfolio?",
      category: "Portfolio",
      icon: Lightbulb
    }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'bot' as const,
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('improve') || message.includes('learn')) {
      return "Great question about skill development! Based on your current profile, I'd recommend focusing on these areas:\n\n1. **TypeScript** - This is critical for modern web development and you're currently at 40% vs 70% required\n\n2. **Node.js** - Essential for full-stack development, currently at 45% vs 80% required\n\n3. **System Design** - Important for senior roles and technical interviews\n\nWould you like me to recommend specific learning resources or create a personalized study plan for any of these skills?";
    }
    
    if (message.includes('interview') || message.includes('prepare')) {
      return "Interview preparation is crucial for career success! Here's a comprehensive approach:\n\n**Technical Preparation:**\n• Practice coding problems on LeetCode/HackerRank\n• Review data structures and algorithms\n• Build projects that demonstrate your skills\n\n**Behavioral Preparation:**\n• Prepare STAR format stories\n• Research the company and role\n• Practice common questions\n\n**Mock Interviews:**\n• Use our Mock Interview module\n• Practice with peers or mentors\n• Record yourself to improve communication\n\nWould you like to start a mock interview session right now?";
    }
    
    if (message.includes('project') || message.includes('portfolio')) {
      return "Portfolio projects are essential for showcasing your skills! Based on your software engineering path, here are some impactful project ideas:\n\n**Full-Stack Applications:**\n• Task management app with real-time updates\n• E-commerce platform with payment integration\n• Social media dashboard with analytics\n\n**Technical Focus Projects:**\n• REST API with authentication and documentation\n• React app with advanced state management\n• Microservices architecture with Docker\n\n**Tips for Portfolio Projects:**\n• Include live demos and GitHub repos\n• Write detailed README files\n• Show your problem-solving process\n• Deploy to platforms like Vercel or Netlify\n\nWhich type of project interests you most? I can provide more specific guidance!";
    }
    
    if (message.includes('job') || message.includes('market') || message.includes('salary')) {
      return "The software engineering job market is quite strong! Here's what you should know:\n\n**Market Trends:**\n• High demand for full-stack developers\n• Remote work opportunities are abundant\n• Focus on cloud technologies and AI integration\n\n**Entry-Level Opportunities:**\n• Average salary: $70k-$90k depending on location\n• Startups often offer equity and learning opportunities\n• Large tech companies provide structured training programs\n\n**Skills in High Demand:**\n• React/Node.js for web development\n• Python for AI/ML projects\n• Cloud platforms (AWS, Azure, GCP)\n• DevOps and containerization\n\nBased on your current skill profile, you're on track to be competitive in the market. Focus on building those Node.js and TypeScript skills to maximize opportunities!";
    }
    
    return "I understand you're asking about career development. Could you be more specific about what aspect you'd like help with? I can assist with:\n\n• **Skill Development** - Learning roadmaps and resources\n• **Career Planning** - Goal setting and path optimization\n• **Interview Prep** - Technical and behavioral preparation\n• **Job Search** - Market insights and application strategies\n• **Portfolio Building** - Project ideas and presentation tips\n\nWhat's your most pressing career question right now?";
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            AI Career Assistant
          </h1>
          <p className="text-muted-foreground">
            Get personalized career guidance and answers to your professional questions
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="shadow-soft h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Career Assistant</h3>
                    <p className="text-sm text-success">Online • Ready to help</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex items-start space-x-3 ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-primary' 
                        : 'bg-gradient-primary'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`max-w-[80%] ${
                      message.type === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-muted text-foreground'
                      }`}>
                        <p className="whitespace-pre-line">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me about your career, skills, interviews, or job search..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Quick Questions</h3>
                </div>
                <div className="space-y-3">
                  {quickQuestions.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(item.question)}
                        className="w-full text-left p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <IconComponent className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <Badge variant="outline" className="text-xs mb-1">
                              {item.category}
                            </Badge>
                            <p className="text-sm text-foreground">
                              {item.question}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Assistant Features */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  What I Can Help With
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">Skill Development Plans</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-foreground">Career Path Guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    <span className="text-sm text-foreground">Interview Preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lightbulb className="w-4 h-4 text-warning" />
                    <span className="text-sm text-foreground">Project Ideas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Context */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Your Current Profile
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Target Role:</strong> Software Engineer</p>
                  <p><strong>Skill Level:</strong> Intermediate</p>
                  <p><strong>Focus Areas:</strong> Web Development</p>
                  <p><strong>Current Goal:</strong> Full-stack proficiency</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;