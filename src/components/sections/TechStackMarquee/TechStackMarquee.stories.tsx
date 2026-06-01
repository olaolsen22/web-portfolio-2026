import type { Meta, StoryObj } from '@storybook/react';
import { TechStackMarquee } from './TechStackMarquee';

const meta: Meta<typeof TechStackMarquee> = {
  title: 'Sections/TechStackMarquee',
  component: TechStackMarquee,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TechStackMarquee>;

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
