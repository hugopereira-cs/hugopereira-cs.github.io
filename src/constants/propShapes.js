import PropTypes from 'prop-types';

export const heroShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
});

export const aboutShap = PropTypes.shape({
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tabs: PropTypes.object.isRequired
});

export const projectShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string),
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectURL: PropTypes.string.isRequired,
  gitHubURL: PropTypes.string.isRequired
});

export const contactItemShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
});

export const languageShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired
});

export const educationShape = PropTypes.shape({
  institution: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired
});

export const courseShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired
});
