import type { Meta, StoryObj } from '@storybook/react';
import { Connect } from './Connect';

const meta: Meta<typeof Connect> = {
  title: 'Sections/Connect',
  component: Connect,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Connect>;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => {
      document.documentElement.classList.add('dark');
      return <Story />;
    },
  ],
};
