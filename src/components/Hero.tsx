import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const texts = ["Hi, I'm Devisree_", "Full Stack Developer_", "Code Enthusiast_"];
  const currentText = texts[currentIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentText, isDeleting]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Here you would implement actual audio playback
  };

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:devisreethota9@gmail.com',
      label: 'Email',
      color: 'text-primary'
    },
    {
      icon: Github,
      href: 'https://github.com/devisree007',
      label: 'GitHub',
      color: 'text-terminal'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/devisreethota',
      label: 'LinkedIn',
      color: 'text-electric'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            {/* Typing Animation */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold">
                <span className="gradient-text neon-glow">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-space">
                Building the future, one line of code at a time
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 font-space leading-relaxed">
                Passionate Full Stack Developer with expertise in modern web technologies. 
                I create scalable, elegant, and user-friendly applications that bring ideas to life.
              </p>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'Python', 'Java'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm bg-primary/20 text-primary border border-primary/30 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="btn-neon font-space text-lg px-8 py-6"
              >
                <a 
                  href="https://github.com/devisree007/portfolio/raw/main/Devisree_Thota_Resume1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </Button>
              
              <Button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-terminal font-space text-lg px-8 py-6"
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`${social.color} hover:scale-110 transition-all duration-300 p-3 rounded-full bg-card/20 backdrop-blur-sm border border-current/20 hover:shadow-[0_0_20px_currentColor]`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Code Animation */}
          <div className="lg:block hidden animate-slide-in-right">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                </div>
                <div className="flex-1 text-center text-sm text-muted-foreground font-mono">
                  portfolio.js
                </div>
              </div>
              <div className="terminal-content space-y-2">
                <div className="font-mono text-sm">
                  <div className="text-muted-foreground">// Welcome to my portfolio</div>
                  <div>
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-function">developer</span> = {'{'}
                  </div>
                  <div className="ml-4">
                    <span className="code-keyword">name</span>: <span className="code-string">"Devisree Thota"</span>,
                  </div>
                  <div className="ml-4">
                    <span className="code-keyword">role</span>: <span className="code-string">"Full Stack Developer"</span>,
                  </div>
                  <div className="ml-4">
                    <span className="code-keyword">skills</span>: [<span className="code-string">"HTML"</span>, <span className="code-string">"CSS"</span>, <span className="code-string">"JS"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"Java"</span>],
                  </div>
                  <div className="ml-4">
                    <span className="code-keyword">passion</span>: <span className="code-string">"Building amazing things"</span>,
                  </div>
                  <div className="ml-4">
                    <span className="code-function">code</span>: () =&gt; <span className="code-string">"Dreams into Reality"</span>
                  </div>
                  <div>{'}'}</div>
                  <div className="mt-4">
                    <span className="code-function">console</span>.<span className="code-keyword">log</span>(<span className="code-string">"Ready to create awesome projects!"</span>);
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Music Toggle */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-20 p-3 glass rounded-full text-primary hover:text-primary-glow transition-all duration-300 hover:scale-110"
        aria-label="Toggle ambient music"
      >
        {isPlaying ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;