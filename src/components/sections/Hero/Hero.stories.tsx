import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

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
