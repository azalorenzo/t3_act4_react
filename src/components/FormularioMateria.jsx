import { useState } from "react";
import styles from "./materiaForm.module.css";

const FormularioMateria = ({ alAgregarMateria }) => {
  const [nombreMateria, setMaterias] = useState("");
  const [error, fijarError] = useState("");

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    if (nombreMateria.trim() === "") {
      fijarError("Escribe el nombre de la materia.");
      return;
    }

    fijarError("");

    const nuevaMateria = {
      id: crypto.randomUUID(),
      nombre: nombreMateria,
    };

    alAgregarMateria(nuevaMateria);
    setMaterias("");
  };

  return (
    <div className={styles.contenedorFormulario}>
      <h3>Agregar Materia</h3>
      <form onSubmit={manejarEnvio} className={styles.formulario}>
        <input
          type="text"
          placeholder="Nombre de la materia"
          value={nombreMateria}
          onChange={(evento) => {
            setMaterias(evento.target.value);
            if (error) fijarError("");
          }}
          className={styles.entrada}
        />
        <button type="submit" className={styles.boton}>
          Agregar
        </button>
      </form>

      {error && <p className={styles.mensajeError}>{error}</p>}
    </div>
  );
};

export default FormularioMateria;
