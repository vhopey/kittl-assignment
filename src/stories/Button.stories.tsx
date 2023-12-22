import Button from '../components/Button';
import { Caret, Bookmark } from '../icons';

const icons = { bookmark: <Bookmark />, caret: <Caret /> }

export default {
  title: 'Button',
  args: {
    theme: 'primary',
    text: 'Button',
    onClick: () => alert('click!')
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          bookmark: 'Bookmark icon',
          caret: 'Caret icon',
        },
      },
    },
    onClick: {
      control: 'none'
    }
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
    icon: <Bookmark />
  },
};

export const BlockButton = {
  args: {
    text: 'Button',
    block: true,
  },
};
