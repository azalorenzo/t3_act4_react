import styles from "./usuario.module.css";

const Usuario = ({ nombre, carrera, semestre }) => {
  return (
    <div className={styles.tarjetaUsuario}>
      <h3 className={styles.titulo}>Perfil del Estudiante</h3>
      <p>
        <strong>Nombre:</strong> {nombre}
      </p>
      <p>
        <strong>Carrera:</strong> {carrera}
      </p>
      <p>
        <strong>Semestre:</strong> {semestre}
      </p>
    </div>
  );
};

export default Usuario;
