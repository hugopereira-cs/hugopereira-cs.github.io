import PropTypes from 'prop-types';
import { TypingCursor } from '../../ui/TypingCursor';
import { useTypingEffect } from '../../../hooks/useTypingEffect';
import { HERO_STYLES } from '../../../constants/heroStyles';

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
