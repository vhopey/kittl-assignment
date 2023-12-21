import Button from '../components/Button';

export default {
  title: 'Button',
    args: {
    theme: 'primary',
    text: 'Button',
  },
  component: Button,
}

export const Primary = {} 

export const Secondary = {
  args: {
    theme: 'secondary',
    text: 'Button',
  },
};

export const WithCaret = {
  args: {
    theme: 'secondary',
    text: 'Button',
    caret: true
  },
};

export const WithIcon = {
  args: {
    theme: 'secondary',
    text: 'Button',
  },
};
