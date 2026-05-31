import type { Meta, StoryObj } from '@storybook/react';
import { HeroButtonGroup } from './HeroButtonGroup';

const meta: Meta<typeof HeroButtonGroup> = {
  title: 'Sections/Hero/HeroButtonGroup',
  component: HeroButtonGroup,
  args: {
    viewMyWork: 'View My Work',
    connect: 'Connect',
  },
};

export default meta;
type Story = StoryObj<typeof HeroButtonGroup>;

export const Default: Story = {};

export const Norwegian: Story = {
  args: {
    viewMyWork: 'Se mitt arbeid',
    connect: 'Kontakt',
  },
};
