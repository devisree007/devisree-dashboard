import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/devisree007',
      label: 'GitHub',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/devisreethota',
      label: 'LinkedIn',
      color: 'hover:text-terminal'
    },
    {
      icon: Mail,
      href: 'mailto:devisreethota9@gmail.com',
      label: 'Email',
      color: 'hover:text-electric'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="font-orbitron font-bold text-2xl gradient-text">
              &lt;Devisree/&gt;
            </div>
            <p className="text-muted-foreground max-w-sm">
              Full Stack Developer passionate about creating innovative solutions 
              and building the future through code.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-card/50 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_currentColor]`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground font-space">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground font-space">
              Get In Touch
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 devisreethota9@gmail.com</p>
              <p>📞 +91 8374800948</p>
              <p>🌍 India</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Open to new opportunities and collaborations
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary hover:text-primary-glow transition-colors duration-300 text-sm font-medium"
              >
                Let's work together &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 Devisree | Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>& Code</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Tech Credits */}
        <div className="py-4 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Built with React + TypeScript + Tailwind CSS | Hosted on Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;