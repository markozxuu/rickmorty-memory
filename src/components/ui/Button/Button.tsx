import cx from 'clsx';

// Styles
import './button.scss';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
}

const Button = ({ type = 'primary', label, onClick }: ButtonProps) => {
  const btnClass = cx('btn', {
    primary: type === 'primary',
    secondary: type === 'secondary',
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
