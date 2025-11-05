import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-black/5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-700">Available for AI/ML and FinTech collaborations</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            C₹IXPY • AI/ML Developer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl">
            I design intelligent systems at the intersection of data, algorithms, and delightful product experiences.
            From model research to production MLOps — with a soft spot for crypto, fintech, and visual computing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-black transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-50 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
