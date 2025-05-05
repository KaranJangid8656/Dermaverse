import { Navbar } from "@/components/navbar"
import { Home } from "@/components/home"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}
