import { HERO_STYLES } from '../../constants/heroStyles';

/**
 * Cursor piscante para simular o efeito de digitação.
 * @component
 */
export function TypingCursor() {
  return <span aria-hidden="true" className={HERO_STYLES.cursor} />;
}
