import type { Meta, StoryObj } from '@storybook/react';
import { HeadlineText } from './HeadlineText';

const meta: Meta<typeof HeadlineText> = {
  title: 'Sections/Hero/HeadlineText',
  component: HeadlineText,
  args: {
    name: 'Jane Doe',
    title: 'Full-Stack Developer',
    details: 'Building **great** digital products with **care** and precision.',
  },
};

export default meta;
type Story = StoryObj<typeof HeadlineText>;

export const Default: Story = {};

export const Norwegian: Story = {
  args: {
    name: 'Jane Doe',
    title: 'Full-Stack Utvikler',
    details: 'Bygger **gode** digitale produkter med **omsorg** og presisjon.',
  },
};
