import { Card } from './Card';
import PropTypes from 'prop-types';
import { Button } from './Button';

export function ProjectItem({ title, description, image, features, projectURL, gitHubURL }) {
  return (
    <Card>
      <img src={image} alt={`Imagem do projeto ${title}`} className="rounded" />
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-brand-text-primary">{title}</h1>
        <p className="text-brand-text-primary">{description}</p>
        <ul className="text-brand-text-secondary pl-8 list-disc list-outside">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-4">
        <Button href={projectURL} title="Ver Projeto" variant="primary" />
        <Button href={gitHubURL} title="Repositório" />
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
  gitHubURL: PropTypes.string.isRequired
};
