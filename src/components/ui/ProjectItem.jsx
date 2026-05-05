import { Card } from './Card';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { UI_STYLES } from '../../constants/uiStyles';

/**
 * Card de exibição de um projeto individual.
 * Inclui imagem, título, descrição, lista de funcionalidades e links.
 * @param {Object} props
 * @param {string} props.title - Título do projeto.
 * @param {string} props.description - Breve descrição.
 * @param {string} props.image - URL da imagem de capa.
 * @param {string[]} props.features - Lista de funcionalidades principais.
 * @param {string} props.projectURL - Link para o projeto online.
 * @param {string} props.gitHubURL - Link para o repositório.
 * @component
 */
export function ProjectItem({ title, description, image, features, projectURL, gitHubURL }) {
  return (
    <Card>
      <img src={image} alt={`Imagem do projeto ${title}`} className={UI_STYLES.image.rounded} />
      <div className="grid-cols-1">
        <h2 className={UI_STYLES.text.heading3}>{title}</h2>
        <p className={UI_STYLES.text.base && UI_STYLES.text.large}>{description}</p>
        <ul className={`${UI_STYLES.text.secondary} lg:text-lg pl-8 list-disc list-outside`}>
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
  gitHubURL: PropTypes.string.isRequired,
  className: PropTypes.string
};
