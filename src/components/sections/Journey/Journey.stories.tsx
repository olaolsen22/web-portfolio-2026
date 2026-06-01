import type { Meta, StoryObj } from '@storybook/react';
import { Journey } from './Journey';

const meta: Meta<typeof Journey> = {
  title: 'Sections/Journey',
  component: Journey,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Journey>;

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
