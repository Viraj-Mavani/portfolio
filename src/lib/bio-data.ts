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
  modeDescriptions?: Partial<Record<string, string>>
  tags: string[]
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
    title: "Engineer",
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
    skills: ["Python", "TypeScript", "JavaScript", "C#", "Java", "SQL", "C++", "R"],
  },
  {
    label: "Frameworks / Web",
    skills: ["React", "Next.js", ".NET Core", "Node.js", "FastAPI", "Tailwind CSS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Firebase"],
  },
  {
    label: "Data Science & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "LangChain", "Hugging Face"],
  },
  {
    label: "Data Engineering",
    skills: ["Apache Spark", "Airflow", "Kafka", "dbt", "ETL Pipelines", "Data Modeling"],
  },
  {
    label: "Cloud & Tools",
    skills: ["AWS", "Azure", "Git", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
]

export const experiences: Experience[] = [
  {
    role: "Graduate Teaching Assistant",
    company: "Western University",
    location: "London, ON",
    period: "Jan 2024 - Apr 2025",
    description:
      "Mentored 200+ students in CS2034b (Data Analytics: Principles), delivering comprehensive labs and tutorials on Python, machine learning, and data visualization. Facilitated academic success by simplifying complex algorithmic concepts, resulting in improved average course satisfaction scores and student performance metrics.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "SQL", "Jupyter Notebooks", "VBA", "Data Analytics"],
  },
  {
    role: "Full Stack Developer",
    company: "Dexoc Solutions",
    location: "Ahmedabad, India",
    period: "Sep 2023 - Jul 2024",
    description:
      "Engineered scalable full-stack solutions using .NET Core and AngularJS, optimizing front-end/back-end integration to boost client system performance by 20%. Led 15+ enterprise web scraping projects for international clients, processing millions of records with 99%+ data integrity. Implemented serverless AWS Lambda pipelines to streamline data storage, while mentoring junior developers to elevate team coding standards.",
    modeDescriptions: {
      "fullstack": "Engineered scalable full-stack solutions using .NET Core and AngularJS, optimizing integration to boost system performance by 20%. Implemented secure JWT pipelines and real-time synchronization, while mentoring junior developers to elevate team coding standards.",
      "data": "Spearheaded 15+ enterprise web scraping projects for international clients, bypassing anti-scraping defenses to process millions of records with 99%+ integrity. Engineered serverless AWS Lambda data pipelines to streamline cloud storage and large-scale extraction tasks.",
      "ai-ml": "Led large-scale data extraction projects, ensuring precise data modeling and unstructured data processing essential for downstream machine learning applications. Managed cloud-native data pipelines via AWS Lambda for international enterprise clients.",
    },
    tags: ["C#", ".NET Core", "AngularJS", "JWT Token", "Python", "AWS Lambda", "PostgreSQL", "SQL", "Azure DevOps/ServiceBus", "Docker", "Selenium", "Scrapy", "CI/CD", "Web Scraping", "xUnit"],
  },
  {
    role: "Software Engineer",
    company: "FSP MEDIA",
    location: "Ahmedabad, India",
    period: "Mar 2023 - Aug 2023",
    description:
      "Architected modular .NET backend systems for diverse industry clients, ensuring high availability and timely delivery. Partnered directly with stakeholders to translate complex business requirements into technical specifications. Enhanced system reliability and code maintainability by establishing comprehensive unit testing protocols and rigorous debugging cycles.",
    tags: ["C#", ".NET Core", "ASP.NET Web API", "React", "SQL", "PostgreSQL", "Entity Framework", "Dapper", "MSSQL", "Git", "System Architecture"],
  },
  {
    role: ".NET Developer Intern",
    company: "TatvaSoft",
    location: "Ahmedabad, India",
    period: "Dec 2022 - Feb 2023",
    description:
      "Contributed to production-level enterprise software, translating theoretical concepts into robust .NET solutions. Optimized application performance through proactive debugging and code refactoring within the .NET ecosystem. Collaborated with senior teams using Git and Agile methodologies to maintain high-velocity release cycles.",
    tags: ["C#", ".NET Core", "ASP.NET MVC", "LINQ", "SQL", "Entity Framework", "Git", "Unit Testing", "Agile"],
  },
]

export const certificates: Certificate[] = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "Amazon Web Services",
    date: "2026",
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

export const detailedAboutContent: Record<string, { title: string, paragraphs: string[] }> = {
  generalist: {
    title: "I'm a Full Stack AI Engineer who believes that the best code is written by those who never stop being students.",
    paragraphs: [
      "My journey didn't start with complex neural networks; it started back in India with a simple curiosity about how I could make a computer do the work for me. From those first automation scripts to completing my Master’s in AI at Western University, I’ve always been driven by the transition from 'how does this work?' to 'how can I make this better?'. Moving to Canada to specialize in AI allowed me to take my professional full-stack foundations and ground them in the deep, theoretical research that defines the next generation of software.",
      "I don't believe in being a 'master' of everything, because in this field, the moment you stop learning, you fall behind. My real expertise isn't just in a specific stack like .NET or React—it’s in the ability to pick up any tool, documentation, or research paper and turn it into a working solution. Whether I’m familiar with a technology or seeing it for the first time, I have the discipline to learn it, implement it, and ship it. To me, a technical challenge isn't a wall; it's just a new topic to master before the next deployment.",
      "Beyond the terminal, I’m deeply focused on the responsibility we have as engineers. My research into the 'Ethical Dilemmas in AI' taught me that intelligence without alignment is a liability. I’m not interested in building tech for the sake of buzzwords; I want to build systems that are genuinely useful, secure, and aligned with human values. Whether I'm processing millions of records with 99.9% uptime or fine-tuning a model, my goal is to ensure that the final product is as ethically sound as it is technically precise."
    ]
  },
  fullstack: {
    title: "I'm a Full Stack Engineer who treats the entire system—from database architecture to the final pixel—as a unified product.",
    paragraphs: [
      "My engineering mindset matured while building enterprise-grade applications in the .NET ecosystem. Moving from India to Canada to pursue my Master's at Western University, I brought a strong foundation in scalable architecture, API design, and CI/CD pipelines. For me, full-stack isn't just knowing two frameworks; it's understanding the complete lifecycle of a request and optimizing every layer it touches.",
      "I thrive in environments that require robust systems capable of handling high transaction volumes, like my work on a complex aerospace tracking system. I embrace a 'Student for Life' philosophy. If a new technology, whether it's Next.js 14, advanced Redis caching, or Azure ServiceBus, offers a better solution, I have the discipline to master it and implement it safely into production.",
      "Ultimately, my goal is to deliver software that doesn't just work, but performs flawlessly under pressure. I prioritize clean code, comprehensive unit testing, and rigorous debugging. I want to build architectures that other engineers enjoy working on and interfaces that users naturally understand."
    ]
  },
  "ai-ml": {
    title: "I'm a Machine Learning Engineer focused on moving advanced AI concepts out of the lab and into production systems.",
    paragraphs: [
      "My journey into Artificial Intelligence began when I realized standard software could only go so far in solving complex, unstructured problems. Relocating to Canada for my Master's at Western University allowed me to dive deep into neural networks, computer vision, and the ethical alignment of Large Language Models. I don't just fine-tune models; I build the pipelines and infrastructure necessary to serve them in resource-constrained environments.",
      "Because my background is rooted in full-stack development, I understand how to integrate intelligence into existing architectures. Whether I am developing a custom CNN for disease detection or crafting an agentic, local LLM assistant like Neo-Atom, my focus is always on practical implementation. A great model isn't useful if it can't be seamlessly integrated and scaled.",
      "I am also deeply invested in the safety and ethical alignment of AI systems. My Directed Studies research quantified the ethical stances of top-tier LLMs, reinforcing my belief that deploying AI without rigorous validation is irresponsible. I build systems designed to be powerful, verifiable, and genuinely useful for real-world applications."
    ]
  },
  data: {
    title: "I'm a Data Engineer who specializes in transforming the unstructured chaos of the web into high-integrity data assets.",
    paragraphs: [
      "Data is only as valuable as it is reliable. My expertise was forged through spearheading over 15 large-scale data extraction projects for international enterprise clients. Relocating to Canada for my Master's at Western University further sharpened my skills in distributed systems and parallel computing, transitioning my scripts into high-throughput ecosystems.",
      "I specialize in the gritty work of reverse-engineering complex APIs, bypassing sophisticated anti-scraping defenses, and orchestrating massive extraction tasks using distributed architectures like MPI and AWS Lambda. If the data is on the internet, I know how to extract it efficiently, ethically, and securely, ensuring 99.9% uptime and integrity.",
      "Beyond extraction, my focus revolves around the entire ETL lifecycle. I take unstructured, multi-lingual web data and implement rigorous, automated post-processing layers to validate, deduplicate, and model the information, transforming raw text into the foundation for advanced analytics and machine learning."
    ]
  }
}