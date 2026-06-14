import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { ImageViewer } from './ImageViewer';

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({ lang: 'en', t: (key: string) => key }),
}));

vi.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => ({ motionAllowed: false }),
}));

const renderViewer = (props?: { srcLight?: string }) =>
  render(
    <ImageViewer src="dark.jpg" alt="Test image" {...props}>
      <button type="button">Open</button>
    </ImageViewer>
  );

describe('ImageViewer', () => {
  it('renders trigger and keeps dialog closed by default', () => {
    renderViewer();
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('has no a11y violations when closed', async () => {
    const { container } = renderViewer();
    expect(await axe(container)).toHaveNoViolations();
  });

  it('opens dialog on trigger click and shows image', async () => {
    const user = userEvent.setup();
    renderViewer();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Test image' })).toBeInTheDocument();
  });

  it('has sr-only dialog title for accessibility', async () => {
    const user = userEvent.setup();
    renderViewer();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const title = screen.getByText('Test image');
    expect(title.className).toContain('sr-only');
  });

  it('closes on close button click', async () => {
    const user = userEvent.setup();
    renderViewer();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'common.close' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders both image variants when srcLight is provided', async () => {
    const user = userEvent.setup();
    renderViewer({ srcLight: 'light.jpg' });
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const images = screen.getAllByRole('img', { name: 'Test image' });
    expect(images).toHaveLength(2);
  });
});
