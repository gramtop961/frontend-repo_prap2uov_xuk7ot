import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s build something intelligent</h2>
            <p className="mt-3 text-gray-700">
              Open to AI/ML product engineering, research partnerships, and advisory work in fintech and beyond.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@crixpy.dev"
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-black transition"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-50 transition"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-50 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} C₹IXPY — AI/ML Developer. Crafted with care.
        </p>
      </div>
    </section>
  );
}
