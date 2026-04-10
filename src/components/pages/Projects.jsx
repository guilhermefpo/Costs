import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../layout/Message";
import styles from "./Projects.module.css";

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
      <h1>Meus Projetos</h1>
      {message && <Message type="success" msg={message} />}
    </div>
  );
}

export default Projects;
