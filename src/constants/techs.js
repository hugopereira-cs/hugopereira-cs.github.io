/**
 * Configuração centralizada para os badges de tecnologia.
 * Utiliza as cores definidas no index.css para manter a consistência visual.
 *
 * Cores utilizadas (extraídas do index.css):
 * Background: #1e293b (brand-surface)
 * Logo/Text: #e2e8f0 (brand-text-primary)
 */

const BADGE_CONFIG = {
  base_url: 'https://img.shields.io/badge/',
  style: 'for-the-badge',
  colors: {
    bg: '1e293b', // brand-surface (sem o #)
    text: 'e2e8f0' // brand-text-primary (sem o #)
  }
};

export const TECH_DATA = {
  react: { name: 'React', logo: 'react' },
  tailwind: { name: 'TailwindCSS', logo: 'tailwindcss' },
  javascript: { name: 'JavaScript', logo: 'javascript' },
  html5: { name: 'HTML5', logo: 'html5' },
  css3: { name: 'CSS3', logo: 'css3' },
  python: { name: 'Python', logo: 'python' },
  c: { name: 'C', logo: 'c' },
  git: { name: 'Git', logo: 'git' },
  github: { name: 'GitHub', logo: 'github' },
  postgresql: { name: 'PostgreSQL', logo: 'postgresql' }
};

/**
 * Gera a URL do Shields.io baseada na chave da tecnologia.
 * @param {string} techKey - Chave definida no objeto TECH_DATA.
 * @returns {string} URL completa do badge.
 */
export const getTechBadgeUrl = (techKey) => {
  const tech = TECH_DATA[techKey.toLowerCase()];

  if (!tech) return '';

  const label = encodeURIComponent(tech.name);
  const { bg, text } = BADGE_CONFIG.colors;

  return `${BADGE_CONFIG.base_url}${label}-${bg}?style=${BADGE_CONFIG.style}&logo=${tech.logo}&logoColor=${text}`;
};
