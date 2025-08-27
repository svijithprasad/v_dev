import { Icons } from "@/components/icons";
import { Code, GraduationCap, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vijith",
  initials: "SVP",
  url: "https://your-website.com",
  location: "Karnataka, India",
  locationLink: "https://your-website.com",
  description:
    "Full-Stack Developer | End-to-End Creator.",
  summary:
    "Full-stack developer who loves turning ideas into scalable solutions. From university projects like [Medha’s](https://www.instagram.com/medha_sdit/) backend to personal [apps](#projects) with clean UI, I’m constantly pushing myself to build better, smarter, and friendlier digital experiences.",
  avatarUrl: "/images/profile.png",
  skills: [
    "ReactJS",
    "Javascript",
    "Typescript",
    "Node.js",
    "MongoDB",
    "ExpressJS",
    "SQL",
    "Convex",
    "Git",
    "Github",
    "Vercel",
    "TailwindCSS",
    "Zustand",
    "Java",
    "Flutter",
    "React Native"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: Code, label: "Projects" },
    { href: "#education", icon: GraduationCap, label: "Education" },
    { href: "/blog", icon: NotebookIcon, label: "Blogs" },
  ],
  contact: {
    email: "svijithprasad@gmail.com",
    tel: "+918618417870",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/svijithprasad",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/s-vijith-prasad-5361032b1/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "Atomic Finance",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Shree Devi Institute Of Technology (pursuing)",
      href: "https://sdit.ac.in/",
      degree: "Master of Computer Application",
      logoUrl: "/images/images.png",
      start: "2024",
      end: "----",
    },
    {
      school: "Srinivas University",
      href: "https://srinivasuniversity.edu.in/",
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: "/images/srinivas.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "St. Aloysius College",
      href: "https://staloysius.edu.in/",
      degree: "PUC (PCMC)",
      logoUrl: "/images/puc.jpg",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Inscribe",
      href: "https://inscribe-topaz.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A Notion-inspired note-taking app built with Vanilla JS, Convex, and Editor.js, featuring rich text editing and Unsplash image integration, user authentication and collaborative features.",
      technologies: [
        "HTML",
        "Javascript",
        "TailwindCSS",
        "Convex",
        "Editor.js",
        "ClerkJs",
      ],
      links: [
        {
          type: "Website",
          href: "https://inscribe-topaz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/inscribe.png",
      video:
        "",
    },
    {
      title: "ConvertMate",
      href: "https://convert-mate.vercel.app/",
      dates: "August 2024 - August 2024",
      active: true,
      description:
        "ConvertMate is a fast and simple file converter that lets you turn MP4 videos into MP3 audio and convert images across multiple formats — all in your browser.",
      technologies: [
        "ReactJS",
        "FFmpeg",
        "Shadcn UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://convert-mate.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/svijithprasad/ConvertMate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/convertmate.png",
      video: "",
    },
    {
      title: "Timely",
      href: "https://github.com/svijithprasad/Timely",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Timely is a Flutter-based clone of the Todoist mobile app, featuring task creation, project organization, due dates, priorities, and reminders — delivering the full productivity experience with a smooth and responsive UI.",
      technologies: [
        "Flutter",
        "Hive ",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/svijithprasad/Timely",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/design.png",
      video: "",
    },
    {
      title: "Paper - Collaborative Whiteboard App For Teams",
      href: "https://paper-io.netlify.app/",
      dates: "August 2025 - Present",
      active: true,
      description:
        "Paper.io is a collaborative whiteboard UI concept built with a focus on teamwork and productivity. It includes interactive whiteboards, team spaces, chat, and task management — all designed as a sleek front-end prototype without a backend.",
      technologies: [
        "ReactJS",
        "Typescript",
        "Shadcn UI",
        "Canvas API",
      ],
      links: [
        {
          type: "Website",
          href: "https://paper-io.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/svijithprasad/Paper-Collaborative-Whiteboard-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/paper.png",
      video:
        "",
    },
  ],

} as const;
