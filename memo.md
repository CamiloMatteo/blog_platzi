### GUIA BASICA

---

Tenemos 4 fases por los que un componente pasa:

Initialization: Declaramos nuestro estado o propiedades
Mounting: Todo componente debe tener render. Es obligatorio.
Updation
Unmounting: Solo hay una función en caso de que queramos hacer algo cuando se destruya un componente

---

### AXIOS

Instalar axios para realizar llamadas https

> npm install axios

---

### REACT DOM

Instalar ReactDOM

> npm install react-router-dom

---

### REDUX

Redux es un contenedor predecible del estado de aplicaciones JavaScript.
Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar.

Los cuatro pilares de Redux son:

Store: Almacenamiento
Reducers: Estados
Action Creators: Funciones
Componente: Código JSX

INSTALACION:

> npm install redux react-redux

---

### STORE

El store tiene las siguientes responsabilidades:

- Contiene el estado de la aplicación
- Permite el acceso al estado vía getState()
- Permite que el estado sea actualizado vía dispatch(action)
- Registra los listeners vía subscribe(listener)
- Maneja la anuliación del registro de los listeners via el retorno de la función de subscribe(listener)

---

### REDUCERS

Las Action Creators describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.

El Provider es el componente de Redux en el cual encerraremos nuestra aplicación para que puedan comunicarse los componentes entre ellos.

connect()()
El primer parametro que el connect debe recibir es todos los reducers que el proveedor le va a entregar al usuario y segun lo requiera el componente sacar lo que va a utilizar.

---

actions creators

```javascript
// una funcion que retorna otra function
export const getAll = () => (dispatch) => {
  dispatch({
    type: "get_users",
    payload: [1, 2, 3],
  });
};
```

---

Redux Thunk

Redux Thunk permite a las action creators invertir el control despachando funciones. Van a recibir dispatch como argumento y capaz llamarlo asíncronamente. Estas funciones son llamas thunks.

Instalacion:

> npm install redux-thunk

---

Cuando nuestro componente terminar de cargar (componentDidMount) llama al Action Creator, luego el Action Creator contiene la promesa, trae los datos necesarios y luego va y modifica al Reducer para que actualice el estado usando dispatch() y luego lo actualizamos en el componente con el mapStateToProps.

Si no tenemos estos pasos no nos va a funcionar.

---
