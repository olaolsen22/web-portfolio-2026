import type { Meta, StoryObj } from '@storybook/react';
import { NorwegianBanner } from './NorwegianBanner';
import type { TranslationKey } from '@/content';

const t = (key: TranslationKey): string => {
  const map: Partial<Record<TranslationKey, string>> = {
    'banner.langNote':
      'OBS: Norsk innhold er under utvikling. Teksten er KI-oversatt mens jeg lærer meg norsk. Takk for tålmodigheten!',
    'banner.dismiss': 'Lukk banner',
  };
  return map[key] ?? key;
};

const meta: Meta<typeof NorwegianBanner> = {
  title: 'Components/Header/NorwegianBanner',
  component: NorwegianBanner,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onClose: () => {},
    t,
    motionAllowed: true,
    transparencyAllowed: false,
  },
};

export default meta;
type Story = StoryObj<typeof NorwegianBanner>;

export const Default: Story = {};

export const WithTransparency: Story = {
  args: {
    transparencyAllowed: true,
  },
};

export const DarkMode: Story = {
  decorators: [
    (Story) => {
      document.documentElement.classList.add('dark');
      return <Story />;
    },
  ],
};
