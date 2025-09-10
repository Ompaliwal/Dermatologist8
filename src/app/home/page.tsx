"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-teal-600 to-teal-400 text-white px-6 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden pt-24">
        {/* Background glow shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
        </div>

        {/* Left Side Content */}
        <div className="relative z-10 max-w-xl text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Healthy Skin, <br />
            <span className="text-yellow-200">Radiant Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg text-white/90"
          >
            At DermaGlow Clinic, we combine expert dermatology with modern care
            to bring out your natural beauty.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition"
          >
            Book a Consultation
          </motion.a>
        </div>

        {/* Right Side Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative z-10 w-full flex justify-center md:justify-end"
        >
          <Image
            src="/images/hero.jpg" // 👉 replace with your dermatology/skin-care image
            alt="Dermatology Care"
            width={400}
            height={400}
            className="rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="py-16 bg-gray-50 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-teal-700 mb-12"
        >
          Why Choose DermaGlow?
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Expert Dermatologists",
              desc: "Our team of certified dermatologists provides world-class treatments.",
              icon: "🧑‍⚕️",
            },
            {
              title: "Advanced Technology",
              desc: "We use the latest tools and laser technology for effective care.",
              icon: "💎",
            },
            {
              title: "Personalized Care",
              desc: "Each treatment is customized for your unique skin needs.",
              icon: "✨",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-teal-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
