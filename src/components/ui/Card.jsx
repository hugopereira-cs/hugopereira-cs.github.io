import PropTypes from 'prop-types';
import { memo } from 'react';

const CardContent = memo(({ children, className = '' }) => {
  const baseClasses =
    'grid grid-cols-1 w-full lg:w-full max-w-xs lg:max-w-lg gap-4 mx-auto mb-4 lg:mb-0';

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
});

CardContent.displayName = 'CardContent';
CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export const Card = memo(CardContent);
