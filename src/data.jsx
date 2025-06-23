import { nanoid } from 'nanoid'
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaPython,
  FaBootstrap,
} from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMongodb,
  SiVite,
  SiMysql,
  SiNextdotjs,
  SiExpress,
  SiCanva,
  SiNetlify,
} from 'react-icons/si'
import img1 from './assets/port.png'
import img2 from './assets/shell.png'
import img3 from './assets/fakeflix.png'
import img4 from './assets/Overview.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-rose-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-yellow-400" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-cyan-400" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNodeJs className="h-16 w-16 text-green-500" />,
    text: 'Skilled in Node.js, building scalable backend services and RESTful APIs for robust server-side applications.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className="h-16 w-16 text-sky-500" />,
    text: 'Proficient with Tailwind CSS, using a utility-first framework to rapidly build modern, responsive designs.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className="h-16 w-16 text-green-600" />,
    text: 'Experienced with MongoDB, leveraging NoSQL databases to create high-performance, scalable, and flexible data models.',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGitAlt className="h-16 w-16 text-red-500" />,
    text: 'Experienced with version control using Git, enabling efficient management of code changes and collaborative development.',
  },
  {
    id: nanoid(),
    title: 'GitHub',
    icon: <FaGithub className="h-16 w-16 text-gray-800" />,
    text: 'Proficient in using GitHub for source code management and collaboration, facilitating effective team projects and code reviews.',
  },
  {
    id: nanoid(),
    title: 'GitLab',
    icon: <FaGitlab className="h-16 w-16 text-orange-500" />,
    text: 'Skilled in GitLab for CI/CD pipelines, issue tracking, and repository management to enhance software development workflows.',
  },
  {
    id: nanoid(),
    title: 'Vite',
    icon: <SiVite className="h-16 w-16 text-blue-500" />,
    text: 'Adept in using Vite for front-end tooling, appreciating its fast hot module replacement and optimized build times.',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <SiMysql className="h-16 w-16 text-blue-700" />,
    text: 'Proficient with MySQL, designing relational databases with optimized queries and schema for efficient data storage.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <SiNextdotjs className="h-16 w-16 text-black" />,
    text: 'Advanced skills in Next.js for building server-side rendered React applications, improving SEO and performance.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className="h-16 w-16 text-blue-500" />,
    text: 'Highly skilled in Python for backend development and data analysis, using popular frameworks and libraries.',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap className="h-16 w-16 text-purple-600" />,
    text: 'Experienced in using Bootstrap to quickly design and customize responsive, mobile-first web pages.',
  },
  {
    id: nanoid(),
    title: 'Canva',
    icon: <SiCanva className="h-16 w-16 text-cyan-500" />,
    text: 'Skilled in creating engaging graphics and presentations with Canva, enhancing visual content for marketing and educational purposes.',
  },
  {
    id: nanoid(),
    title: 'Netlify',
    icon: <SiNetlify className="h-16 w-16 text-green-500" />, // Adjust the color as needed
    text: 'Experienced with deploying and managing applications on Netlify, utilizing features like continuous deployment, live site previews, and serverless backend functions.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: img1,
    url: 'https://portfolio-mauve-seven-15.vercel.app',
    github: 'https://github.com/AhmedBelghith24/portfolio',
    title: 'My Portfolio 🔥',
    text: 'Welcome to my portfolio 👋 , built with React JS! This site showcases my projects, skills, and creative journey using modern, interactive web design. 🚀 Explore my work and drop me a message 📬 to learn more about how I bring ideas to life.',
  },
  {
  id: nanoid(),
  img: img4, // Replace with a relevant image or screenshot of the app
  url: 'https://www.societe3c.online', // Replace with the actual deployment link 
  github: 'https://github.com/AhmedBelghith24/Paycheck-Management-System',
  title: 'Paycheck Management System 💰',
  text: 'This is a full-stack Paycheck Management System built with the MERN stack. It allows users to track, filter, and mark paychecks as paid, with support for supplier, bank, and monthly filters.'
}


]
