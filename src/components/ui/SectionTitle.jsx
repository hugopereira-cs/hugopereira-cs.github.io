import PropTypes from 'prop-types';
// TODO: refactor
export function SectionTitle({ children }) {
  return (
    <h1 className="text-4xl text-center font-semibold text-brand-text-primary lg:text-5xl mb-8 tracking-wide">
      {children}
    </h1>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node
};
