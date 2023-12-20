import './button.css';

interface ButtonInterface {
  theme: 'primary' | 'secondary';
  text: string;
  disabled?: boolean;
  // icon
  // caret
}

const Button = ({ theme, text, disabled }: ButtonInterface) => {
  const mode = theme === 'primary' ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', mode].join(' ')}
    >
      {text}
    </button>
  );
};

export default Button;