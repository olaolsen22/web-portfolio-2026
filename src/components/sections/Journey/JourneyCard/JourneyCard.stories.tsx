import type { Meta, StoryObj } from '@storybook/react';
import { JourneyCard } from './JourneyCard';

const meta: Meta<typeof JourneyCard> = {
  title: 'Sections/Journey/JourneyCard',
  component: JourneyCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof JourneyCard>;

export const Default: Story = {
  args: {
    index: 1,
    item: {
      id: '1',
      yearRange: '2022–Present',
      title: 'Frontend Developer',
      organization: 'TwistResources',
      details:
        'Building and maintaining client-facing interfaces with React and TypeScript, focusing on performance and accessibility.',
    },
  },
};

export const Education: Story = {
  args: {
    index: 3,
    item: {
      id: '3',
      yearRange: '2018–2020',
      title: 'Bachelor of Computer Science',
      organization: 'University of Oslo',
      details:
        'Studied algorithms, data structures, software engineering, and human–computer interaction.',
    },
  },
};

export const DarkMode: Story = {
  args: {
    index: 1,
    item: {
      id: '1',
      yearRange: '2022–Present',
      title: 'Frontend Developer',
      organization: 'TwistResources',
      details: 'Building and maintaining client-facing interfaces.',
    },
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
