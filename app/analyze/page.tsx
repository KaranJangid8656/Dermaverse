import { Navbar } from "@/components/navbar"
import { Analyze } from "@/components/analyze"

export default function AnalyzePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Analyze />
      </main>
    </div>
  )
}
