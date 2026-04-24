import PropTypes from 'prop-types';
import { ArrowUpRight } from 'lucide-react';

export function Button({ title, variant, href }) {
  const className =
    variant === 'primary'
      ? 'flex items-center gap-2 px-4 py-2 bg-brand-primary border border-brand-primary text-lg text-brand-text-primary rounded-md shadow-lg transition-colors hover:bg-brand-accent-hover ease-in'
      : 'px-4 py-2 border border-brand-primary text-lg text-brand-primary rounded-md shadow-lg transition-colors hover:bg-brand-accent-hover ease-in';

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {title}
      {variant === 'primary' && <ArrowUpRight size={18} />}
    </a>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  href: PropTypes.string.isRequired
};
