import CaretIcon from './CaretIcon';

import './Button.css';
import '../../index.css';

interface ButtonInterface {
  theme: 'primary' | 'secondary'; // add enum
  text: string;
  disabled?: boolean;
  caret?: boolean;
  // icon
};

// add enum for colors
const getIconColor = (theme: string, disabled: boolean): string => {
  if(disabled) {
    return "#979797";
  }

  if(theme === "secondary") {
    return "#BA985D";
  } else {
    return "#FFFFFF";
  }
};

const Button = ({ theme, text, disabled = false, caret }: ButtonInterface) => {
  const mode = `button--${theme}`;
  const iconColor = getIconColor(theme, disabled);

  return (
    <button
      type="button"
      className={['button', mode, disabled && `${mode}--disabled`].join(' ')}
    >
      <div className='button--text-container'>
        {text}
        {caret && <div className='button--caret'> <CaretIcon color={iconColor}/> </div>}
      </div>
    </button>
  );
};

export default Button;