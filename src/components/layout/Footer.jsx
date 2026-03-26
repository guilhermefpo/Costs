import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.ul}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p className={styles.p}>
          &copy; <span>Costs</span> Finanças
        </p>
      </div>
    </footer>
  );
}

export default Footer;
