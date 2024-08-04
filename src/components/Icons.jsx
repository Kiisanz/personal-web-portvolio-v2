// src/components/FontAwesomeIcon.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../utils/icons/icons.js'; // Impor ikon dari file

const Icons = ({ iconName, size = '1x', className = '' }) => {
  const icon = icons[iconName];

  if (!icon) {
    return <p>Icon not found</p>;
  }

  return <FontAwesomeIcon icon={icon} size={size} className={className} />;
};

export default Icons;
