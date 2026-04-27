import PropTypes from 'prop-types';

export function ContactCard({ name, title, logo, href }) {
  return (
    <div>
      <div className="border border-brand-border rounded p-4">
        <h2>{title}</h2>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-2 items-center text-brand-accent underline pt-4 hover:text-brand-accent-hover transition-colors">
          <img src={logo} alt={`Logo do ${name}`} className="size-16" />
          {/* TODO: Adicionar Username aqui */}
        </a>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};
