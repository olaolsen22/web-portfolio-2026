import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SkipLink } from './components/SkipLink/SkipLink';
import { AccessibilityPrompts } from './components/AccessibilityPrompts/AccessibilityPrompts';
import { Header } from './components/Header/Header';

const queryClient = new QueryClient();

const PortfolioApp = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SkipLink />
    <Header />
    <main id="main" className="pt-16">
      {/* sections go here */}
    </main>
    <AccessibilityPrompts />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PortfolioApp />
  </QueryClientProvider>
);

export default App;
