import { SITE_CONTENT } from '../../../constants/content';
import { Card } from '../../ui/Card';
import { AboutTabs } from './AboutTabs';
import { ProfileInfo } from './ProfileInfo';
import { UI_STYLES } from '../../../constants/uiStyles';

/**
 * Seção "Sobre Mim" do portfólio.
 * Renderiza a imagem de perfil, informações básicas (cargo, localização)
 * e as abas detalhadas de habilidades, educação e experiência.
 * @component
 */
export function About() {
  const { about } = SITE_CONTENT;

  return (
    <section className="w-full overflow-x-hidden px-4 lg:pt-4 grid grid-cols-1 lg:flex lg:flex-col gap-4 lg:gap-5 place-items-center">
      <div className="lg:flex lg:gap-4">
        <img
          src={about.image}
          alt={`Imagem de Perfil de ${SITE_CONTENT.hero.name}`}
          className="flex max-w-48 lg:max-w-80 justify-self-center"
        />
        <div className="lg:justify-self-start">
          <Card>
            <h2 className={UI_STYLES.text.heading2}>Sobre Mim</h2>
            <ProfileInfo role={about.role} location={about.location} />
            <p className={UI_STYLES.text.large}>{about.description}</p>
          </Card>
        </div>
      </div>
      <AboutTabs />
    </section>
  );
}
