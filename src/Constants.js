// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
// import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
// import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
// import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
// import figmaLogo from './assets/tech_logo/figma.png';
// import netlifyLogo from './assets/tech_logo/netlify.png';
// import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import Degree from './assets/education_logo/Degree.png'
import College from './assets/education_logo/College.jpg';
import GUJANA from './assets/education_logo/GUJANA.jpg';

// Project Section Logo's
import Book from './assets/work_logo/Book.png';
import House from './assets/work_logo/House.png';
import Vehicle from './assets/work_logo/Vehicle.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
import ghibli from './assets/work_logo/ghibli.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Degree,
    school: "Terna Engineering College, Nerul Navi Mumbai",
    date: "Oct 2021 - July 2025",
    grade: "7.99 CGPA",
    desc: "I have completed my Batchelor's degree (B.E) in Computer Science from Terna Engineering College, Nerul Navi Mumbai. During my time at TEC, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.  My experience at TEC University has been instrumental in shaping my technical abilities and professional growth.",
    degree: " Batchelor of Engineering - B.E",
  },
  {
    id: 1,
    img: College,
    school: "KJ Somaiya College Of Science and Commerce, Mumbai",
    date: "Sept 2017 - Aug 2019",
    grade: "73.2%",
    desc: "I completed my class 12 education from KJ Somaiya College Of Science and Commerce, Mumbai under the HSC board, where I studied Physics, Chemistry,  Biology and Mathematics (PCMB)  ",
    degree: "HSC(XII) - PCMB"
  },

  {
    id: 2,
    img: GUJANA,
    school: "SMT. Gujana High School , Thane",
    date: "Apr 2016 - March 2017",
    grade: "92.80%",
    desc: "I completed my class 10 education from SMT. Gujana High School , Thane under the SSC board.",
    degree: "SSC(X)"
  },
];

export const projects = [
  {
    id: 0,
    title: "House Rental",
    description:
      "Developed using HTML, Tailwind CSS, JavaScript, Java, and Spring JDBC, providing property listing, search, and booking features. Implemented advanced filters, personalized recommendations, and secure communication to enhance user experience. Integrated Java-based web scraping for real-time rental price comparison across multiple platforms.",
    image: House,
    tags: ["HTML", "Tailwind", "JavaScript", "Java", "Spring"],
    //     github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    //     webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Vehicle Management System",
    description:
      "Developed using Java, Spring JDBC, MySQL, and OOPs to handle book inventory, user registrations, issuing/returning, and fine calculation. Applied OOP principles with structured classes (Book, Member, Librarian) and used Spring JDBC for efficient database operations.",
    image: Vehicle,
    tags: ["JAVA", " MYSQL", "OOPs", "HTML", "CSS", "JavaScript"],
    //     github: "https://github.com/codingmastr/CSPrep",
    //     webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "Built using Java, Spring JDBC, MySQL, and OOPs to manage book inventory, user registrations, issuing/returning, and overdue fine calculation. Leveraged Spring JDBC for efficient database operations and applied OOP principles through structured classes like Book, Member, and Librarian.",
    image: Book,
    tags: ["JAVA", "SPRING", "HTML", "CSS", "JavaScript"],
    //     github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //     webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "GhibliArtGenerator",
    description:
      "AI-Powered Art Generator – A full-stack web application built with Spring Boot (backend) and React (frontend) that leverages Stable Diffusion XL to create and transform images from text prompts or uploaded pictures. It provides an intuitive UI for file upload, preview, and text input, delivering high-quality 1024×1024 AI artwork. The backend securely integrates with the Stability AI API for seamless text-to-image and image-to-image generation.",
    image: ghibli,
    tags: ["Java", "Spring Boot", "React JS", "Tailwind CSS", "Stability AI API"],
    // github: "https://github.com/codingmastr/cmtk-email-validator",
    // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  //   {
  //     id: 4,
  //     title: "Task Reminder Chrome Extension Tool",
  //     description:
  //       "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //     image: taskremLogo,
  //     tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //     github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //     webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  //   },
  //   {
  //     id: 5,
  //     title: "Webverse Digital",
  //     description:
  //       "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //     image: webverLogo,
  //     tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //     github: "https://github.com/codingmastr/Webverse-Digital",
  //     webapp: "https://webversedigital.com/",
  //   },
  //   {
  //     id: 6,
  //     title: "Coding Master",
  //     description:
  //       "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //     image: cmLogo,
  //     tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //     github: "https://codingmasterweb.in/",
  //     webapp: "https://codingmasterweb.in/",
  //   },
  //   {
  //     id: 7,
  //     title: "Image Search App",
  //     description:
  //       "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //     image: imagesearchLogo,
  //     tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //     github: "https://github.com/codingmastr/Image-Search-App",
  //     webapp: "https://imagsearch.netlify.app/",
  //   },
  //   {
  //     id: 8,
  //     title: "Image Background Remover",
  //     description:
  //       "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //     image: removebgLogo,
  //     tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //     github: "https://github.com/codingmastr/Image-Background-Remover",
  //     webapp: "https://removeyourbg.netlify.app/",
  //   },
];  