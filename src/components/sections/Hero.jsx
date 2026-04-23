import { useState, useEffect } from 'react';

function useTypingEffect(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
}

export function Hero() {
  const fullText = '<Olá, sou Hugo, Desenvolvedor Front-end />';
  const animatedText = useTypingEffect(fullText, 70);

  return (
    <div className="flex flex-col w-auto max-w-dvw justify-evenly items-center mx-8 md:flex-row md:gap-8">
      <div className="flex flex-col gap-4 max-w-116 flex-1 justify-center">
        <h1 className="font-title bg-brand-gradient bg-clip-text text-transparent text-4xl min-h-[3em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:min-h-auto">
          {animatedText}
          <span className="inline-block w-0.5 h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle"></span>
        </h1>
        <p className="text-sm md:text-base">
          <b>Criatividade em Código &</b> Desenvolvimento Front-end
        </p>
      </div>
      <div className="flex-1 flex justify-center max-w-180">
        {/* TODO: Trocar imagem */}
        <img
          src="./professional-photo.png"
          alt="Imagem do Dev Hugo Pereira"
          className="w-auto max-h-180 mt-8 md:mt-0 border-2 border-brand-border"
        />
      </div>
    </div>
  );
}
