import PropTypes from 'prop-types';

export function MainLayout({ children }) {
  return (
    <div className="bg-brand-surface shadow-soft border border-brand-border h-auto min-h-[80vh] my-4 mx-4 lg:my-12 lg:mx-12">
      {children}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};
