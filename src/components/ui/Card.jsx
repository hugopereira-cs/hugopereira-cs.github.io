import PropTypes from 'prop-types';

export function Card({ children }) {
  return (
    <div className="grid grid-cols-1 w-96 lg:w-full max-w-xs lg:max-w-lg gap-4 lg:gap-8 mx-auto mb-4 lg:mb-0">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node
};
