import { useSyncExternalStore } from 'react';
import {
  getConsent,
  hasOptedOut,
  isAnalyticsAvailable,
  setConsent,
  subscribeToConsent,
} from '@/utils/analytics';

export const useAnalyticsConsent = () => {
  const consent = useSyncExternalStore(subscribeToConsent, getConsent);
  return {
    consent,
    setConsent,
    available: isAnalyticsAvailable(),
    browserOptOut: hasOptedOut(),
  };
};
