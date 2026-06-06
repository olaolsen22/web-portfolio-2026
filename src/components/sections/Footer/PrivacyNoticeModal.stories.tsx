import type { Meta, StoryObj } from '@storybook/react';
import { PrivacyNoticeModal } from './PrivacyNoticeModal';

const meta: Meta<typeof PrivacyNoticeModal> = {
  title: 'Sections/Footer/PrivacyNoticeModal',
  component: PrivacyNoticeModal,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onOpenChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof PrivacyNoticeModal>;

export const Open: Story = {
  args: { open: true },
};

export const Closed: Story = {
  args: { open: false },
};

export const DarkMode: Story = {
  args: { open: true },
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
