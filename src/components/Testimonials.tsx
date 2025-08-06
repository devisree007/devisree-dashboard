import { Quote, Star, Award, Trophy, Target } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      company: 'TechCorp',
      content: 'Devisree demonstrates exceptional problem-solving skills and attention to detail. Her code is clean, efficient, and well-documented.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Project Manager',
      company: 'InnovateLabs',
      content: 'Working with Devisree was a pleasure. She consistently delivered high-quality work on time and was always eager to learn new technologies.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Tech Lead',
      company: 'StartupHub',
      content: 'Devisree\'s passion for coding and dedication to continuous learning makes her a valuable asset to any development team.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Full Stack Internship - 2025',
      description: 'Successfully completed comprehensive training program',
      color: 'text-yellow-400'
    },
    {
      icon: Award,
      title: 'Multiple Mini-Projects',
      description: 'Created and deployed various independent projects',
      color: 'text-primary'
    },
    {
      icon: Target,
      title: 'Code Quality Excellence',
      description: 'Maintained high standards in all projects',
      color: 'text-terminal'
    },
    {
      icon: Star,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and frameworks',
      color: 'text-electric'
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
            Testimonials & Achievements
          </h2>
          <p className="text-xl text-muted-foreground font-space max-w-2xl mx-auto">
            What others say about my work and key milestones in my journey
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Testimonials */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground font-space text-center lg:text-left">
              Client Testimonials
            </h3>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="glass p-6 rounded-lg hover:border-primary/50 transition-all duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    {/* Quote Icon */}
                    <Quote className="text-primary" size={24} />
                    
                    {/* Content */}
                    <p className="text-foreground/90 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground font-space text-center lg:text-left">
              Key Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="glass p-6 rounded-lg hover:border-primary/50 transition-all duration-300 group animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-card/50 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-foreground font-space">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 glass p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground font-space mb-4">
            Want to work together?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects and bring innovative ideas to life. 
            Let's create something amazing together!
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-neon px-8 py-3 font-space text-lg transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;