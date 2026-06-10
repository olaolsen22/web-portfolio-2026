import type { Meta, StoryObj } from '@storybook/react';
import { PageSection } from './PageSection';

const meta: Meta<typeof PageSection> = {
  title: 'UI/PageSection',
  component: PageSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof PageSection>;

export const Default: Story = {
  args: {
    children: (
      <div className="container">
        <p>Section content</p>
      </div>
    ),
  },
};

export const NoBorder: Story = {
  args: {
    noBorder: true,
    children: (
      <div className="container">
        <p>Section content (no bottom border)</p>
      </div>
    ),
  },
};
