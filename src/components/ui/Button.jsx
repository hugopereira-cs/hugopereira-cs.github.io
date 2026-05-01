import PropTypes from 'prop-types';
import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { UI_STYLES } from '../../constants/uiStyles';

const ButtonComponent = memo(({ title, variant = 'primary', href, 'aria-label': ariaLabel }) => {
  const variantStyles = variant === 'primary' ? UI_STYLES.primary : UI_STYLES.secondary;

  const className = `${UI_STYLES.base} ${variantStyles}`;

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || `${title} (abre em nova aba)`}>
      {title}
      {variant === 'primary' && <ArrowUpRight size={18} aria-hidden="true" />}
    </a>
  );
});

ButtonComponent.displayName = 'Button';

export const Button = ButtonComponent;

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  href: PropTypes.string.isRequired,
  'aria-label': PropTypes.string
};
