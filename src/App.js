import React, { useEffect, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import "./index.css";
import et from "./dashboard.jpeg";

export default function App() {
  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(function () {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className="gradient">
      <div className="container">
        <Navbar color={color} />
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

function Navbar({ color }) {
  return (
    <nav className={color ? "navbar navbar-bg" : "navbar"}>
      <p>
        <a href="#skills">Skills</a>
      </p>
      <p>
        <a href="#projects">Projects</a>
      </p>
    </nav>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <h1 className="title">
          Hi, I'm <span className="title-name">Raghav Sharma</span>
        </h1>
        <p className="subtitle">(👨🏻‍💻Web Developer 🚀)</p>
        <p className="about-me">
          I'm a passionate web developer with experience in
          creating responsive and user-friendly web applications. I specialize
          in React.js and enjoy turning complex problems into simple, beautiful,
          and intuitive designs. <br />
          I thrive on identifying unique challenges and
          building innovative, scalable solutions. My ventures include
          developing apps and platforms that address real-world problems,
          combining technical expertise with a vision for impactful,
          user-centric products.
        </p>
        <div className="contactLinks">
          <a
            data-tooltip="Email"
            data-flow="bottom"
            href="mailto:wrk.raghav@gmail.com"
            className="iconLink"
          >
            <Mail size={24} />
          </a>
          <a
            data-tooltip="LinkedIn"
            data-flow="bottom"
            href="https://www.linkedin.com/in/raghav-sharma-758092270/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Linkedin size={24} />
          </a>
          <a
            data-tooltip="GitHub"
            data-flow="bottom"
            href="https://github.com/hey-raghav"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

function Skills() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="skills" tabIndex={-1}>
        Skills
      </h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div data-tooltip={skill.title} data-flow="bottom">
      <img
        className="skillCard"
        src={skill.image}
        alt={skill.title}
        loading="lazy"
      />
    </div>
  );
}

function Projects() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="projects" tabIndex={-1}>
        Projects
      </h2>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={`card project${project.id}`}>
      <img
        src={project.image}
        alt={project.title}
        className="cardImage"
        loading="lazy"
      />
      <div className="cardContent">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardDescription">{project.description}</p>
        <p className="cardTech">
          Technologies: {project.technologies.join(", ")}
        </p>
        <ul className="featureList">
          {project.features.map((feature, index) => (
            <li key={index} className="featureItem">
              {feature.emoji} {feature.text}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Live Project ↗️
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            GitHub Repo ↗️
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <section className="section">
      <p className="about-me">
        Thank you for checking out my portfolio.{" "}
        <span data-tooltip="Have a good day!" data-flow="bottom">
          😀
        </span>
      </p>
    </section>
  );
}

const skills = [
  {
    title: " HTML",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-html-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944937.png",
  },
  {
    title: "CSS",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-css-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722685.png",
  },

  {
    title: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
  },
  {
    title: "React.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    title: "React Router",
    image: "https://www.svgrepo.com/show/354262/react-router.svg",
  },
  {
    title: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
  },
  {
    title: "GitHub",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png",
  },
  {
    title: "C",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/380px-C_Programming_Language.svg.png?20201031132917",
  },
];

const projects = [
  {
    id: 1,
    title: "Expense Tracker (Under Development)",
    image: et,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "GitHub"],
    description: "A Powerful yet simple tool to track daily expenses and improve financial habits.",
    link: "Under Development",
    github: "https://github.com/hey-raghav/frontend/tree/main/expense-tracker",
    features: [
      { text: "Dynamic Web App", emoji: "🪄" },
      { text: "API Data Fetching", emoji: "⚡" },
    ],
  },
];
