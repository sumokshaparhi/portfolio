export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed">
        <p>
          I am a Machine Learning Engineer specializing in production-grade
          LLM systems, AI microservices, and scalable cloud deployments.
          My work focuses on building high-performance backend architectures
          that power intelligent AI-driven applications.
        </p>

        <p>
          I have led backend migrations from Python to Go to improve
          concurrency and real-time performance, designed dynamic MCP
          architectures for AI voice agents, and deployed inference pipelines
          across AWS, Azure, and GCP environments.
        </p>
      </div>
    </section>
  );
}