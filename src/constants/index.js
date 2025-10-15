import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

// Blog posts data for Blog section
const blogs = [
  {
    id: "java-collections",
    category: "Java",
    title: "Hiểu rõ về Java Collections Framework",
    description:
      "Khám phá các cấu trúc dữ liệu quan trọng trong Java như ArrayList, HashMap, HashSet và cách sử dụng hiệu quả trong dự án.",
    date: "15/09/2024",
    readTime: "8 phút đọc",
    tags: ["Java", "Collections"],
    link: "https://example.com/java-collections",
  },
  {
    id: "js-arrow-this",
    category: "JavaScript",
    title: "JavaScript ES6+: Arrow Functions và This Context",
    description:
      "Tìm hiểu cách arrow functions hoạt động khác function thường và khi nào nên dùng.",
    date: "10/09/2024",
    readTime: "6 phút đọc",
    tags: ["JavaScript", "ES6"],
    link: "https://example.com/js-arrow-this",
  },
  {
    id: "spring-boot-rest",
    category: "Java",
    title: "Spring Boot: Xây dựng RESTful API từ đầu",
    description:
      "Hướng dẫn chi tiết tạo RESTful API với Spring Boot, annotations quan trọng và best practices.",
    date: "05/09/2024",
    readTime: "12 phút đọc",
    tags: ["Java", "Spring Boot"],
    link: "https://example.com/spring-boot-rest",
  },
  {
    id: "async-await-js",
    category: "JavaScript",
    title: "Async/Await trong JavaScript: Viết code bất đồng bộ dễ đọc hơn",
    description:
      "Làm chủ async/await để xử lý các tác vụ bất đồng bộ rõ ràng, tránh callback hell và Promise chains phức tạp.",
    date: "28/08/2024",
    readTime: "10 phút đọc",
    tags: ["JavaScript", "Async"],
    link: "https://example.com/async-await-js",
  },
  {
    id: "java-stream-api",
    category: "Java",
    title: "Java Stream API: Xử lý dữ liệu hiệu quả",
    description:
      "Tận dụng sức mạnh Stream API để filter, map, reduce dữ liệu một cách functional và dễ bảo trì.",
    date: "20/08/2024",
    readTime: "9 phút đọc",
    tags: ["Java", "Stream API"],
    link: "https://example.com/java-stream-api",
  },
  {
    id: "react-hooks-useeffect",
    category: "JavaScript",
    title: "React Hooks với JavaScript: useState và useEffect",
    description:
      "Hiểu sâu về hai hooks cơ bản nhất trong React để quản lý state và side effects hiệu quả.",
    date: "12/08/2024",
    readTime: "11 phút đọc",
    tags: ["JavaScript", "React"],
    link: "https://example.com/react-hooks-useeffect",
  },
  {
    id: "jpa-hibernate",
    category: "Java",
    title: "JPA và Hibernate: Quản lý database trong Java",
    description:
      "Cách sử dụng JPA và Hibernate để ánh xạ đối tượng Java với database cùng relationships và queries.",
    date: "05/08/2024",
    readTime: "13 phút đọc",
    tags: ["Java", "JPA"],
    link: "https://example.com/jpa-hibernate",
  },
  {
    id: "closure-scope-js",
    category: "JavaScript",
    title: "Closure và Scope trong JavaScript",
    description:
      "Giải mã closure và phạm vi trong JS giúp tạo private variables và factory functions.",
    date: "28/07/2024",
    readTime: "7 phút đọc",
    tags: ["JavaScript", "Closures"],
    link: "https://example.com/closure-scope-js",
  },
  {
    id: "java-exception-best-practices",
    category: "Java",
    title: "Xử lý Exception trong Java: Best Practices",
    description:
      "Học cách xử lý ngoại lệ đúng đắn với try-catch, custom exceptions và các pattern phổ biến.",
    date: "20/07/2024",
    readTime: "10 phút đọc",
    tags: ["Java", "Exception Handling"],
    link: "https://example.com/java-exception-best-practices",
  },
];

export { services, technologies, experiences, testimonials, projects, blogs };
