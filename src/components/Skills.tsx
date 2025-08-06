import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      name: 'HTML',
      level: 90,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400',
      description: 'Semantic markup and accessibility'
    },
    {
      name: 'CSS',
      level: 85,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400',
      description: 'Modern CSS, Flexbox, Grid, Animations'
    },
    {
      name: 'JavaScript',
      level: 80,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400',
      description: 'ES6+, DOM manipulation, Async programming'
    },
    {
      name: 'Python',
      level: 75,
      color: 'text-green-400',
      bgColor: 'bg-green-400',
      description: 'Backend development, Data structures'
    },
    {
      name: 'Java',
      level: 70,
      color: 'text-red-400',
      bgColor: 'bg-red-400',
      description: 'OOP principles, Spring framework basics'
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground font-space max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass p-6 rounded-lg hover:border-primary/50 transition-all duration-300 group animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className={`text-2xl font-bold font-orbitron ${skill.color}`}>
                    {skill.name}
                  </h3>
                  <span className="text-lg font-mono text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full ${skill.bgColor} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: hoveredSkill === skill.name || hoveredSkill === null ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground font-space">
                    {skill.description}
                  </p>
                </div>

                {/* Skill Icon/Visual */}
                <div className="flex justify-center pt-4">
                  <div className={`w-16 h-16 rounded-full ${skill.bgColor}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`text-2xl font-bold ${skill.color}`}>
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground font-space mb-8">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git & GitHub',
              'VS Code',
              'Responsive Design',
              'Web APIs',
              'Debugging',
              'Problem Solving',
              'Team Collaboration',
              'Agile Methodology'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm font-space hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;