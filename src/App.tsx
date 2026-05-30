import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SkipLink } from './components/SkipLink/SkipLink';
import { AccessibilityPrompts } from './components/AccessibilityPrompts/AccessibilityPrompts';

const queryClient = new QueryClient();

const PortfolioApp = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SkipLink />
    <main id="main">{/* sections go here */}</main>
    <AccessibilityPrompts />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PortfolioApp />
  </QueryClientProvider>
);

export default App;
