"use client";

import { motion } from "framer-motion";

export default function TechTicker() {
  const tech = [
    "Python",
    "Go",
    "FastAPI",
    "AWS",
    "Azure",
    "GCP",
    "Hugging Face",
    "Docker",
    "Kubernetes",
    "LLM Systems",
  ];

  return (
    <div className="overflow-hidden py-12 border-y border-white/10">
      <motion.div
        className="flex gap-16 text-gray-400 text-lg whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...tech, ...tech].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </motion.div>
    </div>
  );
}