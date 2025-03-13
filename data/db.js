import { FaHtml5, FaGithub, FaRocket } from "react-icons/fa";
import { 
  SiJavascript, 
  SiReact, 
  SiVuedotjs, 
  SiAngular, 
  SiNodedotjs, 
  SiExpress, 
  SiNextdotjs, 
  SiSvelte, 
  SiTailwindcss, 
  SiBootstrap, 
  SiTypescript, 
  SiGraphql, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiFirebase, 
  SiDocker, 
  SiKubernetes, 
  SiGithubactions 
} from "react-icons/si";

export const techCourses = [
  { 
    title: 'HTML & CSS', 
    icon: <FaHtml5 size={40} color="#E34F26" />, 
    description: 'Learn the building blocks of the web by mastering HTML for structure and CSS for styling. This course covers semantic HTML, responsive design, CSS Flexbox, Grid, animations, and best practices to create visually appealing and accessible web pages.' 
  },
  { 
    title: 'JavaScript', 
    icon: <SiJavascript size={40} color="#F7DF1E" />, 
    description: 'Understand the fundamental concepts of JavaScript, the language powering the web. Learn variables, loops, functions, DOM manipulation, event handling, ES6+ features, and asynchronous programming. This course prepares you for both frontend and backend development.' 
  },
  { 
    title: 'React', 
    icon: <SiReact size={40} color="#61DAFB" />, 
    description: 'Master React.js, the most popular JavaScript library for building interactive UIs. Learn component-based architecture, hooks, state management with Redux or Context API, routing, and best practices for building scalable single-page applications.' 
  },
  { 
    title: 'Vue.js', 
    icon: <SiVuedotjs size={40} color="#4FC08D" />, 
    description: 'Explore Vue.js, a progressive JavaScript framework for building user-friendly interfaces. Learn reactivity, component-based development, Vue Router, Vuex for state management, and how to integrate Vue with APIs and backend services.' 
  },
  { 
    title: 'Angular', 
    icon: <SiAngular size={40} color="#DD0031" />, 
    description: 'Get hands-on experience with Angular, a TypeScript-based framework for building enterprise-grade applications. Understand directives, components, services, RxJS for reactive programming, dependency injection, and the powerful Angular CLI.' 
  },
  { 
    title: 'Node.js', 
    icon: <SiNodedotjs size={40} color="#339933" />, 
    description: 'Learn to build scalable and high-performance server-side applications using Node.js. This course covers asynchronous programming, event-driven architecture, Express.js for API development, authentication, and working with databases like MongoDB and PostgreSQL.' 
  },
  { 
    title: 'Express.js', 
    icon: <SiExpress size={40} color="#000000" />, 
    description: 'Discover how to build fast and lightweight web applications with Express.js, the minimal Node.js framework. Learn middleware, routing, request handling, REST API creation, authentication, and database integration for robust backend solutions.' 
  },
  { 
    title: 'Next.js', 
    icon: <SiNextdotjs size={40} color="#000000" />, 
    description: 'Leverage the power of Next.js for server-side rendering (SSR) and static site generation (SSG). Learn dynamic routing, API routes, performance optimization, and how to build full-stack applications with React and Next.js.' 
  },
  { 
    title: 'Svelte', 
    icon: <SiSvelte size={40} color="#FF3E00" />, 
    description: 'Svelte offers a unique approach to UI development by compiling code at build time rather than runtime. Learn how to create fast, lightweight applications with a minimal learning curve and improved performance over traditional frameworks.' 
  },
  { 
    title: 'Tailwind CSS', 
    icon: <SiTailwindcss size={40} color="#38B2AC" />, 
    description: 'Learn Tailwind CSS, a utility-first framework that speeds up UI development with pre-defined classes. Discover how to create modern, responsive designs efficiently, customize styles, and build stunning interfaces without writing custom CSS.' 
  },
  { 
    title: 'Bootstrap', 
    icon: <SiBootstrap size={40} color="#7952B3" />, 
    description: 'Bootstrap is one of the most popular frontend frameworks for building responsive websites. This course covers its grid system, components, utilities, theming, and customization to create sleek, mobile-first designs.' 
  },
  { 
    title: 'TypeScript', 
    icon: <SiTypescript size={40} color="#3178C6" />, 
    description: 'Enhance your JavaScript skills with TypeScript, a superset that adds static typing for better maintainability. Learn interfaces, generics, advanced types, and how to integrate TypeScript into projects with React, Node.js, and Angular.' 
  },
  { 
    title: 'GraphQL', 
    icon: <SiGraphql size={40} color="#E10098" />, 
    description: 'Learn GraphQL, a modern alternative to REST APIs that allows flexible and efficient data fetching. Understand schemas, resolvers, queries, mutations, and subscriptions while building scalable APIs with Apollo Server and Client.' 
  },
  { 
    title: 'MongoDB', 
    icon: <SiMongodb size={40} color="#47A248" />, 
    description: 'Master MongoDB, a NoSQL database for modern web applications. Learn schema design, CRUD operations, indexing, aggregation pipelines, and how to integrate MongoDB with Node.js using Mongoose for efficient database management.' 
  },
  { 
    title: 'PostgreSQL', 
    icon: <SiPostgresql size={40} color="#336791" />, 
    description: 'Explore PostgreSQL, a powerful open-source relational database. Learn database design, advanced SQL queries, indexing, transactions, stored procedures, and how to integrate it with backend frameworks like Node.js and Django.' 
  },
  { 
    title: 'MySQL', 
    icon: <SiMysql size={40} color="#4479A1" />, 
    description: 'MySQL is one of the most widely-used relational database systems. This course covers SQL fundamentals, data modeling, query optimization, transactions, and how to connect MySQL with web applications for scalable solutions.' 
  },
  { 
    title: 'Firebase', 
    icon: <SiFirebase size={40} color="#FFCA28" />, 
    description: 'Discover Firebase, Google’s powerful Backend-as-a-Service platform. Learn real-time database integration, authentication, cloud functions, storage, hosting, and how to build full-stack serverless applications efficiently.' 
  },
  { 
    title: 'Docker', 
    icon: <SiDocker size={40} color="#2496ED" />, 
    description: 'Learn how to containerize applications with Docker, ensuring consistency across development and production. This course covers Docker images, containers, Docker Compose, networking, and deploying web apps with containerized environments.' 
  },
  { 
    title: 'Kubernetes', 
    icon: <SiKubernetes size={40} color="#326CE5" />, 
    description: 'Master Kubernetes, the industry-standard container orchestration tool. Learn how to manage containerized applications at scale, work with clusters, deployments, services, and automate DevOps workflows.' 
  },
  { 
    title: 'Git & GitHub', 
    icon: <FaGithub size={40} color="#181717" />, 
    description: 'Gain expertise in Git, the most popular version control system, and GitHub for collaborative development. Learn branching, merging, pull requests, Git workflows, and how to manage repositories effectively.' 
  },
  { 
    title: 'CI/CD with GitHub Actions', 
    icon: <SiGithubactions size={40} color="#2088FF" />, 
    description: 'Automate your development pipeline with Continuous Integration and Continuous Deployment using GitHub Actions. Learn to create workflows for testing, building, and deploying web applications effortlessly.' 
  },
  { 
    title: 'Web Performance Optimization', 
    icon: <FaRocket size={40} color="#FF4500" />, 
    description: 'Optimize your web applications for speed and efficiency. Learn techniques like lazy loading, image optimization, caching strategies, minification, and performance monitoring to improve user experience and SEO rankings.' 
  }
];
