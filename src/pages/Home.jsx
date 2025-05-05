"use client"
import { motion } from "framer-motion"

const Home = () => (
  <motion.div
    className="min-h-screen p-8 flex flex-col items-center justify-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        Welcome to DermaVerse
      </h1>
      <p className="text-xl mb-8">
        Your personal AI-powered skincare assistant that analyzes, recommends, and helps you achieve your best skin
        ever.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-purple-500 text-4xl mb-4">📸</div>
          <h3 className="text-lg font-semibold mb-2">Analyze Your Skin</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Upload a selfie and get an instant AI analysis of your skin conditions.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-purple-500 text-4xl mb-4">💡</div>
          <h3 className="text-lg font-semibold mb-2">Personalized Tips</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Receive customized skincare recommendations based on your unique needs.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-purple-500 text-4xl mb-4">📊</div>
          <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Monitor your skin's improvement over time with detailed analytics.
          </p>
        </div>
      </div>

      <motion.button
        className="mt-12 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </div>
  </motion.div>
)

export default Home
