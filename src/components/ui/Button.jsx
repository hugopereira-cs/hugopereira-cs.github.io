import PropTypes from 'prop-types';
import { ArrowUpRight } from 'lucide-react';

const BUTTON_STYLES = {
  base: 'px-4 py-2 rounded-md shadow-lg transition-colors ease-in border text-lg',
  primary:
    'bg-brand-primary border-brand-primary text-brand-text-primary hover:bg-brand-accent-hover flex items-center gap-2',
  secondary: 'border-brand-primary text-brand-primary hover:bg-brand-accent-hover'
};

/**
 * Componente de botão/link padronizado.
 * @param {Object} props
 * @param {string} props.title - Texto do botão.
 * @param {'primary' | 'secondary'} [props.variant='secondary'] - Estilo visual do botão.
 * @param {string} props.href - URL de destino.
 * @component
 */
export function Button({ title, variant, href }) {
  const variantStyles = variant === 'primary' ? BUTTON_STYLES.primary : BUTTON_STYLES.secondary;
  const className = `${BUTTON_STYLES.base} ${variantStyles}`;

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} (abre em nova aba)`}>
      {title}
      {variant === 'primary' && <ArrowUpRight size={18} aria-hidden="true" />}
    </a>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  href: PropTypes.string.isRequired
};
