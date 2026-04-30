import { useState, useEffect, useCallback } from 'react';

const INITIAL_DELAY = 1000;
const DEFAULT_SPEED = 50;

export function useTypingEffect(text = '', speed = DEFAULT_SPEED) {
  const [displayedText, setDisplayedText] = useState('');

  const type = useCallback(() => {
    let index = 0;
    let timeoutID;

    const typeCharacter = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        timeoutID = setTimeout(typeCharacter, speed); // * Recursão com delay
      }
    };

    timeoutID = setTimeout(typeCharacter, INITIAL_DELAY);

    return () => clearTimeout(timeoutID);
  }, [text, speed]);

  useEffect(() => {
    return type();
  }, [type]);

  return displayedText;
}
