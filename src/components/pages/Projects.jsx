import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectCard from "../project/ProjectCard";
import Message from "../layout/Message";
import styles from "./Projects.module.css";
import LinkButton from "../layout/LinkButton";

function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.div}>
      <div className={styles.top}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <div className={styles.projetos}>
        `
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category}
            />
          ))}
        `
      </div>
    </div>
  );
}

export default Projects;
