import { Hero } from './components/ui/Hero';
import { HeaderTabs } from './components/ui/HeaderTabs';

function App() {
  return (
    <>
      <div className="bg-brand-surface shadow-soft border border-brand-border h-auto min-h-[80vh] my-4 mx-4 lg:my-12 lg:mx-12">
        <HeaderTabs />
        <Hero />
      </div>
    </>
  );
}

export default App;
