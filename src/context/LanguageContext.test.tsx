import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { LanguageProvider } from './LanguageContext';
import { useLanguage } from '@/hooks/useLanguage';

const TestConsumer = () => {
  const { lang, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="value">{t('nav.home')}</span>
    </div>
  );
};

describe('LanguageProvider', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <LanguageProvider>
        <div />
      </LanguageProvider>
    );
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <LanguageProvider>
        <div />
      </LanguageProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('provides lang and t to consumers', () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );
    expect(screen.getByTestId('lang').textContent).toMatch(/^(en|nb)$/);
    expect(screen.getByTestId('value').textContent).toBeTruthy();
  });
});
