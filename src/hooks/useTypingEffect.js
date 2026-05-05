import { useState, useEffect, useCallback } from 'react';

const INITIAL_DELAY = 1000;
const DEFAULT_SPEED = 50;

/**
 * Hook customizado para criar um efeito de digitação em textos.
 * @param {string} text - O texto completo que será digitado.
 * @param {number} [speed=50] - A velocidade de digitação em milissegundos.
 * @returns {string} O texto que está sendo exibido no momento (progressivo).
 */
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
