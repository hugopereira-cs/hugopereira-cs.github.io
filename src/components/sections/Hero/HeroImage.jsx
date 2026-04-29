import PropTypes from 'prop-types';
import { HERO_STYLES } from '../../../constants/heroStyles';

export function HeroImage({ src, altText }) {
  // 'loading="lazy"' evita que o navegador baixe todas as imagens de uma vez ao renderizar o componente
  // 'decoding="async"' diz ao navegador para decodificar a imagem de forma assíncrona, ou seja, sem bloquear a renderização do texto e do layout da página
  return (
    <div className={HERO_STYLES.imageConatiner}>
      <img
        src={src}
        alt={`Imagem do Dev ${altText}`}
        className={HERO_STYLES.image}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
};
