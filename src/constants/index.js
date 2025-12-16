import { Globe, Github } from "lucide-react";
import image1 from "./../assets/images/image1.png";
import image2 from "./../assets/images/image2.png";
import image3 from "./../assets/images/image3.png";
import image4 from "./../assets/images/image4.png";
import unilogo from "./../assets/images/unilogo.jpeg";
import kplogo from "./../assets/images/kplogo.jpg";
import gothinklogo from "./../assets/images/gothinklogo.jpeg";
import bizaffixlogo from "./../assets/icons/bizaffix-logo.jpg";
import KMHlogo from "./../assets/icons/kmh_automation_design_development_logo.jpg";
import Softwaveslogo from "./../assets/icons/softwaves-logo.jpg";
import HomeIcon from "../assets/icons/HomeIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import GmailIcon from "../assets/icons/GmailIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";

export const DATA = {
  name: "Abdurrehman Abbasi",
  role: "Software Developer — .NET | React.js | SQL Server",
  description:
    "I’m a Software Developer with hands-on experience building scalable web applications using ASP.NET Core, C#, React.js, and MS SQL Server. I’m passionate about transforming ideas into clean, efficient, and user-focused digital experiences — whether it’s backend business logic, APIs, or intuitive UI interfaces.",
  summary:
    "I’m a full-stack developer who enjoys creating clean, functional, and user-friendly web applications. My core strength is backend engineering with .NET, combined with practical experience in modern frontend development. I focus on writing maintainable code, simplifying complex business logic, and ensuring every feature adds real value to users. Outside coding, I enjoy exploring new technologies, improving system design skills, and building side projects that help me grow professionally.",
  skills: [
    "Html",
    "CSS",
    "JavaScript",
    "React.js",
    "Redux",
    "ASP.NET Core",
    "C#",
    "Tailwind CSS",
    "Entity Framework Core",
    "REST APIs",
    "MVC",
    "Clean Architecture",
    "API Integration",
    "Postman",
    "Git",
    "Github",
    "MS SQL Server",
    "Database Design",
    "Query Optimization",
    "Bootstrap",
    "Agile Methodologies",
  ],
};

export const projects = [
  {
    image: image1,
    title: "Library Management System",
    href: "https://github.com/abdurrehmanabbasi555/Library-Management-System",
    dates: "May 2025 - June 2025",
    active: true,
    description:
      "A full-stack Library Management System built to efficiently manage books and members with complete CRUD functionality. The system supports borrowing and returning workflows, maintains detailed borrowing history, and provides a clean, intuitive UI with search and pagination for smooth data navigation.",
    technologies: ["ASP.NET Core", "Javascript", "Entity Framework Core", "MS SQL Server"],
    links: [
      // {
      //   type: "Website",
      //   href: "https://codesphere-code-editor.vercel.app/",
      //   icon: <Globe className="size-3" />,
      // },
      {
        type: "Source",
        href: "https://github.com/abdurrehmanabbasi555/Library-Management-System",
        icon: <Github className="size-3" />,
      },
    ],
  },

  {
    image: image2,
    title: "My JokesApp ",
    href: "https://github.com/abdurrehmanabbasi555/MyJokesApp",
    dates: "Feb 2025 - March 2025",
    active: true,
    description:
      "A fun yet structured ASP.NET MVC application where users can sign up, log in, and interact with jokes by creating, editing, or removing content. The app demonstrates authentication, authorization, database relationships, and clean MVC patterns in a real-world scenario.",
    technologies: ["ASP.NET Core MVC", "Javascript", "Bootstrap", "MS SQL Server", "Entity Framework Core"],
    links: [
      // {
      //   type: "Website",
      //   href: "https://crypto-application-react.netlify.app/",
      //   icon: <Globe className="size-3" />,
      // },
      {
        type: "Source",
        href: "https://github.com/abdurrehmanabbasi555/MyJokesApp",
        icon: <Github className="size-3" />,
      },
    ],
  },
  {
    image: image3,
    title: "Currency Convertor",
    href: "https://github.com/abdurrehmanabbasi555/currency-convertor",
    dates: "Oct 2024 - Oct 2024",
    active: true,
    description:
      "A responsive currency converter built with React that integrates real-time exchange rate APIs to deliver accurate global currency conversions. Designed with a clean UI and optimized state management for a smooth user experience. ",
    technologies: ["React.js", "Tailwind CSS", "API Integration", "JavaScript"],
    links: [
      {
        type: "Website",
        href: "https://easy-currency-convertor.netlify.app/",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/abdurrehmanabbasi555/currency-convertor",
        icon: <Github className="size-3" />,
      },
    ],
  },
  {
    image: image4,
    title: "Password Generator",
    href: "https://github.com/abdurrehmanabbasi555/password-generator",
    dates: "Sept 2024 - Sept 2024",
    active: true,
    description:
      "A lightweight and user-friendly password generator that allows users to generate secure passwords instantly. Built with a focus on simplicity, performance, and clean UI using modern frontend tools.",
    technologies: ["React.js", "Tailwind CSS", "Javascript"],
    links: [
      {
        type: "Website",
        href: "https://password-generator-555.netlify.app/",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/abdurrehmanabbasi555/password-generator",
        icon: <Github className="size-3" />,
      },
    ],
  },
];

export const experience = [
  {
    logoUrl: Softwaveslogo,
    work: "Softwaves Solutions",
    href: "https://softwavessolutions.com/",
    role: "Software Developer",
    period: "Aug 2024 - Present",
    description: [
      "Building full-stack web applications using ASP.NET Core MVC, C#, React.js, and MS SQL Server.",
      "Developing secure APIs, backend logic, and database structures following clean code and SOLID principles.",
      "Creating responsive, dynamic UIs using React.js and modern component-based workflows.",
      "Optimizing performance across backend, frontend, and database layers.",
      "Collaborating with cross-functional teams to deliver stable, scalable, and user-centric solutions.",
    ],
  },
  {
    logoUrl: KMHlogo,
    work: "KMH Automation",
    href: "https://www.linkedin.com/company/kmh-automation-design-development/",
    role: "Web Developer",
    period: "Nov 2023 – Jul 2024",
    description: [
      "Developed responsive websites using React.js, WordPress, HTML, CSS, and JavaScript.",
      "Built custom frontend components and optimized UX.",
      "Worked closely with designers and backend teams to deliver feature-complete websites.",
      "Trained and guided interns in modern development workflows."
    ],
  },
];

export const personal_data = [
  {
    icon: HomeIcon,
    href: "#",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/abdurrehmanabbasi555",
  },
  {
    icon: GmailIcon,
    href: "mailto:abbasiabdurrehman555@gmail.com",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/abdurrehman-abbasi-173217226/",
  },
];
