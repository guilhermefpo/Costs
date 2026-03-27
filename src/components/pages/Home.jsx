import React from "react";
import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.area_texto}>
        <h1>
          Bem-Vindo ao <span>Costs</span>
        </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/projects" text="Criar Projeto" />
      </div>
      <div className={styles.area_img}>
        <img src={savings} alt="Costs" />
      </div>
    </section>
  );
}

export default Home;
