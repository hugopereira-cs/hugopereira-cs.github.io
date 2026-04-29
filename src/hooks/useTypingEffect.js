import { useState, useEffect } from 'react';

export function useTypingEffect(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timeoutId;
    let index = 0;
    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        // Agenda a execução do próximo caractere
        timeoutId = setTimeout(type, speed);
      }
    };

    // Delay incial
    timeoutId = setTimeout(type, 1000);

    return () => clearTimeout(timeoutId);
  }, [text, speed]);

  return displayedText;
}
