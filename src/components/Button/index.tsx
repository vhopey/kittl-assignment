import CaretIcon from './CaretIcon';

import './Button.css';
import '../../index.css';

interface ButtonInterface {
  theme: 'primary' | 'secondary'; // add enum
  text: string;
  disabled?: boolean;
  caret?: boolean;
  icon?: JSX.Element
};

const Button = ({ theme, text, disabled = false, caret, icon }: ButtonInterface) => {
  const mode = `button--${theme}`;

  return (
    <button
      type="button"
      className={['button', mode, disabled && `${mode}--disabled`].join(' ')}
    >
      <div className='button--text-container'>
        {icon && <div className='icon--container'> {icon} </div>}
        {text}
        {caret && <div className='caret--container'> <CaretIcon /> </div>}
      </div>
    </button>
  );
};

export default Button;