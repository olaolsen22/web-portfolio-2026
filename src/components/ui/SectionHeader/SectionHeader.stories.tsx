import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  title: 'UI/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    label: 'Journey',
    title: 'My Journey',
    description: 'A timeline of my work and education.',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'My Journey',
  },
};

export const DarkMode: Story = {
  args: {
    label: 'Journey',
    title: 'My Journey',
    description: 'A timeline of my work and education.',
  },
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
