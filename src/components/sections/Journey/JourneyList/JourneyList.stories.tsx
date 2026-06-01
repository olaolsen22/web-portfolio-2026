import type { Meta, StoryObj } from '@storybook/react';
import { JourneyList } from './JourneyList';
import { journeyItems } from '@/content/journeyItems';

const meta: Meta<typeof JourneyList> = {
  title: 'Sections/Journey/JourneyList',
  component: JourneyList,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof JourneyList>;

export const Default: Story = {
  args: {
    items: journeyItems,
  },
};

export const DarkMode: Story = {
  args: {
    items: journeyItems,
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
