import PropTypes from 'prop-types';

export function Card({ children }) {
  return <div className="flex flex-col w-auto md:w-90 max-w-dvw gap-4 mx-8 mb-4">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node
};
