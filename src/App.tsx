import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './context/LanguageContext';
import { SkipLink } from './components/SkipLink/SkipLink';
import { AccessibilityPrompts } from './components/AccessibilityPrompts/AccessibilityPrompts';
import { Header } from './components/Header/Header';
import { Hero } from './components/sections/Hero/Hero';
import { TechStackMarquee } from './components/sections/TechStackMarquee/TechStackMarquee';
import { Journey } from './components/sections/Journey/Journey';
import { SelectedWork } from './components/sections/SelectedWork/SelectedWork';
import { Connect } from './components/sections/Connect/Connect';

const queryClient = new QueryClient();

const PortfolioApp = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SkipLink />
    <Header />
    <main id="main">
      <div className="flex h-svh lg:max-h-[1080px] flex-col pt-16">
        <Hero />
        <TechStackMarquee />
      </div>
      <Journey />
      <SelectedWork />
      <Connect />
    </main>
    <AccessibilityPrompts />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
