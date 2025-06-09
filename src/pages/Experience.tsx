
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Zeta Labs",
      location: "Kuleshwor, Kathmandu",
      period: "June 2025 – Present",
      type: "Full-time",
      description: "Working on SaaS project with AI integration in microservices architecture using modern DevOps practices.",
      responsibilities: [
        "Developing microservices using Django and gRPC for distributed system architecture",
        "Building SaaS platform with AI integration for enhanced user experience",
        "Handling asynchronous tasks with RabbitMQ for improved system performance",
        "Implementing CI/CD pipelines for automated deployment and testing",
        "Managing project workflows and sprint planning using Jira",
        "Designing optimized PostgreSQL databases for efficient data management",
        "Collaborating in cross-functional teams to deliver enterprise systems",
        "Implementing secure authentication and Role-Based Access Control (RBAC)",
        "Building containerized applications using Docker for seamless deployment"
      ],
      technologies: [
        "Django", "gRPC", "RabbitMQ", "PostgreSQL", "Docker", "Git", "REST APIs", "AI Integration", "CI/CD", "Jira"
      ]
    },
    {
      title: "Junior Backend Developer",
      company: "Ayata Incorporation",
      location: "Anamnagar, Kathmandu",
      period: "July 2024 – May 2025",
      type: "Full-time",
      description: "Led backend development of the Attendance Management System (AMS) and other enterprise projects.",
      responsibilities: [
        "Built robust RESTful APIs using Django and Django REST Framework",
        "Integrated RabbitMQ and Redis for asynchronous tasks and real-time features",
        "Transitioned monolithic system parts to microservices architecture",
        "Managed role-based permissions and comprehensive user access control",
        "Designed and optimized database schemas for improved performance",
        "Implemented real-time features using Django Channels for live updates",
        "Collaborated with frontend, UI/UX, and QA teams in Agile development cycles"
      ],
      technologies: [
        "Django", "Django REST Framework", "RabbitMQ", "Redis", "gRPC", "PostgreSQL", "Git", "ClickUp"
      ]
    },
    {
      title: "Backend Developer Intern",
      company: "Ayata Incorporation",
      location: "Anamnagar, Kathmandu",
      period: "April 2024 – July 2024",
      type: "Internship",
      description: "Kickstarted backend development journey and contributed to live projects.",
      responsibilities: [
        "Learned Django, Django REST Framework, and REST API principles",
        "Designed and managed PostgreSQL database schemas with proper normalization",
        "Participated in team sprints and collaborative code review sessions",
        "Assisted in backend development tasks and feature implementation",
        "Gained hands-on experience with Agile development methodologies",
        "Contributed to production code within the first month of internship"
      ],
      technologies: [
        "Django", "Django REST Framework", "PostgreSQL", "Git", "REST APIs", "ClickUp"
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
    <>
      <Helmet>
        <title>Experience - Pawan Raj Pandey | Django Backend Developer</title>
        <meta name="description" content="Professional experience of Pawan Raj Pandey as Django Backend Developer at Zeta Labs and Ayata Incorporation. 1+ years of industry experience in scalable backend systems, microservices, and REST APIs." />
        <meta name="keywords" content="Django experience, backend developer experience, Zeta Labs, Ayata Incorporation, microservices, gRPC, PostgreSQL, RabbitMQ" />
        <meta property="og:title" content="Experience - Pawan Raj Pandey | Django Backend Developer" />
        <meta property="og:description" content="Professional experience of Pawan Raj Pandey as Django Backend Developer with expertise in microservices and scalable systems." />
        <link rel="canonical" href="https://pawanrajpandey.com/experience" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Professional Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Backend developer with hands-on experience building scalable systems, microservices, and real-time applications
          </p>
        </div>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12">
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
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Education</h2>
          
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
        </section>
      </div>
    </>
  );
};

export default Experience;
