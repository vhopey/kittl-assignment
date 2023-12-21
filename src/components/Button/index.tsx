import './Button.css';
import '../../index.css'

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
      className={['button', mode, disabled && `${mode}--disabled`].join(' ')}
    >
      {text}
    </button>
  );
};

export default Button;