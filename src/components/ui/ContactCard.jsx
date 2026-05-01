import PropTypes from 'prop-types';
import { memo } from 'react';
import { UI_STYLES } from '../../constants/uiStyles';
import { contactItemShape } from '../../constants/propShapes';

const ContactCardComponent = memo(({ name, title, logo, url, username }) => {
  return (
    <div className={UI_STYLES.card.default}>
      <h2 className={`text-center font-semibold text-brand-text-primary lg:text-lg`}>{title}</h2>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-2 items-center pt-4"
        aria-label={`Contato via ${name} - ${username}`}>
        <img
          src={logo}
          alt={`Logo do ${name}`}
          className="size-16"
          loading="lazy"
          decoding="async"
        />
        <p className=" text-brand-accent underline hover:text-brand-accent-hover transition-colors">
          {username}
        </p>
      </a>
    </div>
  );
});

ContactCardComponent.displayName = 'ContactCard';

export const ContactCard = ContactCardComponent;

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export function ContactCardFromData({ data }) {
  return <ContactCard {...data} />;
}

ContactCardFromData.propTypes = {
  data: contactItemShape.isRequired
};
