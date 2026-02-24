export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Experience
      </h2>

      <div className="space-y-12">

        <div className="border-l border-gray-800 pl-6">
          <h3 className="text-xl font-semibold">
            Machine Learning Engineer — Aiverbalyze Technologies
          </h3>
          <p className="text-gray-500 mb-4">May 2025 – Present</p>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Designed and implemented production-grade MCP architecture for AI voice agents.</li>
            <li>Migrated latency-sensitive backend services from Python to Go for improved concurrency.</li>
            <li>Engineered scalable NLP microservices using FastAPI and Go APIs.</li>
            <li>Deployed and managed ML inference services across AWS, Azure, and GCP.</li>
          </ul>
        </div>

        <div className="border-l border-gray-800 pl-6">
          <h3 className="text-xl font-semibold">
            Data Scientist Intern — Nokia
          </h3>
          <p className="text-gray-500 mb-4">Jan 2024 – Apr 2024</p>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Improved telecom data accuracy using KPI analysis and Golden Parameter extraction.</li>
            <li>Automated zero-traffic cell performance monitoring systems.</li>
            <li>Optimized network performance through audits and structured data workflows.</li>
          </ul>
        </div>

                <div className="border-l border-gray-800 pl-6">
          <h3 className="text-xl font-semibold">
            Data Scientist Intern — University of Hyderabad
          </h3>
          <p className="text-gray-500 mb-4">Jul 2023 – Aug 2023</p>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Built a content-based recommendation system for airline baggage classification using NLP techniques.</li>
            <li>Designed web scraping and preprocessing pipelines for large unstructured datasets.</li>
            <li>Implemented Word2Vec and FastText embeddings for semantic feature representation.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}