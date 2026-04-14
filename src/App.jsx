import { Hero } from './components/ui/Hero';
import { Header } from './components/ui/Header';

function App() {
  return (
    <>
      <div className="bg-brand-surface shadow-soft border border-brand-border rounded-2xl h-auto min-h-[80vh] my-4 mx-4 lg:my-12 lg:mx-12">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
