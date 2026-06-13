import type { Meta, StoryObj } from '@storybook/react';
import { ImageViewer } from './ImageViewer';

const meta: Meta<typeof ImageViewer> = {
  title: 'UI/ImageViewer',
  component: ImageViewer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ImageViewer>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/800x600',
    alt: 'Project preview',
  },
  render: (args) => (
    <ImageViewer {...args}>
      <button type="button" className="cursor-pointer rounded-md">
        <img src={args.src} alt={args.alt} className="w-64 rounded-md" />
      </button>
    </ImageViewer>
  ),
};

export const WithLightVariant: Story = {
  args: {
    src: 'https://placehold.co/800x600/1a1a2e/e0e0e0?text=Dark+Mode',
    srcLight: 'https://placehold.co/800x600/f0f0f0/1a1a2e?text=Light+Mode',
    alt: 'Project preview with theme variants',
  },
  render: (args) => (
    <ImageViewer {...args}>
      <button type="button" className="cursor-pointer rounded-md">
        <img src={args.srcLight} alt={args.alt} className="w-64 rounded-md" />
      </button>
    </ImageViewer>
  ),
};
