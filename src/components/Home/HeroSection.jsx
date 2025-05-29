import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Create Your Professional Resume
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Build a resume that stands out and gets you hired. Free and easy to use.
          </p>
          <Link
            to="/builder"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition duration-300"
          >
            Build Your Resume Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}