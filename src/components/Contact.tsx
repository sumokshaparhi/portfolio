export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        Let’s Connect
      </h2>

      <p className="text-gray-400 mb-10">
        I’m open to ML / LLM engineering roles, research collaborations,
        and high-impact AI system projects.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a
          href="mailto:parhisumoksha7327@gmail.com"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/sumokshaparhi"
          target="_blank"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:border-blue-500 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:border-blue-500 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}