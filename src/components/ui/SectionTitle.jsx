import PropTypes from 'prop-types';
import { UI_STYLES } from '../../constants/uiStyles';

export function SectionTitle({ children }) {
  return <h1 className={UI_STYLES.text.sectionTitle}>{children}</h1>;
}

SectionTitle.propTypes = {
  children: PropTypes.node
};
