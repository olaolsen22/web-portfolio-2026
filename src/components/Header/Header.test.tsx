import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { MotionProvider } from '@/context/MotionContext';
import { Header } from './Header';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<MotionProvider>{ui}</MotionProvider>);

describe('Header', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProviders(<Header />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = renderWithProviders(<Header />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the name logo', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('Ola.')).toBeInTheDocument();
  });

  it('renders language and theme toggle buttons', () => {
    renderWithProviders(<Header />);
    expect(screen.getByRole('button', { name: /switch to norwegian/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /switch to (light|dark) mode/i })
    ).toBeInTheDocument();
  });

  it('opens and closes the mobile menu on hamburger click', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Header />);

    await user.click(screen.getByRole('button', { name: /open menu/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close menu/i }));
    // Check state via button label — AnimatePresence keeps the element in the DOM
    // during its exit animation, so we assert the state change, not DOM removal
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
});
