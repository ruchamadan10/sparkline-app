import {
  LogoIcon,
} from './Common';

const Icon = ({ name, color }) => {
  let IconComponent = null;

  switch (name) {
    // Common Icons
    case 'logo':
      IconComponent = LogoIcon;
      break;

    default:
      return <></>;
  }

  return <IconComponent name={name} color={color} />;
};

export default Icon;
