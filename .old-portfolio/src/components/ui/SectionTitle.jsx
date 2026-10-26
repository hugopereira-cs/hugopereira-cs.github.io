import PropTypes from 'prop-types';
import { UI_STYLES } from '../../constants/uiStyles';

/**
 * Título padrão para as seções do site.
 * Garante consistência visual em todos os títulos de seção.
 * @param {Object} props
 * @param {React.ReactNode} props.children - O texto do título.
 * @component
 */
export function SectionTitle({ children }) {
  return <h1 className={UI_STYLES.text.sectionTitle}>{children}</h1>;
}

SectionTitle.propTypes = {
  children: PropTypes.node
};
