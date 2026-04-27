import { SITE_CONTENT } from '../../constants/content';
import { SectionTitle } from '../ui/SectionTitle';
import { ContactCard } from '../ui/ContactCard';

export function Contact() {
  const contact = SITE_CONTENT.contact;

  return (
    <section className="w-full overflow-x-hidden px-4 lg:pt-4 gap-4 lg:gap-0 place-items-center">
      <SectionTitle>Contate-me</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {contact.map((item, index) => (
          <ContactCard
            key={index}
            name={item.name}
            title={item.title}
            logo={item.logo}
            href={item.url}
          />
        ))}
      </div>
    </section>
  );
}
