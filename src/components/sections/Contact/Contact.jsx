import { SITE_CONTENT } from '../../../constants/content';
import { UI_STYLES } from '../../../constants/uiStyles';
import { SectionTitle } from '../../ui/SectionTitle';
import { ContactCard } from './ContactCard';

export function Contact() {
  const contact = SITE_CONTENT.contact;

  return (
    <section className={UI_STYLES.container.section + ' place-items-center'}>
      <SectionTitle>Contate-me</SectionTitle>
      <div className={UI_STYLES.grid.threeColumns}>
        {contact.map((item, index) => (
          <ContactCard
            key={index}
            name={item.name}
            title={item.title}
            logo={item.logo}
            href={item.url}
            username={item.username}
          />
        ))}
      </div>
    </section>
  );
}
