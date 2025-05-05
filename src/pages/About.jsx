"use client"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Dermatologist",
    bio: "Board-certified dermatologist with 15 years of experience in clinical practice and research.",
  },
  {
    name: "Alex Chen",
    role: "AI Engineer",
    bio: "Specialist in computer vision and machine learning with a focus on medical image analysis.",
  },
  {
    name: "Maya Patel",
    role: "Cosmetic Chemist",
    bio: "Formulates and tests skincare products with a background in organic chemistry and biotechnology.",
  },
]

const About = () => (
  <motion.div
    className="min-h-screen p-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">About DermaVerse</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          DermaVerse was created with a simple but powerful mission: to make professional-grade skincare analysis
          accessible to everyone, regardless of location or budget.
        </p>
        <p className="mb-4">
          Using advanced artificial intelligence and machine learning algorithms, we've developed a platform that can
          analyze skin conditions, identify concerns, and provide personalized recommendations—all from the comfort of
          your home.
        </p>
        <p>
          Our technology is continuously learning and improving, trained on diverse skin types, tones, and conditions to
          ensure accurate and inclusive analysis for all users.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="font-medium mb-2">Upload</h3>
            <p className="text-sm">Take a clear selfie in natural lighting and upload it to our secure platform.</p>
          </div>

          <div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="font-medium mb-2">Analyze</h3>
            <p className="text-sm">Our AI examines your skin for various conditions, concerns, and characteristics.</p>
          </div>

          <div>
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="font-medium mb-2">Recommend</h3>
            <p className="text-sm">Receive personalized skincare advice and product recommendations.</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-purple-600 dark:text-purple-400 text-sm mb-2">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

export default About
