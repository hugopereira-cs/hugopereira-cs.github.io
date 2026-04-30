/**
 * Constantes de estilos reutilizáveis em todo o projeto
 */

export const UI_STYLES = {
  // Containers
  container: {
    fullWidth: 'w-full overflow-x-hidden',
    section: 'w-full overflow-x-hidden px-4 lg:pt-4'
  },

  // Grid
  grid: {
    responsive: 'grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8',
    threeColumns: 'grid grid-cols-1 lg:grid-cols-3 gap-4',
    twoColumns: 'grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0'
  },

  // Typography
  text: {
    sectionTitle:
      'text-4xl text-center font-semibold text-brand-text-primary lg:text-5xl mb-8 tracking-wide',
    heading2:
      'text-3xl text-center lg:text-start lg:text-4xl font-semibold text-brand-text-primary mb-2 tracking-wide',
    heading3: 'text-2xl font-semibold text-brand-text-primary mb-2',
    base: 'text-brand-text-primary',
    secondary: 'text-brand-text-secondary',
    small: 'text-sm',
    large: 'lg:text-lg'
  },

  // Card
  card: {
    default: 'border border-brand-border rounded p-4'
  },

  // Button
  button: {
    base: 'px-4 py-2 rounded-md shadow-lg transition-colors ease-in border text-lg',
    primary:
      'bg-brand-primary border-brand-primary text-brand-text-primary hover:bg-brand-accent-hover flex items-center gap-2',
    secondary: 'border-brand-primary text-brand-primary hover:bg-brand-accent-hover'
  },

  // Images
  image: {
    rounded: 'rounded',
    responsive: 'w-auto h-auto'
  },

  // Borders
  border: {
    default: 'border border-brand-border',
    bottom: 'border-b border-brand-border'
  }
};
