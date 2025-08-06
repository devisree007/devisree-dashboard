import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tempProject from '@/assets/project-temp.jpg';
import gameProject from '@/assets/project-game.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Temperature Converter',
      description: 'A sleek and responsive temperature converter that seamlessly converts between Celsius and Fahrenheit with real-time calculations and smooth animations.',
      image: tempProject,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Real-time conversion',
        'Responsive design',
        'Input validation',
        'Smooth animations'
      ],
      githubUrl: 'https://github.com/devisree007',
      liveUrl: '#',
      type: 'Web Application'
    },
    {
      title: 'Number Guessing Game',
      description: 'An engaging console-based Python game where players guess a randomly generated number with intelligent feedback and scoring system.',
      image: gameProject,
      technologies: ['Python'],
      features: [
        'Random number generation',
        'Smart hint system',
        'Score tracking',
        'Multiple difficulty levels'
      ],
      githubUrl: 'https://github.com/devisree007',
      liveUrl: '#',
      type: 'Console Game'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground font-space max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-mono">
                    {project.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground font-space">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-terminal/20 text-terminal border border-terminal/30 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-electric rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button asChild className="btn-neon flex-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </Button>
                  <Button asChild className="btn-terminal flex-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <Button asChild className="btn-electric text-lg px-8 py-6">
            <a
              href="https://github.com/devisree007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;