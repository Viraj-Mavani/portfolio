export interface HeroContent {
  [key: string]: {
    title: string
    description: string
  }
}

export interface AboutContent {
  [key: string]: string[];
}

export interface Education {
  degree: string
  school: string
  location: string
  period: string
  description: string
  focus?: string
  highlights?: string[]
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  description: string
  tags: string[]
}

export interface Project {
  title: string
  brief: string
  description: string
  tags: string[]
  github?: string
  live?: string
  images?: string[]
  video?: string
  mode: string[]
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  credentialUrl: string
  modes: string[]
}

export const HeroContent: HeroContent= {
  generalist: {
    title: "Full Stack AI Engineer",
    description: "Merging Full Stack Engineering with AI Research to create production-grade solutions."
  },
  fullstack: {
    title: "Full Stack Developer",
    description: "Architecting robust full-stack applications and high-performance APIs from frontend to database."
  },
  "ai-ml": {
    title: "Machine Learning Engineer",
    description: "Developing intelligent systems, predictive models, and optimizing neural networks for real-world applications."
  },
  data: {
    title: "Data Engineer",
    description: "Engineering distributed data pipelines, enterprise web scrapers, and processing millions of records with 99.9% uptime."
  }
}

export const aboutContent: AboutContent = {
  generalist: [
    "I am a Full Stack AI Engineer dedicated to architecting intelligent systems that bridge the gap between experimental AI research and scalable, production-grade software. I focus on building resilient, data-driven applications that prioritize both performance and intuitive UX.",
    "With a background rooted in full-stack development and an advanced specialization in AI, I design end-to-end pipelines—from high-performance backends to interactive frontends. I ensure that every layer of the stack is optimized for speed, security, and data integrity.",
    "I thrive at the intersection of engineering rigor and creative experimentation, seeking the most efficient approach to complex challenges. Beyond implementation, I prioritize software-engineering-first principles while staying current with the evolving AI landscape."
  ],
  fullstack: [
    "As a Full Stack Developer, I specialize in building robust enterprise applications using the .NET ecosystem, React, and Next.js. I focus on creating modular architectures that allow for rapid scaling and easy maintenance in high-stakes, data-intensive business environments.",
    "Experienced in leading the development of complex systems, integrating JWT-based authentication, real-time synchronization via Azure ServiceBus, and high-integrity data pipelines. My engineering philosophy emphasizes clean code, unit testing, and system reliability.",
    "I prioritize seamless user experiences and have a proven track record of improving application performance by up to 20% through proactive debugging and optimization. I leverage modern CI/CD pipelines and Azure DevOps to ensure deployment is stable and production-ready."
  ],
  "ai-ml": [
    "Focusing on the intersection of deep learning and software engineering, I leverage my Master's research in Neural Networks to move advanced AI models into production. I link abstract mathematical ideas with practical, scalable code for real-world applications.",
    "I specialize in developing custom CNN architectures—achieving 96% accuracy for specialized tasks like disease detection—and fine-tuning Large Language Models (LLMs) for domain-specific needs. I focus on making AI accessible and useful for specialized industry requirements.",
    "Proficient in PyTorch, TensorFlow, and LangChain to build intelligent features while ensuring optimization for resource-constrained environments. My academic background allows me to reduce the computational cost of intelligence while maintaining output quality."
  ],
  data: [
    "I am a Data Engineer focused on the design and implementation of distributed web scrapers and high-throughput ETL pipelines capable of processing millions of enterprise records. I specialize in transforming raw, unstructured information into clean and actionable data assets.",
    "I specialize in reverse-engineering complex APIs and bypassing sophisticated anti-scraping measures to ensure 99.9% data integrity and uptime. My systems are designed to be resilient, utilizing parallel processing with MPI to handle massive data extraction tasks efficiently.",
    "Using serverless architectures like AWS Lambda, I build infrastructures that maximize throughput while minimizing cloud costs. I have successfully delivered high-precision datasets to international clients, ensuring deduplication and formatting are handled with precision."
  ]
};

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    school: "WESTERN UNIVERSITY",
    location: "ON, Canada",
    period: "2024 - 2025",
    focus: "Specialization in Artificial Intelligence",
    description: "Conducted advanced research in Large Language Models (LLMs) and Neural Networks to optimize domain-specific AI performance.",
    highlights: [
      "GPA: 3.58/4.0 | University Ranking: Top 1%–2% of universities worldwide // 6th in Canada",
      "Directed Studies Research: 'Ethical Dilemmas in AI' – A quantitative framework evaluating ethical alignment across ChatGPT, Gemini, Claude, and DeepSeek.",
      "Developed an ML-Powered Taxi Fare Prediction system using LightGBM and Docker-based automated data pipelines.",
      "Engineered a Distributed Web Scraper using MPI for parallel computing, optimizing large-scale data extraction throughput.",
      "Relevant Coursework: Advanced AI, Distributed & Parallel Systems, AI Ethics, and Machine Learning."
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "ATMIYA UNIVERSITY",
    location: "Gujarat, India",
    period: "2019 - 2023",
    description: "Established a strong foundation in software engineering principles, algorithms, data structures, and distributed system architecture.",
    highlights: [
      "GPA: 3.62/4.0 (85.18%)",
      "Senior Capstone: Full-Stack Amazon Clone – Developed a cross-platform E-commerce app with Flutter, Node.js, and MongoDB featuring real-time payment integration (G-Pay/Apple Pay).",
      "Designed and implemented a Seller Admin Panel with real-time sales statistics and inventory management.",
      "Relevant Coursework: Python, .NET C#, Java, Web Development, Theory of Computation, Data Structures, Internet & Network Security, Data Mining, and Cloud Computing."
    ],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "R", "C++"],
  },
  {
    label: "Frameworks / Web",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Django", "Tailwind CSS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Firebase"],
  },
  {
    label: "Data Science & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "LangChain", "OpenAI", "Hugging Face"],
  },
  {
    label: "Data Engineering",
    skills: ["Apache Spark", "Airflow", "Kafka", "dbt", "ETL Pipelines", "Data Modeling"],
  },
  {
    label: "Cloud & Tools",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Git", "CI/CD", "Vercel", "Terraform"],
  },
]

export const experiences: Experience[] = [
  {
    role: "Graduate Teaching Assistant",
    company: "Western University",
    location: "London, ON",
    period: "Jan 2024 - Apr 2025",
    description:
      "Supported 200+ students in CS2034b–Data Analytics: Principles through labs, tutorials, and office hours. Facilitated student learning by clarifying complex concepts in data analytics, Python, and machine learning. Contributed to academic success and improved average course satisfaction scores.",
    tags: ["Python", "VBA", "Regex", "Pandas", "NumPy", "Matplotlib", "Microsoft Excel", "SQL", "Jupyter Notebooks"],
  },
  {
    role: "Full Stack Developer",
    company: "Dexoc Solutions",
    location: "Ahmedabad, India",
    period: "Sep 2023 - Jul 2024",
    description:
      "Worked as Full Stack Developer with expertise in Python, C#, JavaScript, and AngularJS, integrating front-end and back-end systems to streamline workflows and improving client system performance by 20%. Led 15+ web scraping projects, processing millions of data, with foreign clients, delivering accurate datasets with 99%+ data integrity. Implemented AWS Lambda functions to streamline data processing and storage, ensuring seamless integration within the AWS cloud infrastructure. Mentored junior developers and conducted code reviews to improve team delivery standards.",
    tags: ["Python", "C#", ".NET Core", "ASP.NET Web API", "JavaScript (ES6+)", "AngularJS", "SQL", "PostgreSQL", "JWT Token", "Azure DevOps", "Azure ServiceBus", "AWS Lambda", "Git/GitHub", "CI/CD Pipelines", "Docker", "Web Scraping", "Selenium", "Scrapy", "Jira", "HTML5", "CSS3", "xUnit", "Agile/Scrum", "Requirement Analysis"],
  },
  {
    role: "Software Engineer",
    company: "FSP MEDIA",
    location: "Ahmedabad, India",
    period: "Mar 2023 - Aug 2023",
    description:
      "Designed and developed .NET-based backend applications for diverse industries, ensuring modular architecture and timely project delivery. Partnered with stakeholders to translate business requirements into technical specifications and functional solutions. Enhanced system reliability & code quality by implementing comprehensive unit testing and rigorous debugging protocols.",
    tags: ["C#", ".NET Core", "ASP.NET Web API", "JavaScript (ES6+)", "AngularJS", "SQL", "PostgreSQL", "Entity Framework", "Dapper", "Microsoft SQL Server", "Git" ,"Version Control"],
  },
  {
    role: ".Net Developer Intern",
    company: "TatvaSoft",
    location: "Ahmedabad, India",
    period: "Dec 2022 - Feb 2023",
    description:
      "Contributed to production-level .NET projects, transitioning classroom concepts into enterprise-grade software solutions. Optimized application performance through hands-on development, code reviews, proactive debugging within the .NET ecosystem, and utilized version control (Git) and collaborative tools to manage codebases.",
    tags: ["C#", ".NET Core", "ASP.NET MVC", "ASP.NET Web API", "LINQ", "SQL", "Entity Framework", "Git" ,"Version Control", "Jira" , "Unit Testing"],
  },
]

export const projects: Project[] = [
  {
    title: "Aerospace Part Tracking System",
    brief:
      "Developed secure system features focusing on scalability and performance, implementing JWT-based authentication for stakeholder security. Engineered real-time data synchronization APIs and middleware using Azure ServiceBus to connect disparate stakeholders. Collaborated on backend architectural design, ensuring high availability and seamless integration of blockchain components for data immutability.",
    description:
      "Developed secure system features focusing on scalability and performance, implementing JWT-based authentication for stakeholder security. Engineered real-time data synchronization APIs and middleware using Azure ServiceBus to connect disparate stakeholders. Collaborated on backend architectural design, ensuring high availability and seamless integration of blockchain components for data immutability.",
    tags: [ ".NET Core", "AngularJS", "PostgreSQL", "Azure DevOps", "Azure ServiceBus", "Blockchain"],
    live: "https://www.skythread.aero/solution/overview",
    mode: ["fullstack"],
  },
  {
    title: "Distributed Web Scraper (MPI)",
    brief:
      "Engineered a distributed scraper using MPI for parallelism to efficiently handle large-scale data extraction. Integrated modular scheduling and checkpointing to ensure high reliability and deduplication across multi-process runs.",
    description:
      "Engineered a distributed scraper using MPI for parallelism to efficiently handle large-scale data extraction. Integrated modular scheduling and checkpointing to ensure high reliability and deduplication across multi-process runs.",
    tags: ["Python", "Message Passing Interface", "mpi4py", "CloudScraper", "Distributed Computing", "Parallel Programming"],
    github: "https://github.com/Viraj-Mavani/DistributedWebScraper",
    mode: ["data", "webscraping"],
  },
  {
    title: "Tomato Leaf Disease Detection",
    brief:
      "Developed a custom CNN achieving 96.3% test accuracy for tomato diseases; optimized for resource-constrained devices. Applied transfer learning via ResNet50 and data augmentation to improve model generalization and reduce overfitting.",
    description:
      "Developed a custom CNN achieving 96.3% test accuracy for tomato diseases; optimized for resource-constrained devices. Applied transfer learning via ResNet50 and data augmentation to improve model generalization and reduce overfitting.",
    tags: ["Python", "TensorFlow", "ResNet50", "CNN", "Keras"],
    github: "https://github.com/Viraj-Mavani/smart_agriculture_system",
    mode: ["ai-ml", "data"],
  },
  {
    title: "ML-Powered Taxi Fare Prediction",
    brief:
      "Implemented an ML-based prediction system using LightGBM, achieving an R^2 score of 83.9%. Developed a Docker-based pipeline to automate data extraction from map images, streamlining the ingestion of travel features.",
    description:
      "Implemented an ML-based prediction system using LightGBM, achieving an R^2 score of 83.9%. Developed a Docker-based pipeline to automate data extraction from map images, streamlining the ingestion of travel features.",
    tags: ["Python", "LightGBM", "Docker", "XGBoost", "Scikit-learn"],
    github: "https://github.com/Viraj-Mavani/ML-Powered-Taxi-Fare-Prediction-using-Docker",
    mode: ["ai-ml", "data"],
  },
  {
    title: "Web Scraping Automation for Business Registries",
    brief:
      "Developed 15+ Python-based web scraping systems targeting dynamic business registry websites across various regions. Each extracting millions of data points for international client, handling JavaScript rendering, pagination, and utilized reverse engineering techniques to bypass anti-scraping with 99.9% uptime. Post-processed large datasets for deduplication, formatting, and export to CSV/JSON.",
    description:
      "Developed 15+ Python-based web scraping systems targeting dynamic business registry websites across various regions. Each extracting millions of data points for international client, handling JavaScript rendering, pagination, and utilized reverse engineering techniques to bypass anti-scraping with 99.9% uptime. Post-processed large datasets for deduplication, formatting, and export to CSV/JSON.",
    tags: ["Python", "Selenium", "Scrapy", "BeautifulSoup", "Docker"],
    images: ["/projects/webscraping_1.png"],
    live: "https://www.upwork.com/freelancers/~0100fa5d569b04d18d?p=1927504018187304960",
    mode: ["data", "webscraping"],
  },
]

export const certificates: Certificate[] = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "#",
    modes: ["ai-ml"],
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "2025",
    credentialUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fcertificate%2FG47R9OJCYUM1&urlhash=WMGG&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4MZPrNvgQuG7NWAMorUL7g%3D%3D",
    modes: ["ai-ml"],
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    date: "2023",
    credentialUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fspecialization%2Fcertificate%2F33GHJ2QY82KX&urlhash=7cWX&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4MZPrNvgQuG7NWAMorUL7g%3D%3D",
    modes: ["ai-ml", "data"],
  },
  {
    title: "Web Scraping in Python",
    issuer: "Udemy",
    date: "2023",
    credentialUrl: "https://www.udemy.com/certificate/UC-67d9a135-be8f-43a4-b9e9-10f2ede5e3e3/",
    modes: ["data"],
  },
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "The App Brewery",
    date: "2022",
    credentialUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.udemy.com%2Fcertificate%2FUC-9779c93d-77bd-4610-ad4d-2e815b0a382c%2F&urlhash=h-sJ&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4MZPrNvgQuG7NWAMorUL7g%3D%3D",
    modes: ["fullstack"],
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "2022",
    credentialUrl: "https://coursera.org/share/ee17983586c604634839c77d9bca134e",
    modes: ["ai-ml", "fullstack"],
  },
  {
    title: "Programming Fundamentals",
    issuer: "Duke University",
    date: "2020",
    credentialUrl: "https://coursera.org/share/ba053d3229601521dd958d7c66b4c974",
    modes: ["fullstack"],
  },
]