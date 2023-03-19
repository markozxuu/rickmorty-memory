import { Link as LinkRouter } from '@reach/router';
import cx from 'clsx';

// Styles
import './link.scss';

type TypeLink = 'primary' | 'secondary';

interface LinkProps {
  type: TypeLink;
  label: string;
  path: string;
}

const Link = ({ type, label, path }: LinkProps) => {
  const linkClass = cx('btn', {
    primary: type === 'primary',
    secondary: type === 'secondary',
  });
  return (
    <LinkRouter to={path} className={linkClass}>
      {label}
    </LinkRouter>
  );
};

export default Link;
