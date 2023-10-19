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
    bhoomikapng,
    sagarpng,
    abhinavpng,
    mtappng,
    scribeemrpng,
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
      title: "React Web Developer",
      icon: web,
    },
    {
      title: "Node js Developer",
      icon: mobile,
    },
    {
      title: "Javascript",
      icon: backend,
    },
    {
      title: "Typescript",
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
      title: "Senior Software Developer",
      company_name: "ScribeEmr",
      icon:     scribeemrpng,
      iconBg: "#383E56",
      date: "October 2023 - Present",
      points: [
        "Developing Medical web app  using React.js and material-ui and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Mtap Technologies",
      icon: mtappng,//starbucks,
      iconBg: "#383E56",
      date: "March 2021 - October 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Redefing Fleet managment",
      ],
    },
    
    {
      title: "Full StackDeveloper",
      company_name: "Newton School",
      icon: 'https://yt3.googleusercontent.com/ytc/AOPolaRSHsDwHAx9ZB6yc6HDbjCPM-Oq9KxO0BRYcPaD=s900-c-k-c0x00ffffff-no-rj',//shopify,
      iconBg: "#383E56",
      date: "Oct 2020 - feb 2021",
      points: [
        "Have a training for 6 months in Developing and maintaining web applications using React.js ,Node js,Express js and  other related technologies. Under this period of time i have gone through various technologies and learn about building and maintaining scalable code",
        
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Birendra proved me wrong.Great as a colleague and as a friend to work with",
      name: "Bhoomika R",
      designation: "Test Engineer",
      company: "Mtap Technologies",
      image: bhoomikapng,//"https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their Code Quality and code reusability write  efficient, scalable, and user-friendly solutions that solve real-world problems.",
      name: "Vidya Sagar",
      designation: "Team Lead",
      company: "Mtap Technologies",
      image: sagarpng,
    },
    {
      testimonial:
        "After Birendra optimized our codebase, our traffic decreased by 50%. We can't thank them enough!",
      name: "Abhinav",
      designation: "Senior Software Engineer",
      company: "Mtap Technologies",
      image:  abhinavpng
    },
  ];
  
  const projects = [
    {
      name: "Stock Management",
      description:
        "Web-based platform that allows users and admin to search for products item ,move to their cart and place order. While Admin has separate dashboard to update the stock and maintain user data and invoice.",
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
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://e7.pngegg.com/pngimages/857/907/png-clipart-inventory-management-software-supply-chain-management-inventory-control-warehouse-miscellaneous-company.png',
      source_code_link: "https://github.com/Birendrajha/flip_frontend",
    },
    {
      name: "Cricketers Auction List",
      description:
        "Web application that enables users to search ,filter and sort the player list based on their rankings,score  points, and view detailed information about selected PLayer .",
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
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://www.pngall.com/wp-content/uploads/2017/04/Indian-Premier-League-New-Logo.png',
      source_code_link: "https://github.com/Birendrajha/front-end-assignment-cricketers-app",
    },
    {
      name: "User Authentication Login",
      description:
        "A complete secured Signup and login app using hashed and encrypted password stored in mongodb database.",
      tags: [
        {
          name: "node js",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDb",
          color: "green-text-gradient",
        },
        {
          name: "jwt and becryptjs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Birendrajha/user-authentication-login",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  