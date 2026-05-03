import PropTypes from 'prop-types';

export function ProfileInfo({ role, location }) {
  return (
    <ul className="flex flex-col gap-1 lg:text-lg mb-4">
      <li className="flex flex-row gap-2 items-center">
        <img src="/job.svg" alt="Ícone de pessoa" className="size-4" />
        <span>{role}</span>
      </li>
      <li className="flex flex-row gap-2 items-center">
        <img src="/location.svg" alt="Ícone de localização" className="size-4" />
        <span>{location}</span>
      </li>
    </ul>
  );
}

ProfileInfo.propTypes = {
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};
