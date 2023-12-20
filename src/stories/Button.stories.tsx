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
