import styles from "./ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

export default function ProjectCard({
  id,
  name,
  budget,
  cateory,
  handleRemove,
}) {
  return (
    <div className={styles.project_card}>
      <h4 className={styles.h4}>{name}</h4>
      <p>
        <span className={styles.Span}>Orçamento:</span> R${budget}
      </p>
      <p>
        <span></span> {cateory}
      </p>
      <div>
        <p>Editar</p>
        <p>Remover</p>
      </div>
    </div>
  );
}
