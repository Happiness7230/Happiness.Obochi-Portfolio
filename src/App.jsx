import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, ExternalLink, Code, Database, Server, Terminal, FileText, Menu, X, ChevronRight, Briefcase, Award } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Portfolio data - You can easily update this
  const portfolioData = {
    personal: {
      name: "Happiness Adah",
      title: "Polyglot Backend Engineer",
      tagline: "Engineering scalable systems with Python & Node.js",
      bio: "A Polyglot Backend Developer combining the robust architecture of Django with the high-concurrency speed of Express.js. Focused on secure APIs, database optimization, and containerized deployment.",
      email: "Obochihappiness180@gmail.com",
      github: "https://github.com/Happiness7230/",
      linkedin: "https://www.linkedin.com/in/happinessobochi/",
      location: "Lagos, Nigeria",
      available: true
    },
    
    projects: [
      {
        id: 1,
        name: "Airbnb Clone",
        description: "Full-featured booking platform with payment integration",
        tech: ["Python", "Django", "MySQL", "Celery", "Kubernetes"],
        highlights: [
          "Reduced payment processing latency by 40% via Celery async tasks",
          "Implemented secure Chapa Gateway webhooks for 100% transaction reliability",
          "Deployed with Kubernetes for high availability and auto-scaling"
        ],
        github: "https://github.com/Happiness7230/alx_travel_app_0x03/tree/main/alx_travel_app",
        demo: "#",
        color: "blue"
      },
      {
        id: 2,
        name: "SearchEngine",
        description: "Real-time collaboration platform for hackathons",
        tech: ["Node.js", "Express", "MongoDB", "Socket.io", "Salesforce"],
        highlights: [
          "Engineered 3 micro-apps in < 2 hours using rapid Express.js scaffolding",
          "Optimized MySQL queries to handle real-time Salesforce sync with sub-second lag",
          "Built WebSocket infrastructure for live team collaboration"
        ],
        github: "https://github.com/Happiness7230/Henzai",
        demo: "https://stein-search.onrender.com/#gsc.tab=0",
        color: "green"
      },
      {
        id: 3,
        name: "Online Polling system",
        description: "Microservices orchestration and rate limiting",
        tech: ["Python", "Redis", "Docker", "Nginx"],
        highlights: [
          "Engineered real-time vote aggregation handling 1000+ concurrent users with WebSocket connections",
          "Implemented Redis-based vote deduplication preventing duplicate submissions with 99.9% accuracy",
          "Built responsive dashboard with live chart updates using Socket.io for sub-second result delivery"
        ],
        github: "https://github.com/Happiness7230/alx-project-nexus",
        demo: "https://polling-system-10t5.onrender.com",
        color: "purple"
      }
    ],

    skills: {
      "Backend Frameworks": {
        icon: Code,
        color: "blue",
        items: ["Django", "Django REST Framework", "Express.js", "FastAPI", "Flask"]
      },
      "Databases": {
        icon: Database,
        color: "indigo",
        items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Graphql", "SQLite"]
      },
      "DevOps & Infrastructure": {
        icon: Server,
        color: "purple",
        items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Nginx", "Linux"]
      },
      "Languages & Tools": {
        icon: Terminal,
        color: "green",
        items: ["Python", "JavaScript", "TypeScript", "Bash", "Git", "REST APIs"]
      }
    },

    experience: [
      {
        role: "Backend Developer",
        company: "Mikaelson INitiatives",
        period: "2024- Present",
        description: "Building scalable microservices and optimizing database performance",
        achievements: [
          "Reduced API response time by 45% through query optimization",
          "Implemented CI/CD pipeline reducing deployment time by 70%"
        ]
      },
      {
        role: "Backend Engineer Intern",
        company: "Central IT Solutions",
        period: "2024 - 2025",
        description: "Developed REST APIs and integrated third-party services",
        achievements: [
          "Built payment integration with 100% transaction success rate",
          "Contributed to 5+ production features"
        ]
      }
    ],

    certifications: [
      { name: "ALX Certified Backend Engineer", issuer: "AFRICAN LEADERSHIP EXPERIENCE", year: "2025" },
      { name: "Backend Developer", issuer: "TechCrush", year: "2024" }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colorClasses = {
    blue: {
      border: 'border-blue-500/50',
      hoverBorder: 'hover:border-blue-500',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      shadow: 'shadow-blue-500/10'
    },
    green: {
      border: 'border-green-500/50',
      hoverBorder: 'hover:border-green-500',
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      shadow: 'shadow-green-500/10'
    },
    purple: {
      border: 'border-purple-500/50',
      hoverBorder: 'hover:border-purple-500',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      shadow: 'shadow-purple-500/10'
    },
    indigo: {
      border: 'border-indigo-500/50',
      hoverBorder: 'hover:border-indigo-500',
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-400',
      shadow: 'shadow-indigo-500/10'
    }
  };

  // GitHub SVG Icon Component (replaces deprecated lucide-react Github)
  const GithubIcon = ({ size = 20, className = "" }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-mono font-bold text-xl">
              <span className="text-white">HA</span>
              <span className="text-blue-500">.</span>
              <span className="text-slate-400">py</span>
              <span className="text-green-400">.js</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
              <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
              <a href="#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded transition font-semibold">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#projects" className="block hover:text-blue-400 transition">Projects</a>
              <a href="#skills" className="block hover:text-blue-400 transition">Skills</a>
              <a href="#experience" className="block hover:text-blue-400 transition">Experience</a>
              <a href="#contact" className="block hover:text-blue-400 transition">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        {portfolioData.personal.available && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-900/20 rounded-full border border-blue-800/50">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Mid-Level Backend Roles
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          I engineer scalable systems with<br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            {portfolioData.personal.tagline.split('with ')[1]}
          </span>
        </h1>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.personal.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-white text-slate-900 font-bold rounded hover:bg-slate-200 transition"
          >
            View Projects
          </a>
          <a 
            href={portfolioData.personal.github}
            className="px-8 py-3 border border-slate-700 rounded hover:border-slate-500 hover:bg-slate-800 transition flex items-center justify-center gap-2"
          >
            <GithubIcon size={20} /> GitHub Profile
          </a>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Python', 'Django', 'Node.js', 'Express', 'MySQL', 'Docker', 'Kubernetes', 'Redis'].map(tech => (
            <span key={tech} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300 font-mono">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 mb-12">
          <Terminal className="text-blue-400" size={28} />
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map(project => (
            <div 
              key={project.id}
              className={`group bg-slate-900 border ${colorClasses[project.color].border} ${colorClasses[project.color].hoverBorder} rounded-xl p-6 transition-all hover:shadow-lg ${colorClasses[project.color].shadow}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-xl font-bold ${colorClasses[project.color].text} group-hover:underline`}>
                  {project.name}
                </h3>
                <ExternalLink className="text-slate-600 group-hover:text-white transition" size={18} />
              </div>
              
              <p className="text-slate-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-2">
                {project.highlights.slice(0, 2).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <ChevronRight className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-slate-300 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex gap-3">
                <a href={project.github} className="text-sm text-slate-400 hover:text-white transition flex items-center gap-1">
                  <GithubIcon size={16} /> Code
                </a>
                <a href={project.demo} className="text-sm text-slate-400 hover:text-white transition flex items-center gap-1">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-900/50 py-24 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-green-400" size={28} />
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(portfolioData.skills).map(([category, data]) => {
              const Icon = data.icon;
              const colors = colorClasses[data.color];
              
              return (
                <div 
                  key={category}
                  className={`p-6 bg-slate-800/50 rounded-xl border ${colors.border} ${colors.hoverBorder} transition-all hover:shadow-lg ${colors.shadow}`}
                >
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="font-bold text-white mb-3">{category}</h3>
                  <ul className="space-y-2">
                    {data.items.map(item => (
                      <li key={item} className="text-sm text-slate-400 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.bg}`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-purple-400" size={28} />
          <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
        </div>
        
        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-blue-500 pl-6 pb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 mt-1 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-slate-400 mb-3">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-slate-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-yellow-400" size={24} />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {portfolioData.certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <h4 className="font-bold text-white">{cert.name}</h4>
                <p className="text-sm text-slate-400">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900/50 py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Great</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm currently open to mid-level backend engineering roles. Let's discuss how I can contribute to your team.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Send Email
            </a>
            <a 
              href="#"
              className="px-8 py-3 border border-slate-700 rounded hover:border-slate-500 hover:bg-slate-800 transition flex items-center justify-center gap-2"
            >
              <FileText size={20} /> Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6 text-slate-500">
            <a href={portfolioData.personal.linkedin} className="hover:text-blue-400 transition flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href={portfolioData.personal.github} className="hover:text-white transition flex items-center gap-2">
              <GithubIcon size={20} /> GitHub
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-blue-400 transition flex items-center gap-2">
              <Mail size={20} /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center border-t border-slate-900">
        <p className="text-slate-600 text-sm">
          Engineered by {portfolioData.personal.name} • Built with React & Tailwind CSS
        </p>
        <p className="text-slate-700 text-xs mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;