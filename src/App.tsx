import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './context/LanguageContext';
import { MotionProvider } from './context/MotionContext';
import { useSiteTitle } from './hooks/useSiteTitle';
import { useSectionViewTracking } from './hooks/useSectionViewTracking';
import { SkipLink } from './components/SkipLink/SkipLink';
import { AccessibilityPrompts } from './components/AccessibilityPrompts/AccessibilityPrompts';
import { AnalyticsConsentPrompt } from './components/AnalyticsConsentPrompt/AnalyticsConsentPrompt';
import { Header } from './components/Header/Header';
import { Hero } from './components/sections/Hero/Hero';
import { TechStackMarquee } from './components/sections/TechStackMarquee/TechStackMarquee';
import { Journey } from './components/sections/Journey/Journey';
import { SelectedWork } from './components/sections/SelectedWork/SelectedWork';
import { Connect } from './components/sections/Connect/Connect';
import { Footer } from './components/sections/Footer/Footer';

const queryClient = new QueryClient();

const PortfolioApp = () => {
  useSiteTitle();
  useSectionViewTracking();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <Header />
      <main id="main">
        <div className="flex min-h-svh lg:max-h-[1080px] flex-col pt-16">
          <Hero />
          <TechStackMarquee />
        </div>
        <Journey />
        <SelectedWork />
        <Connect />
      </main>
      <Footer />
      {/* Shared bottom slot so the prompts stack instead of overlapping */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col">
        <AccessibilityPrompts />
        <AnalyticsConsentPrompt />
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <MotionProvider>
        <PortfolioApp />
      </MotionProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
