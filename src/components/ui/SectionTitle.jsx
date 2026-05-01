import PropTypes from 'prop-types';
import { memo } from 'react';
import { UI_STYLES } from '../../constants/uiStyles';

const SectionTitleComponent = memo(({ children, as: Component = 'h1' }) => {
  return <Component className={UI_STYLES.text.sectionTitle}>{children}</Component>;
});

SectionTitleComponent.displayName = 'SectionTitle';

SectionTitleComponent.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3'])
};
