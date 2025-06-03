
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const About = () => {
  const skills = {
    "Backend Development": [
      "Django & Django REST Framework",
      "Python Programming",
      "RESTful API Design",
      "Microservices Architecture",
      "Unit Testing & Debugging"
    ],
    "Databases": [
      "PostgreSQL",
      "MySQL", 
      "Redis (Caching)",
      "Database Schema Design",
      "Query Optimization"
    ],
    "Integration & Communication": [
      "gRPC Protocol",
      "RabbitMQ Message Queue",
      "Django Channels (WebSocket)",
      "Third-party API Integration",
      "Real-time Systems"
    ],
    "Development Practices": [
      "Agile Development",
      "Git Version Control",
      "Code Review Process",
      "Clean Code Principles",
      "Team Collaboration"
    ]
  };

  const interests = [
    "Scalable Backend Systems",
    "Microservices Architecture", 
    "Real-time Applications",
    "Message Queue Systems",
    "API Performance Optimization",
    "Clean Code Practices"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Passionate Django backend developer focused on building robust, scalable systems
        </p>
      </div>

      {/* Professional Overview */}
      <section className="mb-16">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Professional Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm an aspiring Django backend developer with <strong>1 year of hands-on industry experience</strong> 
                at Ayata Incorporation, where I've contributed to building scalable backend systems and implementing 
                real-time features.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey began with a strong foundation in computer science through my BSc.CSIT degree, 
                and I quickly fell in love with backend development, particularly the Django ecosystem.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about <strong>microservices architecture</strong>, message queue systems like RabbitMQ, 
                and modern communication protocols like gRPC. I thrive in Agile development environments and 
                believe in writing clean, efficient code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Always eager to expand my knowledge in backend performance optimization, security best practices, 
                and system design patterns that solve real-world problems.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Technical Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="space-y-3">
                {skillList.map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Interests & Passion */}
      <section className="mb-16">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Areas of Interest</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I'm particularly passionate about backend technologies that enable modern, 
            scalable web applications. Here are the areas I'm most excited about:
          </p>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <Badge key={interest} variant="secondary" className="text-sm py-2 px-3">
                {interest}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      {/* Work Philosophy */}
      <section>
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <h2 className="text-2xl font-semibold mb-6">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold">Collaboration First</h3>
              <p className="text-sm text-muted-foreground">
                I believe great software is built by great teams. I thrive in collaborative 
                environments and value open communication.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold">Clean & Efficient</h3>
              <p className="text-sm text-muted-foreground">
                Writing maintainable, well-documented code that follows best practices 
                and industry standards is a priority for me.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Technology evolves rapidly, and I'm committed to staying current with 
                the latest trends and best practices in backend development.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default About;
