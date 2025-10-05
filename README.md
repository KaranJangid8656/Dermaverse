# DermaVerse - AI-Powered Skincare Assistant



<div align="center" style="margin: 2rem 0;">
  <img 
    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1759666145/Screenshot_2025-10-05_173802_z2heqd.png" 
    alt="DermaVerse UI Screenshot" 
    style="max-width: 100%; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
  />
</div>

## 🌟 Overview

DermaVerse is your personal AI-powered skincare assistant that analyzes, recommends, and helps you achieve your best skin ever. This modern web application allows users to upload selfies for instant AI skin analysis, receive personalized skincare recommendations, and track their skin's improvement over time.

## ✨ Features

### 🔍 **Skin Analysis**
- Upload selfies for instant AI-powered skin condition analysis
- Get detailed insights about your skin health
- Identify potential skin concerns and conditions

### 💡 **Personalized Recommendations**
- Receive customized skincare tips based on your unique skin needs
- Get product recommendations tailored to your skin type
- Daily skincare routine suggestions

### 📊 **Progress Tracking**
- Monitor your skin's improvement over time
- Detailed analytics and visual progress reports
- Track changes in skin conditions and improvements

### 🎨 **Modern UI/UX**
- Beautiful, responsive design with dark/light mode support
- Smooth animations powered by Framer Motion
- Intuitive navigation and user experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dermaverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add necessary environment variables:
   ```env
   # Add your environment variables here
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
dermaverse/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── analyze/           # Skin analysis page
│   ├── contact/           # Contact page
│   ├── tips/              # Skincare tips page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   ├── home.tsx          # Home page component
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries and configurations
├── public/               # Static assets
├── src/                  # Source code (if using src directory)
├── styles/               # Additional styles
├── components.json       # shadcn/ui configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15.2.4 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **State Management:** React hooks
- **Form Handling:** React Hook Form + Zod validation

### Key Dependencies
- **React 19** - Latest React with concurrent features
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark/light mode support
- **Recharts** - Data visualization for progress tracking
- **date-fns** - Date manipulation utilities
- **Sonner** - Toast notifications

## 📱 Pages

- **Home (`/`)** - Landing page with feature overview
- **Analyze (`/analyze`)** - Skin analysis upload and results
- **Tips (`/tips`)** - Personalized skincare recommendations
- **About (`/about`)** - Information about DermaVerse
- **Contact (`/contact`)** - Contact information and support

## 🎯 Key Features Implementation

### Skin Analysis
- Image upload component with drag-and-drop support
- Integration with AI skin analysis API
- Real-time analysis results display

### Progress Tracking
- Visual charts showing skin improvement
- Historical data storage and retrieval
- Progress comparison tools

### Responsive Design
- Mobile-first approach
- Dark/light mode toggle
- Smooth transitions and animations


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



