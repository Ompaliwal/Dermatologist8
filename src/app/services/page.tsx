"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Sun, Scissors, Droplets, Smile } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Sparkles,
      title: "Skin Rejuvenation",
      desc: "Restore your skin’s natural glow and smoothness with advanced treatments.",
      bg: "bg-teal-50",
    },
    {
      icon: Heart,
      title: "Acne Treatment",
      desc: "Clear, healthy skin with customized acne management solutions.",
      bg: "bg-rose-50",
    },
    {
      icon: Sun,
      title: "Anti-Aging Therapy",
      desc: "Reduce fine lines, wrinkles, and signs of aging with proven methods.",
      bg: "bg-amber-50",
    },
    {
      icon: Scissors,
      title: "Chemical Peels",
      desc: "Improve skin tone and texture with safe and effective peels.",
      bg: "bg-indigo-50",
    },
    {
      icon: Droplets,
      title: "Hydration Therapy",
      desc: "Revitalize dry, dull skin with deep hydration treatments.",
      bg: "bg-sky-50",
    },
    {
      icon: Smile,
      title: "Hair Loss Solutions",
      desc: "Restore confidence with modern and holistic hair treatments.",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <main className="pt-20 font-[Poppins] text-gray-800">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-400 text-white text-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Our Services
        </motion.h1>
        <p className="max-w-2xl mx-auto text-white/90">
          Explore our range of dermatology and skincare services, designed to
          keep your skin healthy, youthful, and glowing.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${service.bg} rounded-2xl p-8 text-center transform transition hover:scale-105`}
            >
              <service.icon
                className="text-teal-600 mx-auto mb-4"
                size={40}
              />
              <h3 className="font-semibold text-lg mb-2 text-teal-700">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{service.desc}</p>
              <a
                href="/contact"
                className="inline-block bg-teal-600 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-700 transition"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 text-white text-center px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Ready to Transform Your Skin?
        </motion.h2>
        <p className="max-w-xl mx-auto mb-6 text-white/90">
          Book a consultation today and let our dermatology experts help you
          achieve the skin you’ve always dreamed of.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-teal-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          Book a Consultation
        </a>
      </section>
    </main>
  );
}
