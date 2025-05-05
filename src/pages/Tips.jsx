"use client"
import { motion } from "framer-motion"

const tipCategories = [
  {
    title: "Daily Skincare Routine",
    icon: "🧴",
    tips: [
      "Cleanse your face twice daily with a gentle cleanser",
      "Apply moisturizer while your skin is still damp",
      "Use sunscreen with at least SPF 30 every morning",
      "Remove makeup before bed to prevent clogged pores",
    ],
  },
  {
    title: "Diet & Nutrition",
    icon: "🥗",
    tips: [
      "Stay hydrated by drinking at least 8 glasses of water daily",
      "Consume foods rich in antioxidants like berries and leafy greens",
      "Include omega-3 fatty acids from sources like fish and walnuts",
      "Limit sugar and dairy if you notice they trigger breakouts",
    ],
  },
  {
    title: "Lifestyle Habits",
    icon: "💤",
    tips: [
      "Get 7-9 hours of quality sleep each night",
      "Manage stress through meditation, yoga, or deep breathing",
      "Change pillowcases weekly to prevent bacteria buildup",
      "Avoid touching your face throughout the day",
    ],
  },
  {
    title: "Product Ingredients",
    icon: "🧪",
    tips: [
      "Look for hyaluronic acid for hydration",
      "Vitamin C helps brighten skin and fight free radicals",
      "Retinol promotes cell turnover and reduces fine lines",
      "Niacinamide helps with redness and pore appearance",
    ],
  },
]

const Tips = () => (
  <motion.div
    className="min-h-screen p-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Skincare Tips</h1>

      <p className="text-center mb-8">Discover expert advice to help you achieve healthy, glowing skin.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tipCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{category.icon}</span>
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>

            <ul className="space-y-2">
              {category.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Personalized Recommendations</h3>
        <p className="text-center mb-4">
          For tips tailored to your specific skin type and concerns, use our Analyze feature.
        </p>
        <div className="text-center">
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Personalized Tips
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
)

export default Tips
