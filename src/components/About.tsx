import { Code, Heart, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Turning creative ideas into reality'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and scalability'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Love for creating amazing experiences'
    }
  ];

  return (
    <section id="about" className="section-padding bg-card/20">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed font-space">
              <p className="text-foreground/90">
                I'm a Full Stack Developer who loves building scalable, elegant, and user-friendly web applications. 
                With hands-on experience in frontend and backend technologies, I enjoy bringing ideas to life through 
                clean code and modern design.
              </p>
              
              <p className="text-foreground/80">
                My journey in tech started with curiosity about how websites work, and it has evolved into a passion 
                for creating innovative solutions that make a difference. I believe in continuous learning and staying 
                updated with the latest technologies and best practices.
              </p>

              <p className="text-foreground/80">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or mentoring aspiring developers. I'm always excited to take on new challenges and collaborate on 
                meaningful projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl font-bold text-terminal">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl font-bold text-electric">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="glass p-6 rounded-lg hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <highlight.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground font-space">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;