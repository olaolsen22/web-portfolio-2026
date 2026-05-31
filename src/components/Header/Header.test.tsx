import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Header } from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Header />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the name logo', () => {
    render(<Header />);
    expect(screen.getByText('Ola.')).toBeInTheDocument();
  });

  it('renders language and theme toggle buttons', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /switch to norwegian/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /switch to (light|dark) mode/i })
    ).toBeInTheDocument();
  });

  it('opens and closes the mobile menu on hamburger click', async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole('button', { name: /open menu/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close menu/i }));
    // Check state via button label — AnimatePresence keeps the element in the DOM
    // during its exit animation, so we assert the state change, not DOM removal
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
});
