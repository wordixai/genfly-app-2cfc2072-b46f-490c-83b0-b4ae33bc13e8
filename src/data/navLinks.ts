import { 
  Globe, 
  Mail, 
  Github, 
  FileText, 
  BookOpen, 
  Code, 
  Music, 
  Video, 
  ShoppingCart, 
  Search,
  Cloud,
  Briefcase,
  Newspaper,
  MessageSquare,
  Image,
  BarChart
} from "lucide-react";

export const navCategories = [
  {
    title: "Work & Productivity",
    links: [
      {
        title: "Gmail",
        description: "Email service by Google",
        icon: Mail,
        url: "https://mail.google.com",
        color: "bg-red-500",
        hoverInfo: "Access your emails, drafts, and manage your inbox"
      },
      {
        title: "Google Drive",
        description: "Cloud storage & file sharing",
        icon: Cloud,
        url: "https://drive.google.com",
        color: "bg-blue-500",
        hoverInfo: "Store, share, and collaborate on files and folders"
      },
      {
        title: "Notion",
        description: "All-in-one workspace",
        icon: FileText,
        url: "https://notion.so",
        color: "bg-gray-800",
        hoverInfo: "Notes, tasks, wikis, and databases in one tool"
      },
      {
        title: "Trello",
        description: "Visual project management",
        icon: Briefcase,
        url: "https://trello.com",
        color: "bg-sky-500",
        hoverInfo: "Organize projects with boards, lists, and cards"
      }
    ]
  },
  {
    title: "Development",
    links: [
      {
        title: "GitHub",
        description: "Code hosting platform",
        icon: Github,
        url: "https://github.com",
        color: "bg-purple-600",
        hoverInfo: "Host and review code, manage projects, and build software"
      },
      {
        title: "Stack Overflow",
        description: "Developer community",
        icon: Code,
        url: "https://stackoverflow.com",
        color: "bg-orange-500",
        hoverInfo: "Find answers to coding questions and share knowledge"
      },
      {
        title: "CodePen",
        description: "Front-end code playground",
        icon: Code,
        url: "https://codepen.io",
        color: "bg-black",
        hoverInfo: "Build, test, and discover front-end code"
      },
      {
        title: "MDN Web Docs",
        description: "Web development resources",
        icon: BookOpen,
        url: "https://developer.mozilla.org",
        color: "bg-blue-700",
        hoverInfo: "Resources for developers, by developers"
      }
    ]
  },
  {
    title: "Entertainment",
    links: [
      {
        title: "YouTube",
        description: "Video sharing platform",
        icon: Video,
        url: "https://youtube.com",
        color: "bg-red-600",
        hoverInfo: "Watch, share, and upload videos"
      },
      {
        title: "Spotify",
        description: "Music streaming service",
        icon: Music,
        url: "https://spotify.com",
        color: "bg-green-600",
        hoverInfo: "Stream music, podcasts, and audiobooks"
      },
      {
        title: "Netflix",
        description: "Streaming entertainment service",
        icon: Video,
        url: "https://netflix.com",
        color: "bg-red-700",
        hoverInfo: "Watch TV shows, movies, documentaries, and more"
      },
      {
        title: "Unsplash",
        description: "Free high-resolution photos",
        icon: Image,
        url: "https://unsplash.com",
        color: "bg-gray-900",
        hoverInfo: "Beautiful, free images and photos"
      }
    ]
  },
  {
    title: "Information",
    links: [
      {
        title: "Google",
        description: "Search engine",
        icon: Search,
        url: "https://google.com",
        color: "bg-blue-500",
        hoverInfo: "Search the world's information"
      },
      {
        title: "Wikipedia",
        description: "Free online encyclopedia",
        icon: BookOpen,
        url: "https://wikipedia.org",
        color: "bg-gray-500",
        hoverInfo: "Free encyclopedia that anyone can edit"
      },
      {
        title: "The New York Times",
        description: "News and journalism",
        icon: Newspaper,
        url: "https://nytimes.com",
        color: "bg-gray-800",
        hoverInfo: "Breaking news, reviews, and opinion"
      },
      {
        title: "Reddit",
        description: "Social news aggregation",
        icon: MessageSquare,
        url: "https://reddit.com",
        color: "bg-orange-600",
        hoverInfo: "Network of communities based on people's interests"
      }
    ]
  },
  {
    title: "Shopping",
    links: [
      {
        title: "Amazon",
        description: "Online shopping",
        icon: ShoppingCart,
        url: "https://amazon.com",
        color: "bg-yellow-500",
        hoverInfo: "Online shopping for electronics, apparel, computers, and more"
      },
      {
        title: "eBay",
        description: "Online marketplace",
        icon: ShoppingCart,
        url: "https://ebay.com",
        color: "bg-red-500",
        hoverInfo: "Buy and sell electronics, cars, fashion, and more"
      },
      {
        title: "Etsy",
        description: "Handmade & vintage items",
        icon: ShoppingCart,
        url: "https://etsy.com",
        color: "bg-orange-500",
        hoverInfo: "Unique and creative goods from independent sellers"
      },
      {
        title: "AliExpress",
        description: "Online retail service",
        icon: ShoppingCart,
        url: "https://aliexpress.com",
        color: "bg-red-600",
        hoverInfo: "Online shopping for products at factory prices"
      }
    ]
  }
];