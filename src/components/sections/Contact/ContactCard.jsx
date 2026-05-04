import PropTypes from 'prop-types';
import { UI_STYLES } from '../../../constants/uiStyles';

export function ContactCard({ name, title, logo, href, username }) {
  return (
    <div className={UI_STYLES.card.default}>
      <h2 className="text-center font-semibold text-brand-text-primary lg:text-lg">{title}</h2>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-2 items-center pt-4">
        <img src={logo} alt={`Logo do ${name}`} className="size-16" />
        <p className=" text-brand-accent underline hover:text-brand-accent-hover transition-colors">
          {username}
        </p>
      </a>
    </div>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};
