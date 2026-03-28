import React from "react";
import styles from "./SubButton.module.css";

function SubButton({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

export default SubButton;
