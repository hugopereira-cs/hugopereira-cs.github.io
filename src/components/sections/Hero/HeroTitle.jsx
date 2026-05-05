import PropTypes from 'prop-types';
import { TypingCursor } from '../../ui/TypingCursor';
import { useTypingEffect } from '../../../hooks/useTypingEffect';
import { HERO_STYLES } from '../../../constants/heroStyles';

/**
 * Título principal da seção Hero com efeito de digitação.
 * @param {Object} props
 * @param {string} props.text - O texto a ser animado.
 * @param {number} [props.speed=70] - Velocidade da animação em milissegundos.
 * @component
 */
export function HeroTitle({ text, speed = 70 }) {
  const animatedText = useTypingEffect(text, speed);

  return (
    <h1 aria-live="polite" className={HERO_STYLES.title}>
      {animatedText}
      <TypingCursor />
    </h1>
  );
}

HeroTitle.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number
};
