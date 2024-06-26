
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    MessengerApp,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    live,
    ecom,
    git,
    figma,
    docker,
    todo,
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
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Web Developer",
      company_name: "AnsrCoach",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Jatin proved me wrong.",
      name: "Devyani Thokal",
      designation: "Backend Dev",
      company: "AnsrCoach",
      image: "https://media.licdn.com/dms/image/D4D03AQEdhalpgbWF6A/profile-displayphoto-shrink_400_400/0/1678933024028?e=1686787200&v=beta&t=tcwSPsYqFFQE_jLlvQIS9cBzJbqrbkVpGQ1H-c6GJoA",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Jatin does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Jatin optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Muskaan Sehgal ",
      designation: "Project Manager",
      company: "OyeLabs",
      image: "https://media.licdn.com/dms/image/C4E03AQFDXSHMI7JGoQ/profile-displayphoto-shrink_400_400/0/1634196058018?e=1686787200&v=beta&t=Ia63AcsU2ahhapbX7KWTaLfF4Wjh9j1upiYVtgxJZi8",
    },
  ];
  
  const projects = [
    {
      name: "E-Com Landing Page",
      description:
        "Full responsive mobile and desktop friendly e-commerce web page with very cool animation and UI ."
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: ecom,
      source_code_link: "https://github.com/jatinmark/Ecom-frontend",
      live_demo_link: "https://jatinmark.github.io/Ecom-frontend/",
    },
    {
      name: "Messenger App",
      description:
        "Web application that enables users to chat with  other users in real time seamlessly, Equiped with the Google OAuth 2 user authentication to protect your conversation  .",
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
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
      ],
      image: MessengerApp,
      source_code_link: "https://github.com/jatinmark/MERN-app",
      live_demo_link: "https://mern-app-rho-mocha.vercel.app/",

    },
    {
      name: "Restaurant Reservation App",
      description:
        " Developed a robust restaurant reservation system using Next.js, providing users with an intuitive interface to make reservations, view the menu. Implemented features such as real-time availability updates, user authentication , a comprehensive solution enhancing the dining experience for both customers and restaurant administrators.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/jatinmark/Next.js-reservation-app-dir-main",
      live_demo_link: "https://reservation-app-virid.vercel.app",

    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
