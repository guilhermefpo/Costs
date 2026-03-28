import React from "react";
import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select"; // Importando o novo componente
import SubButton from "../form/SubButton";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />

      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />

      <Select name="category_id" text="Selecione a categoria" />
      <SubButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
