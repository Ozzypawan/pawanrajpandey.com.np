
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-preview");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // Create a blob with CV content
    const cvContent = `
PAWAN RAJ PANDEY
Django Backend Developer

Contact:
📞 +977-9767279454
📧 pawanpandey1251@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/pawanrajpandey/
💻 GitHub: https://github.com/ozzypawan

SUMMARY
Backend developer with 1 year of industry experience contributing to scalable backend systems and real-time features. Familiar with microservices architecture and message queue systems like RabbitMQ & gRPC. Proficient in Django, REST APIs, and PostgreSQL.

EXPERIENCE
Junior Backend Developer - Ayata Incorporation (July 2024 – April 2025)
• Developed core backend features for Attendance Management System
• Built RESTful APIs using Django and DRF
• Integrated RabbitMQ for asynchronous tasks
• Implemented microservices using gRPC

Intern Backend Developer - Ayata Incorporation (April 2024 – July 2024)
• Learned Django & DRF basics
• Designed PostgreSQL databases
• Gained Agile development experience

EDUCATION
BSc.CSIT - St. Lawrence College (2020 – 2024)
    `;
    
    const blob = new Blob([cvContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Pawan_Raj_Pandey_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const techStack = [
    "Django", "Python", "PostgreSQL", "REST APIs", 
    "RabbitMQ", "gRPC", "Redis", "Microservices"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Picture */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=160&h=160&fit=crop&crop=face"
                  alt="Pawan Raj Pandey"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pawan Raj Pandey
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Backend Developer
            </h2>
          </div>

          {/* Summary */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable backend systems with <strong>1 year of industry experience</strong>. 
            Specialized in Django, REST APIs, and microservices architecture. 
            Always eager to learn and contribute to innovative projects.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={downloadCV}
              className="min-w-[160px]"
            >
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToProjects}
              className="min-w-[160px]"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Projects Preview */}
      <section id="projects-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Some of my recent work in Django backend development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Attendance Management System</h3>
                <p className="text-muted-foreground">
                  A comprehensive Django-based system for employee attendance tracking, 
                  shift scheduling, and payroll integration with biometric support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Django</Badge>
                  <Badge variant="outline">DRF</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">RabbitMQ</Badge>
                </div>
                <div className="flex gap-4 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://ams.ayata.com.np/" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/Ozzypawan/AMS" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Microservices Architecture</h3>
                <p className="text-muted-foreground">
                  Transitioned monolithic systems to microservices using gRPC, 
                  implementing real-time features with Django Channels and Redis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">gRPC</Badge>
                  <Badge variant="outline">Django Channels</Badge>
                  <Badge variant="outline">Redis</Badge>
                  <Badge variant="outline">Microservices</Badge>
                </div>
                <div className="pt-2">
                  <Link to="/projects">
                    <Button variant="outline" size="sm">
                      View All Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
