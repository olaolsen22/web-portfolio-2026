import { renderHook } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { useSiteTitle } from './useSiteTitle';

describe('useSiteTitle', () => {
  it('sets document.title on mount', () => {
    renderHook(() => useSiteTitle(), { wrapper: LanguageProvider });
    expect(document.title).toMatch(/Ola O\./);
  });

  it('sets an English title by default', () => {
    renderHook(() => useSiteTitle(), { wrapper: LanguageProvider });
    expect(document.title).toBe('Ola O. - Frontend Developer');
  });
});
