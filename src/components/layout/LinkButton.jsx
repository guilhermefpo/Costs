import React from "react";
import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const MotionLink = motion(Link);

function LinkButton({ to, text }) {
  return (
    <MotionLink
      className={styles.btn}
      to={to}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.6 }}
      onHoverStart={() => console.log("hover started!")}
    >
      {text}
    </MotionLink>
  );
}

export default LinkButton;
