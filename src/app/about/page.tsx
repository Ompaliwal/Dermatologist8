// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Heart, Target, Star } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-20 font-[Poppins] text-gray-800">
      {/* Clinic Story */}
      <section className="relative px-6 py-20 bg-gradient-to-br from-teal-600 to-teal-400 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h1>
            <p className="leading-relaxed mb-4 text-white/90">
              DermaGlow Clinic was founded with a simple vision — to provide
              world-class dermatology care that blends science, technology, and
              compassion. We believe that healthy skin is the foundation of
              confidence, and our mission is to help every patient achieve their
              natural glow.
            </p>
            <p className="leading-relaxed text-white/90">
              With years of expertise, advanced treatments, and a patient-first
              approach, we have become a trusted name in skincare and
              dermatology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/story.jpg"
              alt="Clinic"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Doctor Bio */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about.jpg"
              alt="Dr. Jane Doe"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-700">
              Meet Dr. Priya Mittal
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. Jane Doe, our founder and chief dermatologist, is
              board-certified with over 15 years of experience in treating
              complex skin conditions. Her expertise covers acne, anti-aging,
              cosmetic dermatology, and holistic skin care solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a passion for helping patients feel confident in their skin,
              Dr. Doe has successfully treated thousands of individuals with
              personalized care and advanced treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-20 bg-gradient-to-br from-teal-600 to-teal-400 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                desc: "We prioritize patient comfort, safety, and personalized treatment.",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide advanced skincare solutions that are accessible, safe, and effective.",
              },
              {
                icon: Star,
                title: "Our Vision",
                desc: "To be the most trusted dermatology clinic, known for innovation and results.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:scale-105 transition"
              >
                <item.icon
                  className="mx-auto mb-4 text-yellow-200"
                  size={40}
                />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
