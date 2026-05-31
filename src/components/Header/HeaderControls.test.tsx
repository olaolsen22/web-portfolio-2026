import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { HeaderControls } from './HeaderControls';

const defaults = {
  lang: 'en' as const,
  toggleLang: vi.fn(),
  isDark: false,
  toggleDark: vi.fn(),
  menuOpen: false,
  setMenuOpen: vi.fn(),
};

describe('HeaderControls', () => {
  it('renders without crashing', () => {
    const { container } = render(<HeaderControls {...defaults} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<HeaderControls {...defaults} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('calls toggleLang when language button is clicked', async () => {
    const toggleLang = vi.fn();
    const user = userEvent.setup();
    render(<HeaderControls {...defaults} toggleLang={toggleLang} />);
    await user.click(screen.getByRole('button', { name: /switch to norwegian/i }));
    expect(toggleLang).toHaveBeenCalledOnce();
  });

  it('calls toggleDark when theme button is clicked', async () => {
    const toggleDark = vi.fn();
    const user = userEvent.setup();
    render(<HeaderControls {...defaults} toggleDark={toggleDark} />);
    await user.click(screen.getByRole('button', { name: /switch to dark mode/i }));
    expect(toggleDark).toHaveBeenCalledOnce();
  });

  it('shows sun icon and light-mode label when dark', () => {
    render(<HeaderControls {...defaults} isDark={true} />);
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument();
  });

  it('calls setMenuOpen when hamburger is clicked', async () => {
    const setMenuOpen = vi.fn();
    const user = userEvent.setup();
    render(<HeaderControls {...defaults} setMenuOpen={setMenuOpen} />);
    await user.click(screen.getByRole('button', { name: /open menu/i }));
    expect(setMenuOpen).toHaveBeenCalledWith(true);
  });

  it('shows "Close menu" label when menu is open', () => {
    render(<HeaderControls {...defaults} menuOpen={true} />);
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();
  });
});
