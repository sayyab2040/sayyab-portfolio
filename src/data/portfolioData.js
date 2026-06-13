import {
  Activity,
  BarChart3,
  Bell,
  Bot,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileText,
  Gauge,
  Github,
  GitBranch,
  Globe2,
  GraduationCap,
  Layers,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Search,
  Server,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  UserCheck,
  Users,
  Workflow,
  Zap
} from "lucide-react";

export const identity = {
  name: "Sayyab Ashraf",
  role: "Software Engineer",
  positioning:
    "Software Engineer | Full-Stack Application Development | QA Automation & DevOps | E-commerce & Product Operations",
  headline: "Hi, I'm Sayyab Ashraf.",
  statement:
    "I build full-stack applications, test software quality, and automate deployment workflows.",
  intro:
    "A Software Engineer focused on full-stack application development, QA automation, DevOps workflows, cloud deployment, monitoring, and product-focused digital solutions.",
  location: "Rawalpindi, Pakistan",
  phone: "03171513318",
  email: "sayyabashraf354@gmail.com",
  github: "https://github.com/sayyab2040",
  linkedin: "https://www.linkedin.com/in/sayyab-ashraf"
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "TravEra", href: "#travera" },
  { label: "DevOps", href: "#devops" },
  { label: "QA", href: "#qa" },
  { label: "E-commerce", href: "#ecommerce" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const socials = [
  { label: "GitHub", href: identity.github, Icon: Github },
  { label: "LinkedIn", href: identity.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${identity.email}`, Icon: Mail }
];

export const heroBadges = [
  "Full-Stack Development",
  "QA Automation",
  "DevOps",
  "Product Operations"
];

export const heroCards = [
  { label: "Available for Work", value: "Open", Icon: UserCheck },
  { label: "Project Builder", value: "4+", Icon: Briefcase },
  { label: "Quality Focus", value: "QA", Icon: ShieldCheck },
  { label: "Deployment Workflow", value: "CI/CD", Icon: Zap }
];

export const aboutCards = [
  {
    title: "Full-Stack Workflows",
    description: "Frontend, backend, API integration, authentication, dashboards, and databases.",
    Icon: Layers
  },
  {
    title: "QA & Testing",
    description: "Manual testing, automation flows, API validation, bug reporting, and documentation.",
    Icon: ClipboardCheck
  },
  {
    title: "DevOps Pipelines",
    description: "GitHub, Jenkins, Docker, cloud deployment, Nginx, quality gates, and monitoring.",
    Icon: Workflow
  },
  {
    title: "Product Operations",
    description: "Marketplace research, product sourcing, competitor analysis, and listing workflows.",
    Icon: ShoppingCart
  }
];

export const lifecycle = [
  { label: "Planning", Icon: FileText },
  { label: "UI/UX Design", Icon: Sparkles },
  { label: "Development", Icon: Code2 },
  { label: "Testing", Icon: ClipboardCheck },
  { label: "Deployment", Icon: Cloud },
  { label: "Monitoring", Icon: Activity }
];

export const skills = [
  {
    title: "Core Software Engineering",
    description: "Practical engineering foundations across planning, implementation, and documentation.",
    Icon: Code2,
    items: [
      "Software Development",
      "Full-Stack Development",
      "Application Development",
      "Technical Documentation",
      "Problem Solving",
      "Project Planning"
    ]
  },
  {
    title: "Frontend / App Development",
    description: "Responsive interface implementation for web and app-oriented product workflows.",
    Icon: Globe2,
    items: [
      "React",
      "Flutter",
      "Dart",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive UI",
      "UI Implementation"
    ]
  },
  {
    title: "Backend / Database / APIs",
    description: "Backend integration, data persistence, authentication, and REST-based services.",
    Icon: Database,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Authentication",
      "Backend Integration"
    ]
  },
  {
    title: "QA / Testing",
    description: "Manual and automated software quality workflows across UI, API, and defects.",
    Icon: ClipboardCheck,
    items: [
      "Software Testing",
      "QA Automation",
      "Manual Testing",
      "Automated Testing",
      "Selenium WebDriver",
      "Jira",
      "SoapUI",
      "Ranorex",
      "API Testing",
      "Test Case Design",
      "Bug Tracking"
    ]
  },
  {
    title: "DevOps / Cloud / Deployment",
    description: "Delivery pipelines, containers, cloud servers, quality checks, and monitoring.",
    Icon: GitBranch,
    items: [
      "GitHub",
      "Jenkins",
      "Docker",
      "Docker Compose",
      "CI/CD",
      "Linux Server Management",
      "Nginx",
      "AWS EC2",
      "SonarQube",
      "Prometheus",
      "Grafana",
      "Monitoring"
    ]
  },
  {
    title: "E-commerce / Product Operations",
    description: "Product research and marketplace workflows that connect software with business goals.",
    Icon: ShoppingCart,
    items: [
      "Product Research",
      "Product Sourcing",
      "Listing Optimization",
      "Competitor Analysis",
      "Amazon Virtual Assistance",
      "Marketplace Research",
      "Product Operations"
    ]
  }
];

export const projects = [
  {
    title: "TravEra - AI-Based Travel Planning and Booking Platform",
    category: "Final Year Project / Product Project",
    description:
      "TravEra is an AI-based travel planning and booking platform designed to combine personalized trip planning, vendor listings, itinerary customization, recommendations, bookings, weather information, local events, emergency support, messaging, reviews, and notifications into one connected travel experience.",
    features: [
      "AI-assisted trip planning",
      "Traveler dashboard",
      "Vendor hub",
      "Marketplace-style listings",
      "Booking workflows",
      "Bidding and vendor offers",
      "Weather and location integration",
      "Reviews and messaging",
      "Emergency support",
      "SRDS and documentation planning"
    ],
    tags: ["React", "APIs", "Dashboards", "Bookings", "AI Planning"],
    visual: "travel",
    Icon: Bot
  },
  {
    title: "CI/CD Pipeline and Cloud Deployment Workflow",
    category: "DevOps / Deployment",
    description:
      "Implemented a DevOps-based workflow involving GitHub, Jenkins, Docker, Docker Compose, cloud server deployment, Nginx configuration, SonarQube quality analysis, and Grafana monitoring.",
    features: [
      "GitHub repository workflow",
      "Jenkins CI/CD pipeline",
      "Docker-based deployment",
      "Linux server configuration",
      "Nginx setup",
      "SonarQube quality analysis",
      "Grafana monitoring dashboard",
      "Deployment troubleshooting"
    ],
    tags: ["GitHub", "Jenkins", "Docker", "Nginx", "Grafana"],
    visual: "devops",
    Icon: GitBranch
  },
  {
    title: "Software Testing and QA Automation Projects",
    category: "Testing / QA",
    description:
      "Completed practical software testing projects involving manual testing, automated testing, API testing, bug tracking, defect reporting, and structured test documentation.",
    features: [
      "Selenium WebDriver browser automation",
      "Login/logout testing",
      "Functional testing",
      "Jira bug tracking",
      "SoapUI API testing",
      "Ranorex UI automation",
      "Test case design",
      "Defect reporting",
      "Expected vs actual result analysis"
    ],
    tags: ["Selenium", "Jira", "SoapUI", "Ranorex", "API Testing"],
    visual: "qa",
    Icon: ClipboardCheck
  },
  {
    title: "E-commerce Product Research and Marketplace Operations",
    category: "Product Operations / E-commerce",
    description:
      "Worked on e-commerce and marketplace-related workflows including product research, sourcing, competitor analysis, listing optimization, keyword research, and Amazon virtual assistance tasks.",
    features: [
      "Product research",
      "Competitor analysis",
      "Supplier/sourcing research",
      "Listing optimization",
      "Marketplace research",
      "Product positioning",
      "Amazon VA workflows"
    ],
    tags: ["Research", "Sourcing", "Amazon VA", "Keywords", "Analytics"],
    visual: "commerce",
    Icon: ShoppingCart
  }
];

export const traveraModules = [
  "AI recommendations",
  "Traveler dashboard",
  "Vendor listings",
  "Bidding system",
  "Booking management",
  "Weather integration",
  "Local events",
  "Messaging",
  "Reviews",
  "Emergency assistance",
  "Notifications"
];

export const traveraFlows = [
  {
    title: "User Workflow",
    steps: [
      "User",
      "Plan Trip",
      "AI Recommendations",
      "Vendor Offers",
      "Booking",
      "Weather/Events",
      "Messaging/Reviews"
    ]
  },
  {
    title: "Vendor Workflow",
    steps: [
      "Vendor Login",
      "Create Listing",
      "Receive Trip Requests",
      "Submit Bids",
      "Manage Bookings",
      "Track Earnings/Reviews"
    ]
  },
  {
    title: "DevOps Workflow",
    steps: [
      "Code",
      "GitHub",
      "Jenkins",
      "Docker",
      "SonarQube",
      "Cloud Deployment",
      "Grafana Monitoring"
    ]
  }
];

export const devOpsSteps = [
  { label: "Developer Code", Icon: Terminal },
  { label: "GitHub", Icon: Github },
  { label: "Jenkins CI/CD", Icon: Settings },
  { label: "Docker Build", Icon: Package },
  { label: "SonarQube Quality Check", Icon: ShieldCheck },
  { label: "Cloud Server Deployment", Icon: Server },
  { label: "Grafana Monitoring", Icon: Gauge }
];

export const devOpsCards = [
  {
    title: "Code & Version Control",
    description: "Repository-based workflow with structured branches and clear handoff points.",
    Icon: GitBranch
  },
  {
    title: "CI/CD Automation",
    description: "Jenkins jobs coordinate build, test, quality, and deployment steps.",
    Icon: Workflow
  },
  {
    title: "Containerization",
    description: "Docker and Docker Compose keep application environments repeatable.",
    Icon: Package
  },
  {
    title: "Quality Analysis",
    description: "SonarQube adds a quality gate before deployment decisions.",
    Icon: ShieldCheck
  },
  {
    title: "Deployment",
    description: "Linux cloud server, Nginx configuration, and deployment troubleshooting.",
    Icon: Cloud
  },
  {
    title: "Monitoring",
    description: "Grafana dashboards track uptime, health, and operational signals.",
    Icon: Activity
  }
];

export const devOpsMetrics = [
  { label: "Build Duration", value: 44, suffix: " sec", Icon: Cpu },
  { label: "Quality Score", value: "A", suffix: "", Icon: ShieldCheck },
  { label: "Deployment Health", value: "Active", suffix: "", Icon: Activity },
  { label: "Monitoring Uptime", value: 99.9, suffix: "%", Icon: Gauge }
];

export const qaTools = [
  {
    title: "Selenium WebDriver",
    description: "Browser automation and functional testing.",
    Icon: Globe2
  },
  {
    title: "Jira",
    description: "Bug tracking and issue management.",
    Icon: ClipboardCheck
  },
  {
    title: "SoapUI",
    description: "API request/response testing.",
    Icon: Server
  },
  {
    title: "Ranorex",
    description: "UI automation workflow.",
    Icon: Settings
  },
  {
    title: "API Testing",
    description: "Endpoint checks, response validation, and request flow coverage.",
    Icon: Server
  },
  {
    title: "Test Documentation",
    description: "Reports, screenshots, expected vs actual results.",
    Icon: FileText
  }
];

export const qaWorkflow = [
  "Requirement Understanding",
  "Test Case Design",
  "Test Execution",
  "Bug Reporting",
  "Retesting",
  "Documentation"
];

export const ecommerceCards = [
  {
    title: "Product Research",
    description: "Demand, market fit, and product opportunity evaluation.",
    Icon: Search
  },
  {
    title: "Sourcing Research",
    description: "Supplier discovery, comparison, and sourcing workflow support.",
    Icon: Building2
  },
  {
    title: "Listing Optimization",
    description: "Keyword-focused titles, bullets, positioning, and conversion signals.",
    Icon: FileText
  },
  {
    title: "Competitor Analysis",
    description: "Marketplace comparison across pricing, reviews, and differentiation.",
    Icon: BarChart3
  },
  {
    title: "Marketplace Operations",
    description: "Structured operations for product positioning and ongoing research.",
    Icon: ShoppingCart
  },
  {
    title: "Amazon VA Workflows",
    description: "Amazon virtual assistance tasks and operational process support.",
    Icon: Users
  }
];

export const education = [
  {
    title: "Software Engineering",
    place: "COMSATS University Islamabad",
    period: "2022-2026",
    Icon: GraduationCap
  },
  {
    title: "ICS",
    place: "Cadet College Palandri",
    period: "2019-2021",
    Icon: GraduationCap
  },
  {
    title: "Matriculation",
    place: "Cadet College Palandri",
    period: "2017-2019",
    Icon: GraduationCap
  }
];

export const contactDetails = [
  { label: "Email", value: identity.email, href: `mailto:${identity.email}`, Icon: Mail },
  { label: "Phone", value: identity.phone, href: `tel:${identity.phone}`, Icon: Phone },
  { label: "GitHub", value: "github.com/sayyab2040", href: identity.github, Icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/sayyab-ashraf", href: identity.linkedin, Icon: Linkedin },
  { label: "Location", value: identity.location, href: null, Icon: MapPin }
];

export const footerLinks = [
  { label: "GitHub", href: identity.github, Icon: Github },
  { label: "LinkedIn", href: identity.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${identity.email}`, Icon: Mail }
];

export const resume = {
  url: "/assets/Sayyab_Ashraf_Resume.pdf",
  fileName: "Sayyab_Ashraf_Resume.pdf",
  isAvailable: true
};

export const mockupIcons = {
  Activity,
  Bell,
  Bot,
  Calendar,
  CheckCircle2,
  LineChart,
  Mail,
  MessageCircle,
  Package,
  Search,
  Server,
  ShieldCheck
};
