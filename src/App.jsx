import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-gray-900 text-lg">C₹IXPY</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-gray-900 text-gray-600">About</a>
            <a href="#projects" className="hover:text-gray-900 text-gray-600">Projects</a>
            <a href="#contact" className="hover:text-gray-900 text-gray-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
