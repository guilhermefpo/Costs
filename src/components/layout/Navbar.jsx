import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/costs_logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Logo da Costs" className={styles.logo} />
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/newproject">
            Projetos
          </Link>
          <Link className={styles.link} to="/company">
            Empresa
          </Link>
          <Link className={styles.link} to="/contact">
            Contato
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
