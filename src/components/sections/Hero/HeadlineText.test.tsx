import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { HeadlineText } from './HeadlineText';

const defaults = {
  name: 'Jane Doe',
  title: 'Full-Stack Developer',
  details: 'Building **great** products with **care**.',
};

describe('HeadlineText', () => {
  it('renders without crashing', () => {
    const { container } = render(<HeadlineText {...defaults} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<HeadlineText {...defaults} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders name as h1', () => {
    render(<HeadlineText {...defaults} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Jane Doe' })).toBeInTheDocument();
  });

  it('renders the professional title', () => {
    render(<HeadlineText {...defaults} />);
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument();
  });

  it('renders bold segments from **markers**', () => {
    render(<HeadlineText {...defaults} />);
    expect(screen.getByText('great').tagName).toBe('STRONG');
    expect(screen.getByText('care').tagName).toBe('STRONG');
  });
});
