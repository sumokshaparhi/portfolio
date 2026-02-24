"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Medical Image Classification",
      desc: "Developed CNN models for multi-class chest X-ray classification (Normal, Pneumonia, COVID) with optimized preprocessing and augmentation pipelines.",
      tech: "PyTorch · CNN · OpenCV · Data Augmentation",
    },
    {
      title: "Bitcoin Price Forecasting",
      desc: "Built ARIMA and SARIMA-based time series forecasting models with stationarity testing and performance evaluation.",
      tech: "ARIMA · SARIMA · Time Series · ADF Test",
    },
    {
      title: "Breast Cancer Prediction",
      desc: "Implemented supervised classification models including Random Forest, SVM, XGBoost, and Logistic Regression with hyperparameter tuning.",
      tech: "Scikit-learn · XGBoost · Model Evaluation",
    },
    {
      title: "LLM Fine-Tuning & MCP Architecture",
      desc: "Designed LLM fine-tuning pipelines and production-grade Model Context Protocol architectures for scalable AI voice agents.",
      tech: "Hugging Face · MCP · FastAPI · Go · AWS",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#161616] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.desc}
            </p>

            <div className="text-sm text-gray-500">
              {project.tech}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}