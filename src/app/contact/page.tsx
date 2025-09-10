"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-teal-700 mb-4"
        >
          Get In Touch
        </motion.h2>
        <p className="text-gray-600 mb-10">
          Have questions or want to book a consultation? Fill the form below or
          reach us directly.
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-md space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition"
        >
          Send Message
        </motion.button>
      </form>

      {/* Contact Info */}
      <div className="mt-12 text-center text-gray-600 space-y-2">
        <p>📍 123 SkinCare Street, Mumbai, India</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ contact@dermaglow.com</p>
      </div>

      {/* Google Map Embed */}
      <div className="mt-10 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609780323!2d72.74109802470576!3d19.0821978397229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b17dfbfbb%3A0x73f7b3dbe79b97d9!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1694133085667!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
