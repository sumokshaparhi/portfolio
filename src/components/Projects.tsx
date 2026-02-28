"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "LLM Fine-Tuning & MCP Architecture",
      desc: "Designed production-grade LLM fine-tuning pipelines and implemented scalable Model Context Protocol (MCP) architectures enabling dynamic tool invocation and real-time AI voice agent workflows.",
      tech: ["Hugging Face", "FastAPI", "Go", "AWS", "Azure", "GCP"],
    },
    {
      title: "Medical Image Analysis System",
      desc: "Developed multi-class CNN models for chest X-ray classification (Normal, Pneumonia, COVID) with optimized augmentation, preprocessing pipelines, and hyperparameter tuning for improved diagnostic accuracy.",
      tech: ["PyTorch", "CNN", "OpenCV", "Data Augmentation"],
    },
    {
      title: "Bitcoin Price Forecasting",
      desc: "Built ARIMA and SARIMA-based time series forecasting models with ADF stationarity testing, Box-Cox transformations, and structured evaluation pipelines for cryptocurrency market trend analysis.",
      tech: ["ARIMA", "SARIMA", "Time Series", "ADF Test"],
    },
    {
      title: "Breast Cancer Prediction System",
      desc: "Engineered supervised ML models using Random Forest, SVM, XGBoost, and Logistic Regression with feature selection, cross-validation, and hyperparameter tuning to enhance predictive robustness.",
      tech: ["Scikit-learn", "XGBoost", "SVM", "Random Forest"],
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-semibold mb-20 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition duration-500 hover:border-indigo-500/40 hover:shadow-[0_0_80px_rgba(99,102,241,0.15)]"
          >
            {/* Glow overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-indigo-500/5 transition duration-500 pointer-events-none" />

            <h3 className="text-xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}