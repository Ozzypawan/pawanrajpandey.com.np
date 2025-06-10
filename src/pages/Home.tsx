import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // SEO optimization - set document title and meta description
    document.title = "Pawan Raj Pandey - Django Backend Developer | Python & REST API Expert";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Pawan Raj Pandey - Experienced Django Backend Developer with 1+ years in building scalable systems, REST APIs, microservices, and real-time features. Expert in Python, PostgreSQL, RabbitMQ, and gRPC.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Pawan Raj Pandey - Experienced Django Backend Developer with 1+ years in building scalable systems, REST APIs, microservices, and real-time features. Expert in Python, PostgreSQL, RabbitMQ, and gRPC.';
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Django Developer, Python Backend Developer, REST API, Microservices, PostgreSQL, RabbitMQ, gRPC, Django REST Framework, Backend Engineer, Pawan Raj Pandey');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Django Developer, Python Backend Developer, REST API, Microservices, PostgreSQL, RabbitMQ, gRPC, Django REST Framework, Backend Engineer, Pawan Raj Pandey';
      document.head.appendChild(meta);
    }

    // Open Graph meta tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Pawan Raj Pandey - Django Backend Developer');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'Pawan Raj Pandey - Django Backend Developer';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Experienced Django Backend Developer specializing in scalable systems, REST APIs, and microservices architecture.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Experienced Django Backend Developer specializing in scalable systems, REST APIs, and microservices architecture.';
      document.head.appendChild(meta);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', '/pawanrajpandey.jpeg');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = '/pawanrajpandey.jpeg';
      document.head.appendChild(meta);
    }

    // Twitter Card meta tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      const meta = document.createElement('meta');
      meta.name = 'twitter:card';
      meta.content = 'summary_large_image';
      document.head.appendChild(meta);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      const meta = document.createElement('meta');
      meta.name = 'twitter:title';
      meta.content = 'Pawan Raj Pandey - Django Backend Developer';
      document.head.appendChild(meta);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      const meta = document.createElement('meta');
      meta.name = 'twitter:description';
      meta.content = 'Experienced Django Backend Developer specializing in scalable systems, REST APIs, and microservices architecture.';
      document.head.appendChild(meta);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      const meta = document.createElement('meta');
      meta.name = 'twitter:image';
      meta.content = '/pawanrajpandey.jpeg';
      document.head.appendChild(meta);
    }

    // Structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Pawan Raj Pandey",
      "jobTitle": "Django Backend Developer",
      "description": "Experienced Django Backend Developer with 1+ years in building scalable systems, REST APIs, and microservices architecture.",
      "url": window.location.origin,
      "image": "/pawanrajpandey.jpeg",
      "email": "pawanpandey1251@gmail.com",
      "telephone": "+977-9767279454",
      "sameAs": [
        "https://www.linkedin.com/in/pawanrajpandey/",
        "https://github.com/ozzypawan"
      ],
      "knowsAbout": [
        "Django",
        "Python",
        "PostgreSQL",
        "REST APIs",
        "RabbitMQ",
        "gRPC",
        "Redis",
        "Microservices"
      ]
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Clean up when component unmounts
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-preview");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const previewCV = () => {
    // Open PDF in new tab for preview
    window.open("/pawanrajpandey-resume.pdf", "_blank", "noopener,noreferrer");
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
          <div className="relative mx-auto w-48 h-64 sm:w-56 sm:h-72 mb-8">
            <div className="w-full h-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-background overflow-hidden">
                <img 
                  src="/pawanrajpandey.jpeg"
                  alt="Pawan Raj Pandey - Django Backend Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  width="224"
                  height="288"
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
              onClick={previewCV}
              className="min-w-[160px]"
              aria-label="Preview Pawan Raj Pandey's resume"
            >
              View Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToProjects}
              className="min-w-[160px]"
              aria-label="View Pawan's projects"
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
                    <a href="https://ams.ayata.com.np/" target="_blank" rel="noopener noreferrer" aria-label="View Attendance Management System live demo">
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/Ozzypawan/AMS" target="_blank" rel="noopener noreferrer" aria-label="View Attendance Management System source code on GitHub">
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
                    <Button variant="outline" size="sm" aria-label="View all projects by Pawan Raj Pandey">
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

export default Index;