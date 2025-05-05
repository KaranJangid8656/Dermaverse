"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

const Analyze = () => {
  const [image, setImage] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState(null)
  const fileInputRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result)
        setResults(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = () => {
    if (!image) return

    setAnalyzing(true)

    // Simulate AI analysis with a timeout
    setTimeout(() => {
      setAnalyzing(false)
      setResults({
        skinType: "Combination",
        concerns: ["Mild acne", "Uneven texture", "Dryness in T-zone"],
        recommendations: [
          "Use a gentle foaming cleanser",
          "Apply a non-comedogenic moisturizer",
          "Consider adding a BHA exfoliant 2-3 times per week",
          "Use SPF 30+ sunscreen daily",
        ],
      })
    }, 2000)

    // In a real app, you would use TensorFlow.js here
    // const model = await tf.loadLayersModel('path/to/model');
    // const prediction = model.predict(processedImage);
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
        <h1 className="text-3xl font-bold mb-6 text-center">Skin Analysis</h1>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <p className="mb-4 text-center">Upload a clear selfie in good lighting for the most accurate analysis.</p>

          <div className="flex flex-col items-center justify-center">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" ref={fileInputRef} />

            {!image ? (
              <div
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center cursor-pointer hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
                onClick={() => fileInputRef.current.click()}
              >
                <div className="text-4xl mb-2">📷</div>
                <p>Click to upload an image</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">JPEG, PNG or GIF files accepted</p>
              </div>
            ) : (
              <div className="w-full">
                <div className="relative w-full max-w-md mx-auto">
                  <img
                    src={image || "/placeholder.svg"}
                    alt="Uploaded skin"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <button
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                    onClick={() => setImage(null)}
                  >
                    ✕
                  </button>
                </div>

                {!analyzing && !results && (
                  <motion.button
                    className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-md mx-auto block"
                    onClick={analyzeImage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Analyze Image
                  </motion.button>
                )}

                {analyzing && (
                  <div className="mt-6 text-center">
                    <div className="inline-block w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-2">Analyzing your skin...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {results && (
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">Analysis Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-purple-600 dark:text-purple-400">Skin Type</h3>
                <p className="mb-4">{results.skinType}</p>

                <h3 className="text-lg font-medium mb-2 text-purple-600 dark:text-purple-400">Concerns</h3>
                <ul className="list-disc pl-5 mb-4">
                  {results.concerns.map((concern, index) => (
                    <li key={index}>{concern}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-purple-600 dark:text-purple-400">Recommendations</h3>
                <ul className="list-disc pl-5">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="mb-2">
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Analyze
