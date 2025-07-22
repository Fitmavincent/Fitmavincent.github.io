// projectsData.js
// This file contains the data for your projects showcase.
// Edit this file to add, remove, or modify your projects.

export const projectsData = [
  {
    id: 1,
    title: "ReceiptGenie",
    description: "AI-powered receipt scanner and expense tracker app. Scan receipts instantly with multi-language support, organize with smart tagging, and keep your data private with local storage.",// Place your project images in the static folder
    technologies: ["React Native", "AI/OCR", "iOS", "Privacy-First"],
    liveUrl: "https://receipt-genie.com/",
    githubUrl: "", // Add if you have a public repo
    featured: true // Set to true for projects you want to highlight
  },
  {
    id: 2,
    title: "Vince Home Channel",
    description: "Personal web scraping and deal aggregation platform that crawls popular Australian shopping sites like OzBargain, Coles, and Woolworths to find the best deals and price comparisons in one place.",
    technologies: ["Web Scraping", "Python", "Data Aggregation", "Vue"],
    liveUrl: "https://home.fitmavincent.dev/",
    githubUrl: "", // Add if you have a public repo
    featured: true
  },
  {
    id: 3,
    title: "Self-Hosted Lobe Chat",
    description: "Fully customized AI chat platform with complete infrastructure setup. Features Clerk authentication, Neon Postgres database, and modern chat interface for seamless AI conversations with multiple models.",
    technologies: ["Next.js", "Clerk Auth", "Neon Postgres", "AI/LLM"],
    liveUrl: "https://chat.fitmavincent.dev/chat",
    githubUrl: "", // Add if you have a public repo for your customizations
    featured: true
  },
  // Add more projects here...
]

// You can also add project categories if you want to organize them
export const projectCategories = [
  "Web Development",
  "Mobile Apps",
  "Data Science",
  "Machine Learning",
  "Open Source"
]
