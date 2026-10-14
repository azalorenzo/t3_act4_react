# Introducción a React - Diseño de componentes - React + Vite

Esta práctica fue desarrollada con el propósito de integrar y demostrar los conceptos fundamentales solicitados para el manejo de componentes e interactividad en React:

El proyecto contiene:

- **a) Un componente funcional simple:** Ubicado en `src/components/EncabezadoSimple.jsx`, encargado de la estructura visual básica para la presentación del proyecto.
- **b) Un componente que reciba y muestre props:** Ubicado en `src/components/Usuario.jsx`, el cual recibe propiedades dinámicas (como el nombre del estudiante, la carrera y el semestre) desde el componente principal para mostrarlas en pantalla.
- **c) Un componente que use estado (`useState`) para cambiar algo en pantalla:** Ubicado en `src/components/FormularioMateria.jsx`, utilizado para gestionar el texto que escribe el usuario, controlar el estado de las materias y actualizar la pantalla al instante al agregar o borrar elementos sin recargar la página
- **d) Una lista renderizada dinámicamente a partir de un arreglo (usando `.map()`):** Ubicado en `src/components/ListaMaterias.jsx`, utilizado para recorrer el arreglo de materias, renderizar cada elemento con su respectiva llave única (`key`) y permitir su eliminación.

Finalmente, todos estos componentes se integran en el archivo principal `App.jsx` para dar forma a una mini aplicación web funcional de control escolar, estructurada bajo un entorno de desarrollo con React y Vite.

---

## 📝 Cuestionario del Proyecto

### a) ¿Qué diferencia hay entre props y state en React?

La diferencia es que los props son datos que se pasan de un componente a otro, por ejemplo de un componente padre a un componente hijo y sirven para compartir información entre componentes, además no se pueden modificar directamente desde el componente que las recibe. A diferencia de los props, el state permite guardar datos que pueden cambiar mientras se usa la aplicación, como cuando se agrega una materia nueva o se elimina una que ya no se necesita.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La key es como una identificación única para cada elemento de una lista, y es importante porque le ayuda a React a saber exactamente qué elemento cambió, si se agregó o se eliminó sin tener que volver a dibujar toda la lista desde cero, lo que hace que la aplicación sea más rápida y evite errores visuales o de pérdida de datos. Normalmente se utiliza un identificador único para cada elemento.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

useState es una función de React que permite guardar información y modificarla cuando sea necesario, y cuando el valor cambia, React actualiza la pantalla para mostrar los nuevos datos sin tener que recargar toda la página.

Ejemplo en mi proyecto: Lo usé en la lista de materias (`[materias, setMaterias]`) para guardar las materias que ya vienen por defecto y poder agregar nuevas o borrarlas cuando el usuario interactúa, haciendo que la pantalla se actualice al instante sin recargar la página.

### d) Enlace del Repositorio en GitHub

[https://github.com/azalorenzo/t3_act4_react](https://github.com/azalorenzo/t3_act4_react)

### e) Enlace del Proyecto Desplegado

[https://azalorenzo.github.io/t3_act4_react/](https://azalorenzo.github.io/t3_act4_react/)

---

## 🛠️ Cómo correrlo de manera local

1. Clona el repositorio:

```bash
   git clone https://github.com/azalorenzo/t3_act4_react.git
```

2. Entra a la carpeta:

```bash
  cd t3_act4_react
```

3. Instala las dependencias:

```bash
  npm install
```

4. Inicia el servidor de pruebas:

```bash
  npm run dev
```

### Vista previa de la app

![Captura de pantalla](https://i.imgur.com/5eqa7xA.png)
