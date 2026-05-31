import type { Meta, StoryObj } from '@storybook/react';
import { WorkStatusCard } from './WorkStatusCard';

const meta: Meta<typeof WorkStatusCard> = {
  title: 'Sections/Hero/WorkStatusCard',
  component: WorkStatusCard,
  args: {
    workStatus: 'Open to work',
    location: 'Norway',
  },
};

export default meta;
type Story = StoryObj<typeof WorkStatusCard>;

export const Default: Story = {};

export const Norwegian: Story = {
  args: {
    workStatus: 'Åpen for jobb',
    location: 'Norge',
  },
};
