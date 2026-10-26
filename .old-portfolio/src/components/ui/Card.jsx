import PropTypes from 'prop-types';

/**
 * Container básico com layout de grid para agrupamento de informações.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Conteúdo interno do card.
 * @component
 */
export function Card({ children }) {
  return (
    <div className="grid grid-cols-1 w-full lg:w-full max-w-xs lg:max-w-lg gap-4 mx-auto mb-4 lg:mb-0">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node
};
