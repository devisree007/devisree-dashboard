import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bootSequence = [
    '> Initializing Devisree Portfolio System...',
    '> Loading core modules...',
    '> [████████████████████████████████] 100%',
    '> Connecting to neural networks...',
    '> Scanning for creative algorithms...',
    '> Loading skill matrices...',
    '> [████████████████████████████████] 100%',
    '> Establishing secure connections...',
    '> Booting developer interface...',
    '> System ready. Welcome to the future.',
    '> Launching portfolio...'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= bootSequence.length - 1) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(timer);
  }, [onComplete, bootSequence.length]);

  if (!isVisible) return null;

  return (
    <div className={`preloader ${!isVisible ? 'hidden' : ''}`}>
      <div className="terminal-window w-full max-w-2xl mx-4">
        <div className="terminal-header">
          <div className="terminal-dots">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
          </div>
        </div>
        <div className="terminal-content">
          <div className="font-mono">
            {bootSequence.slice(0, currentLine + 1).map((line, index) => (
              <div 
                key={index} 
                className={`text-terminal ${index === currentLine ? 'terminal-cursor' : ''}`}
              >
                {line}
                {index === currentLine && <span className="terminal-cursor">_</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;