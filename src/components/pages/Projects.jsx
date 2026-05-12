import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../layout/Message";
import styles from "./Projects.module.css";
import LinkButton from "../layout/LinkButton";

function Projects() {
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className={styles.div}>
      <div className={styles.top}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <div className={styles.projetos}>
        <p>Projetos...</p>
      </div>
    </div>
  );
}

export default Projects;
