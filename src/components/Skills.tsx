export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Languages</h3>
          <p className="text-gray-400">Python · Go</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">AI / ML</h3>
          <p className="text-gray-400">
            PyTorch · TensorFlow · Scikit-learn · Hugging Face
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">LLM & NLP</h3>
          <p className="text-gray-400">
            LLM Fine-tuning · MCP · Word2Vec · FastText
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Backend</h3>
          <p className="text-gray-400">
            FastAPI · REST APIs · Microservices
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Cloud & DevOps</h3>
          <p className="text-gray-400">
            AWS · Azure · GCP · Docker
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Data & Tools</h3>
          <p className="text-gray-400">
            OpenCV · Web Scraping · QGIS
          </p>
        </div>

      </div>
    </section>
  );
}