import '@testing-library/jest-dom';
import { expect } from 'vitest';
import * as axeMatchers from 'vitest-axe/matchers';

expect.extend(axeMatchers);

const originalError = console.error;
console.error = (...args: Parameters<typeof console.error>) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes("HTMLCanvasElement's getContext()") ||
      args[0].includes('Function components cannot be given refs') ||
      args[0].includes('not wrapped in act(...)'))
  )
    return;
  originalError(...args);
};

const mockIntersectionObserver = vi.fn().mockImplementation((callback) => ({
  observe: vi.fn((target: Element) => callback([{ isIntersecting: true, target }])),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: mockIntersectionObserver,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
