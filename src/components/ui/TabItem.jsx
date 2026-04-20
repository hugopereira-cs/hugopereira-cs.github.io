import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export function TabItem({ value, title, isSelected = false }) {
  return (
    <Tabs.TabsTrigger
      value={value}
      className="relative cursor-pointer px-1 font-medium hover:text-brand-text-primary data-[state=active]:text-brand-accent-hover">
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 -bottom-5.5 right-0 h-0.5 bg-brand-accent-hover"
        />
      )}
    </Tabs.TabsTrigger>
  );
}

TabItem.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
};
