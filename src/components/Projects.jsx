import { ExternalLink, Github, Brain, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'NeonCube Vision — Real-time Object Understanding',
    description:
      'Edge-optimized transformer for detecting and describing objects in a live scene; quantized inference, WebRTC streaming, and vector search for instant recall.',
    tags: ['PyTorch', 'ONNX Runtime', 'WebRTC', 'FAISS'],
    demo: '#',
    repo: '#',
    icon: Rocket,
  },
  {
    title: 'Crypto Signal Graph — Alpha on-chain + off-chain',
    description:
      'Feature store that fuses on-chain metrics with market microstructure to drive ML-based trading signals; includes backtests and drift monitoring.',
    tags: ['Python', 'Apache Arrow', 'XGBoost', 'Grafana'],
    demo: '#',
    repo: '#',
    icon: Brain,
  },
  {
    title: 'GenAI Support Copilot',
    description:
      'Retrieval-augmented assistant for customer support, with feedback loops and evaluation to reduce hallucinations and improve resolution rate.',
    tags: ['FastAPI', 'LangChain', 'OpenAI', 'Pinecone'],
    demo: '#',
    repo: '#',
    icon: Brain,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Highlighted Projects</h2>
            <p className="mt-2 text-gray-600">A mix of research-driven builds and production systems.</p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:opacity-80"
          >
            Explore more
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, tags, demo, repo, icon: Icon }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">{description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2.5 py-1 border border-gray-200">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={demo}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-80"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href={repo}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-80"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-50/60 to-cyan-50/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
