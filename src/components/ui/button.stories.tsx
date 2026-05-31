import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'View My Work' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Connect' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Pause' },
};

export const Link: Story = {
  args: { variant: 'link', children: 'Privacy notice' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'View My Work' },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Pause' },
};

export const Icon: Story = {
  args: { variant: 'ghost', size: 'icon', children: '☀' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex gap-3 flex-wrap items-center">
        <Button>default</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="link">link</Button>
      </div>
      <div className="flex gap-3 flex-wrap items-center">
        <Button size="lg">lg</Button>
        <Button>default</Button>
        <Button size="sm">sm</Button>
        <Button variant="ghost" size="icon">
          ☀
        </Button>
      </div>
    </div>
  ),
};
