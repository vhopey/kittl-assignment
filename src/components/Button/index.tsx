import './button.css';

interface ButtonInterface {
  theme: 'primary' | 'secondary';
  text: string;
  disabled?: boolean;
  // icon
  // caret
}

const Button = ({ theme, text, disabled }: ButtonInterface) => {
  const mode = `button--${theme}`;

  return (
    <button
      type="button"
      className={['button', mode].join(' ')}
    >
      {text}
    </button>
  );
};

export default Button;