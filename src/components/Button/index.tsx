import { Caret } from '../../icons';

import './Button.css';
import '../../index.css';

interface ButtonInterface {
  /** Theme of button */
  theme: 'primary' | 'secondary';

  /** Text of button */
  text: string;

  /** Onclick event of button */
  onClick: React.MouseEventHandler<HTMLButtonElement>;

  /** Disabled state of button */
  disabled?: boolean;

  /** Option to fit button width to its parent width */
  block?: boolean;

  /** With caret icon right */
  caret?: boolean;

  /** Set the icon component of button */
  icon?: JSX.Element;
};

const Button = ({
  theme,
  text,
  onClick,
  disabled = false,
  block = false,
  caret,
  icon
}: ButtonInterface) => {
  const mode = `button--${theme}`;

  return (
    <button
      type="button"
      className={['button', mode, block && 'button--block', disabled && `${mode}--disabled`].join(' ')}
      onClick={onClick}
    >
      <div className='button--text-container'>
        {icon && <div className='icon--container'> {icon} </div>}
        {text}
        {caret && <div className='caret--container'> <Caret /> </div>}
      </div>
    </button>
  );
};

export default Button;