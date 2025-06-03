
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Backend Developer",
      company: "Ayata Incorporation",
      location: "Anamnagar, Kathmandu",
      period: "July 2024 – April 2025",
      type: "Full-time",
      description: "Leading backend development for the Attendance Management System (AMS) and other enterprise solutions.",
      responsibilities: [
        "Developed core backend features for the Attendance Management System including attendance tracking, shift scheduling, and payroll integration",
        "Built robust RESTful APIs using Django and Django REST Framework",
        "Integrated RabbitMQ for handling asynchronous tasks and improving system performance",
        "Transitioned parts of the monolithic system to microservices architecture using gRPC",
        "Implemented Role-Based Access Control (RBAC) for secure user management",
        "Built real-time features using Django Channels and Redis for live updates",
        "Designed and optimized PostgreSQL database schemas for improved performance",
        "Successfully integrated biometric and RFID attendance hardware systems",
        "Collaborated with cross-functional teams including frontend, UI/UX, and QA in Agile sprints"
      ],
      technologies: [
        "Django", "Django REST Framework", "Python", "PostgreSQL", 
        "RabbitMQ", "gRPC", "Django Channels", "Redis", "Git", "ClickUp"
      ],
      achievements: [
        "Improved system performance by 40% through microservices implementation",
        "Successfully delivered real-time attendance tracking features",
        "Reduced API response time by implementing efficient database queries"
      ]
    },
    {
      title: "Intern Backend Developer", 
      company: "Ayata Incorporation",
      location: "Anamnagar, Kathmandu",
      period: "April 2024 – July 2024",
      type: "Internship",
      description: "Started my professional journey learning Django fundamentals and contributing to backend development projects.",
      responsibilities: [
        "Learned Django and Django REST Framework fundamentals for web application development",
        "Designed and managed PostgreSQL databases with proper schema design",
        "Gained hands-on experience with Agile development methodologies and ClickUp project management",
        "Participated in code reviews and debugging sessions to improve code quality",
        "Studied RESTful API design principles and best practices",
        "Assisted senior developers in backend feature development and testing"
      ],
      technologies: [
        "Django", "Django REST Framework", "Python", "PostgreSQL", 
        "Git", "ClickUp", "REST APIs"
      ],
      achievements: [
        "Successfully completed all assigned learning milestones",
        "Contributed to production code within first month",
        "Received positive feedback for quick learning and adaptation"
      ]
    }
  ];

  const education = {
    degree: "BSc.CSIT - Bachelor of Science in Computer Science and Information Technology",
    institution: "St. Lawrence College (Tribhuvan University)",
    location: "Kathmandu, Nepal", 
    period: "2020 – 2024",
    description: "Comprehensive computer science education with focus on programming, software engineering, and system design."
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Professional Experience</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          My journey in backend development and the impact I've made
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:ml-16">
              {/* Timeline dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
              
              <Card className="p-8 hover:shadow-lg transition-all duration-300">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-primary">{exp.title}</h3>
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Education</h2>
          
          <div className="relative md:ml-16">
            {/* Timeline dot */}
            <div className="absolute -left-20 top-6 w-4 h-4 bg-secondary rounded-full border-4 border-background hidden md:block"></div>
            
            <Card className="p-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {education.degree}
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">{education.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {education.description}
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
