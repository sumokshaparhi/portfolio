"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Medical Image Classification",
      desc: "Developed CNN models for multi-class chest X-ray classification with optimized preprocessing and augmentation pipelines.",
      tech: "PyTorch · CNN · OpenCV",
    },
    {
      title: "Bitcoin Price Forecasting",
      desc: "Built ARIMA & SARIMA-based time series forecasting models with stationarity testing and evaluation.",
      tech: "ARIMA · Time Series · ADF Test",
    },
    {
      title: "Breast Cancer Prediction",
      desc: "Implemented ML models including Random Forest, SVM, XGBoost with hyperparameter tuning.",
      tech: "Scikit-learn · XGBoost",
    },
    {
      title: "LLM Fine-Tuning & MCP Architecture",
      desc: "Designed LLM fine-tuning pipelines and scalable Model Context Protocol architectures for AI voice agents.",
      tech: "Hugging Face · FastAPI · Go · AWS",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-semibold mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-600/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {project.desc}
            </p>

            <div className="text-sm text-purple-400">
              {project.tech}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}