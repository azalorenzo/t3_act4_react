import styles from "./materia.module.css";
import { Trash, BookOpen } from "lucide-react";

const ListaMaterias = ({ materias, alEliminarMateria }) => {
  return (
    <div className={styles.contenedor}>
      <h3>Lista de Materias Inscritas</h3>
      {materias.length === 0 ? (
        <p className={styles.textoVacio}>No hay materias registradas aún.</p>
      ) : (
        <ul className={styles.lista}>
          {materias.map((materia) => (
            <li key={materia.id} className={styles.elementoLista}>
              <span className={styles.itemTexto}>
                <BookOpen size={20} color="orange" />
                {materia.nombre}
              </span>

              <Trash onClick={() => alEliminarMateria(materia.id)} size={20} className={styles.iconoBasura} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaMaterias;
