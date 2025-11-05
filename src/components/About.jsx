export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I'm C₹IXPY, an AI/ML engineer focused on building production-grade machine learning systems and
              interactive, data-driven experiences. My work spans model research, training pipelines, evaluation,
              and shipping real-time inference with careful attention to latency, observability, and product impact.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I enjoy solving end-to-end problems — from framing a hypothesis and curating datasets to crafting
              intuitive interfaces that make complex capabilities feel simple. Lately, I've been exploring generative
              vision, vector search, and crypto-native analytics.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900">Core Stack</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="rounded-md bg-white border border-gray-200 px-3 py-2">Python, PyTorch</li>
              <li className="rounded-md bg-white border border-gray-200 px-3 py-2">TensorFlow, Keras</li>
              <li className="rounded-md bg-white border border-gray-200 px-3 py-2">scikit-learn, XGBoost</li>
              <li className="rounded-md bg-white border border-gray-200 px-3 py-2">FastAPI, gRPC</li>
              <li className="rounded-md bg-white border border-gray-200 px-3 py-2">Airflow, Prefect</li>
              <li className="rounded-md bg-white border border-gray-200 px-3 py-2">Docker, Kubernetes</li>
              <li className="rounded-md bg-white border border-gray-200 px-3 py-2">Postgres, MongoDB</li>
              <li className="rounded-md bg-white border border-gray-200 px-3 py-2">LangChain, OpenAI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
