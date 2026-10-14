import { useState } from "react";
import "./index.css";
import "./App.css";
import EncabezadoSimple from "./components/EncabezadoSimple";
import ListaMaterias from "./components/ListaMaterias";
import Usuario from "./components/Usuario";
import FormularioMateria from "./components/FormularioMateria";

function App() {
  const [materias, setMaterias] = useState([
    { id: "1", nombre: "Sistemas Operativos" },
    { id: "2", nombre: "Conmutación y Enrutamiento de Redes" },
  ]);

  const agregarMateria = (nuevaMateria) => {
    setMaterias([...materias, nuevaMateria]);
  };

  const eliminarMateria = (id) => {
    setMaterias(materias.filter((materia) => materia.id !== id));
  };

  return (
    <main className="contenedorPrincipal">
      {/* componente funcional simple */}
      <EncabezadoSimple />

      {/* componente que recibe props */}
      <Usuario nombre="Azael" carrera="Ingeniería en Sistemas Computacionales" semestre="7" />

      {/* componente con useState para agregar elementos */}
      <FormularioMateria alAgregarMateria={agregarMateria} />

      {/* lista renderizada con .map() y key */}
      <ListaMaterias materias={materias} alEliminarMateria={eliminarMateria} />
    </main>
  );
}

export default App;
