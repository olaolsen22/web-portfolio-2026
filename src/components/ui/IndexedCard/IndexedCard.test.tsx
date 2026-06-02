import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { IndexedCard } from './IndexedCard';

describe('IndexedCard', () => {
  describe('2-col layout (no aside)', () => {
    it('renders without crashing', () => {
      const { container } = render(
        <IndexedCard index={1}>
          <p>Content</p>
        </IndexedCard>
      );
      expect(container).toBeTruthy();
    });

    it('has no a11y violations', async () => {
      const { container } = render(
        <IndexedCard index={1}>
          <p>Content</p>
        </IndexedCard>
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('renders formatted index', () => {
      render(
        <IndexedCard index={3}>
          <p>Content</p>
        </IndexedCard>
      );
      expect(screen.getByText('03')).toBeInTheDocument();
    });

    it('renders children', () => {
      render(
        <IndexedCard index={1}>
          <p>Hello world</p>
        </IndexedCard>
      );
      expect(screen.getByText('Hello world')).toBeInTheDocument();
    });

    it('index span has group-hover class when indexSize is lg', () => {
      render(
        <IndexedCard index={1} indexSize="lg">
          <p>Content</p>
        </IndexedCard>
      );
      expect(screen.getByText('01')).toHaveClass('group-hover:opacity-100');
    });
  });

  describe('3-col layout (with aside)', () => {
    it('renders without crashing', () => {
      const { container } = render(
        <IndexedCard index={1} aside={<img src="x.png" alt="preview" />}>
          <p>Content</p>
        </IndexedCard>
      );
      expect(container).toBeTruthy();
    });

    it('has no a11y violations', async () => {
      const { container } = render(
        <IndexedCard index={1} aside={<img src="x.png" alt="preview" />}>
          <p>Content</p>
        </IndexedCard>
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('renders aside content', () => {
      render(
        <IndexedCard index={1} aside={<img src="x.png" alt="project preview" />}>
          <p>Content</p>
        </IndexedCard>
      );
      expect(screen.getByAltText('project preview')).toBeInTheDocument();
    });

    it('renders formatted index and children', () => {
      render(
        <IndexedCard index={2} aside={<img src="x.png" alt="preview" />}>
          <p>Hello</p>
        </IndexedCard>
      );
      expect(screen.getByText('02')).toBeInTheDocument();
      expect(screen.getByText('Hello')).toBeInTheDocument();
    });
  });
});
