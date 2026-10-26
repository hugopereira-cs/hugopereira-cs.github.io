import PropTypes from 'prop-types';

export function MainLayout({ children }) {
  return (
    <div className="bg-brand-surface shadow-soft border border-brand-border h-[calc(100vh-2rem)] lg:h-[calc(100vh-6rem)] overflow-y-auto scrollbar-modern my-4 mx-4 lg:my-12 lg:mx-12">
      {children}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};
