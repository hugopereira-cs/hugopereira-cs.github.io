import PropTypes from 'prop-types';
import { SITE_CONTENT } from '../../../constants/content';
import { HERO_STYLES } from '../../../constants/heroStyles';
import { HeroImage } from './HeroImage';
import { HeroTitle } from './HeroTitle';
import { memo } from 'react';

const HeroContent = memo(({ hero }) => {
  return (
    <section className={HERO_STYLES.container}>
      <div className={HERO_STYLES.textContainer}>
        <HeroTitle text={hero.title} speed={70} />
        <p className={HERO_STYLES.slogan}>
          <strong>{hero.slogan}</strong>
        </p>
      </div>
      <HeroImage src={hero.image} altText={`Imagem do Deev ${hero.name}`} />
    </section>
  );
});

HeroContent.displayName = 'HeroContent';
HeroContent.propTypes = { hero: PropTypes.object.isRequired };

export function Hero() {
  const { hero } = SITE_CONTENT;
  return <HeroContent hero={hero} />;
}
