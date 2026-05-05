import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Item individual de aba para o cabeçalho.
 * Inclui uma animação de sublinhado quando selecionado.
 * @param {Object} props
 * @param {string} props.value - O valor identificador da aba (rota).
 * @param {string} props.title - O texto exibido na aba.
 * @param {boolean} [props.isSelected=false] - Indica se a aba está ativa.
 * @component
 */
export function TabItem({ value, title, isSelected = false }) {
  return (
    <Tabs.TabsTrigger
      value={value}
      className="relative cursor-pointer px-1 font-medium hover:text-brand-text-primary data-[state=active]:text-brand-accent-hover">
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 -bottom-6 right-0 h-0.5 bg-brand-accent-hover"
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
