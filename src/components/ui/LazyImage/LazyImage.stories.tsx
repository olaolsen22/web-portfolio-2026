import type { Meta, StoryObj } from '@storybook/react';
import { LazyImage } from './LazyImage';

const meta: Meta<typeof LazyImage> = {
  title: 'UI/LazyImage',
  component: LazyImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    aspectClassName: 'aspect-[4/3]',
  },
};

export default meta;
type Story = StoryObj<typeof LazyImage>;

export const Loading: Story = {
  args: {
    src: 'https://placehold.co/480x320',
    alt: 'Project preview',
    initialStatus: 'loading',
  },
};

export const Loaded: Story = {
  args: {
    src: 'https://placehold.co/480x320',
    alt: 'Project preview',
    initialStatus: 'loaded',
  },
};

export const Error: Story = {
  args: {
    src: 'bad-url.jpg',
    alt: 'Project preview',
    initialStatus: 'error',
  },
};
