"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    feedback:
      "DermaGlow completely transformed my skin. The doctors are so professional and caring. I feel confident again!",
    location: "Mumbai",
    image: "/images/customer1.jpg", // 👉 replace with actual image path
  },
  {
    name: "Priya Patel",
    feedback:
      "I was struggling with acne for years. The personalized treatment worked wonders. Highly recommended!",
    location: "Delhi",
    image: "/images/customer.jpg", // 👉 replace with actual image path
  },
  {
    name: "Rohan Mehta",
    feedback:
      "The laser treatment was painless and super effective. Amazing results in just a few sessions!",
    location: "Bangalore",
    image: "/images/customer2.jpg", // 👉 replace with actual image path
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-teal-700 mb-10"
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-teal-500 shadow-sm"
            />

            {/* Feedback */}
            <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>

            {/* Name + Location */}
            <h4 className="font-semibold text-teal-700">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.location}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
