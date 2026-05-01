import { Card } from './Card';
import PropTypes from 'prop-types';
import { Button } from './Button';

export function ProjectItem({ title, description, image, features, projectURL, gitHubURL }) {
  return (
    <Card>
      <img src={image} alt={`Imagem do projeto ${title}`} className="w-full h-auto rounded" />
      <div className="grid-cols-1">
        <h2 className="text-2xl font-semibold text-brand-text-primary mb-2">{title}</h2>
        <p className="text-lg text-brand-text-primary mb-1">{description}</p>
        <ul className="text-lg text-brand-text-secondary pl-8 list-disc list-outside">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-4">
        <Button href={projectURL} title="Ver Projeto" variant="primary" />
        <Button href={gitHubURL} title="Repositório" variant="secondary" />
      </div>
    </Card>
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectURL: PropTypes.string.isRequired,
  gitHubURL: PropTypes.string.isRequired,
  className: PropTypes.string
};
