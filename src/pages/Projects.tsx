import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Attendance Management System (AMS)",
      description: "A comprehensive Django-based enterprise solution for employee attendance tracking, shift scheduling, and payroll integration. Features biometric and RFID support for seamless attendance capture, real-time notifications, and detailed reporting capabilities.",
      longDescription: "This enterprise-grade system revolutionizes workforce management by providing automated attendance tracking, intelligent shift scheduling, and integrated payroll processing. Built with scalability in mind, it supports multiple authentication methods and provides real-time insights into workforce productivity.",
      techStack: [
        "Django", "Django REST Framework", "PostgreSQL", "Redis", 
        "RabbitMQ", "gRPC", "Django Channels", "Biometric Integration", "RFID"
      ],
      features: [
        "Real-time attendance tracking with biometric/RFID support",
        "Intelligent shift scheduling and management", 
        "Automated payroll calculation and integration",
        "Role-based access control (RBAC)",
        "Real-time notifications using WebSocket",
        "Comprehensive reporting and analytics",
        "Hardware integration for multiple attendance devices"
      ],
      liveUrl: "https://ams.ayata.com.np/",
      githubUrl: "https://github.com/Ozzypawan/AMS",
      category: "Enterprise Software",
      status: "Production"
    },
    {
      title: "SaaS Project with AI Integration",
      description: "A comprehensive knowledge management system (KMS) built with microservices architecture, featuring AI integration for intelligent content processing, automated workflows, and enhanced user experience through machine learning capabilities.",
      longDescription: "This enterprise SaaS platform demonstrates modern cloud-native architecture with AI integration. Built using microservices with gRPC communication, it provides intelligent knowledge management capabilities with automated CI/CD pipelines and comprehensive project management through Jira integration.",
      techStack: [
        "Django", "gRPC", "RabbitMQ", "PostgreSQL", "Docker", 
        "AI Integration", "CI/CD", "Jira", "Microservices", "REST APIs"
      ],
      features: [
        "AI-powered content analysis and categorization",
        "Microservices architecture with gRPC communication",
        "Automated CI/CD pipelines for seamless deployment",
        "Intelligent knowledge discovery and search",
        "Real-time collaboration features",
        "Project management integration with Jira",
        "Scalable containerized infrastructure",
        "Advanced analytics and reporting"
      ],
      liveUrl: "https://withzetalabs.com/en/zeta-kms/features",
      githubUrl: "https://withzetalabs.com/en/zeta-kms/features",
      category: "SaaS Platform",
      status: "Production"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern real-time chat application built with Django Channels and WebSocket technology, featuring user authentication, message history, typing indicators, and online status tracking.",
      longDescription: "This application demonstrates advanced real-time web development techniques using Django Channels. It provides a seamless chat experience with modern features like typing indicators, online presence, and message delivery confirmation.",
      techStack: [
        "Django", "Django Channels", "WebSocket", "Redis", "PostgreSQL",
        "JavaScript", "HTML5", "CSS3", "Bootstrap"
      ],
      features: [
        "Real-time messaging with WebSocket",
        "User authentication and authorization",
        "Message history and search functionality",
        "Typing indicators and online status",
        "Message delivery confirmation",
        "Responsive design for mobile devices",
        "Emoji support and file sharing"
      ],
      liveUrl: "https://github.com/Ozzypawan/Spicenet",
      githubUrl: "https://github.com/Ozzypawan/Spicenet",
      category: "Web Application",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-500";
      case "Completed": return "bg-blue-500";
      case "In Development": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A showcase of my Django backend development work, featuring enterprise solutions, 
          microservices architecture, and modern web applications
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-8">
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></div>
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    {project.category}
                  </Badge>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3 lg:ml-6">
                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Description */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Description */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Technology Stack</h3>
                    <div className="space-y-3">
                      {project.techStack.map((tech) => (
                        <div key={tech} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <Badge variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Interested in My Work?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always excited to discuss new projects and opportunities. 
          Feel free to reach out if you'd like to collaborate or learn more about my development process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="/contact">Get In Touch</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/ozzypawan" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
