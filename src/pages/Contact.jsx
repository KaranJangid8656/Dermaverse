"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus("sending")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      setFormData({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <motion.div
      className="min-h-screen p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <p className="mb-6">Have questions, feedback, or need support? We'd love to hear from you!</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-shadow"
              >
                {formStatus === "sending" ? (
                  <span className="flex items-center justify-center">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {formStatus === "success" && (
                <motion.div
                  className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-purple-600 dark:text-purple-400">support@dermaverse.com</p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span>📱</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span>📱</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span>📱</span>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Office Hours</h3>
                <p>Monday - Friday: 9am - 5pm EST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-medium mb-3">FAQ</h3>
                <div className="space-y-2">
                  <details className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    <summary className="font-medium cursor-pointer">Is my data secure?</summary>
                    <p className="mt-2 text-sm">
                      Yes, all images and personal information are encrypted and never shared with third parties.
                    </p>
                  </details>
                  <details className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
                    <summary className="font-medium cursor-pointer">How accurate is the AI analysis?</summary>
                    <p className="mt-2 text-sm">
                      Our AI has been trained on thousands of images and achieves over 90% accuracy for common skin
                      conditions.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
