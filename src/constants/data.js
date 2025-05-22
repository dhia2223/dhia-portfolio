import profileimg from "../assets/profile2.png";
import ecommerceimg from "../assets/EcommerceProject.png"
import coachifyimg from "../assets/coachify.png";
import trendoraimg from "../assets/TRENDORA.png";
import smartcarimg from "../assets/smartcar.png";
import firstaidimg from "../assets/FirstAid.png";

export const personalData = {
  name: "Dhia",
  title: "Software Engineer",
  description: "Second-year Software Engineering student with a passion for applying technical knowledge to solve problems and build innovative solutions. Eager to learn and contribute to a collaborative development environment.",
  image: profileimg,
  resumeLink: "https://drive.google.com/file/d/1R2a4BHpg0LoT-dMrMjF_S1fpgFoSpVfH/view?usp=sharing", // Add your resume link here
  socialLinks: {
    github: "https://github.com/dhia2223?tab=repositories",
    linkedin: "https://www.linkedin.com/in/dhia-haj-kacem/",
    twitter: "#",
    email: "mailto:Hajkacemdhia@gmail.com",
  }
};

export const skills = [
  { name: "Python", icon: "logos:python" },
  { name: "C", icon: "logos:c" },
  { name: "ReactJS", icon: "logos:react" },
  { name: "NestJS", icon: "logos:nestjs" },
  { name: "HTML", icon: "logos:html-5" },
  { name: "CSS", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "PHP", icon: "logos:php" },
  { name: "Java", icon: "logos:java" },
  { name: "TensorFlow", icon: "logos:tensorflow" },
  { name: "Linux", icon: "logos:linux-tux" },
  { name: "UI/UX Design", icon: "icon-park-outline:design" },
];

export const languages = [
  { name: "English", level: "Proficient" },
  { name: "French", level: "Proficient" },
  { name: "Spanish", level: "Beginner" },
];

export const associations = [
  { name: "Atast", role: "Member" },
  { name: "IEEE", role: "Member" },
  { name: "CRT", role: "Volunteer" },
];

export const education = [
  {
    degree: "Software Engineering",
    institution: "Polyetch Monastir",
    year: "2023 - Present",
    description: "Focus on full-stack development, algorithms, and software architecture.",
    courses: [
      "Web Development",
      "Data Structures",
      "Database Systems",
      "Software Engineering Principles"
    ]
  },
  {
    degree: "Licence in Embedded Systems",
    institution: "ISSAT Sousse",
    year: "2020 - 2023",
    description: "Specialized in low-level programming and hardware-software integration.",
    courses: [
      "Microcontrollers",
      "Real-time Systems",
      "Digital Electronics",
      "Embedded C"
    ]
  }
];

export const projects = [

  {
    title: "E-commerce Platform",
    description: " Developed a full-stack e-commerce platform with an integrated AI chatbot for order tracking, returns, and product recommendations. Built with React, NestJS, and PostgreSQL, featuring JWT auth, responsive UI, and Microsoft Copilot Studio for chatbot automation.",
    technologies: ["React", "NestJS", "PostgreSQL", "Tailwind CSS","Docker","Copilot Studio"],
    link: "https://github.com/dhia2223/ecommerce-chatbot.git",
    image: ecommerceimg,
  },
  {
    title: "Trendora Trend Online Store",
    description: "Developed a fully functional e-commerce website using WordPress, WooCommerce, and Elementor. The store offers a curated selection of fashion and lifestyle products, providing a smooth shopping experience with responsive design, integrated payment options, and customizable product listings.",
    technologies: ["WordPress", "WooCommerce", "Elementor", "UI/UX", "Plugins", "CSS"],
    link: "https://trendoratrend.ct.ws/",
    image: trendoraimg,
  },
  {
    title: "Smart Security Car System",
    description: "Developed an innovative smart security car system using advanced artificial intelligence techniques with Raspberry Pi 4. Implemented real-time face detection, recognition, and emotions recognition capabilities.",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Firebase"],
    link: "#",
    image: smartcarimg,
  },
  {
    title: "Coachify Web Application",
    description: " Developed a responsive e-commerce platform for a virtual personal training service. The platform facilitates fitness journeys by offering a curated selection of physical and digital products alongside online training programs.",
    technologies: ["UI/UX", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "#", // Add project link here
    image: coachifyimg, // Add project image path
  },
  {
    title: "First Aid Web Application",
    description: "Developed a user-friendly interface for a first aid application, integrating UI/UX design principles with HTML, CSS, and JavaScript. Focused on intuitive navigation, clear instructions, and interactive elements to enhance usability and accessibility in emergency situations.",
    technologies: ["UI/UX", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "#", // Add project link here
    image: firstaidimg, // Add project image path
  },
];

export const experience = [
  {
    role: "Summer Intern",
    company: "PROXYM-IT Sousse",
    period: "JULY - SEPTEMBER 2024",
    description: [
      "Developed a Holiday Management Web Application with role-based dynamic dashboard navigation (HR, Manager, Employer)",
      "Implemented real-time request and approval system with status tracking",
      "Created secure JWT-based authentication with frontend token management",
    ],
    technologies: ["ReactJS", "NestJS", "MongoDB"],
  },
  {
    role: "END OF STUDY PROJECT",
    company: "ISSAT Sousse",
    period: " FEBRUARY - JUNE  2023",
    description: [
      " Developed an innovative smart security car system using advanced artificial intelligence techniques in conjunction with a Raspberry Pi 4.",
      " Successfully implemented real-time face detection, recognition, and emotions recognition capabilities, providing personalized security features for authorized drivers.",
      " Created a user-friendly mobile app interface to control and monitor the car system, improving the overall driving experience.",
      " Integrated Firebase services to facilitate seamless communication between the Raspberry Pi and the mobile app.",
      " Demonstrated effective project management skills by completing the project within the designated timeframe.",
    ],
    technologies: ["Python", "Flutter", "Firebase", "Raspberry Pi", "OpenCV", "TensorFlow","Machine Learning","Project Management"],
  },
  // Add more experiences as needed
];