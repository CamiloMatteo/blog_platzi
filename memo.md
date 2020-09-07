Tenemos 4 fases por los que un componente pasa:

Initialization: Declaramos nuestro estado o propiedades
Mounting: Todo componente debe tener render. Es obligatorio.
Updation
Unmounting: Solo hay una función en caso de que queramos hacer algo cuando se destruya un componente

---

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

1
¿Cómo se le conoce a JSX?
html + js

2
¿Qué se necesita para crear una app react?
webpack
3
¿Cómo insertamos código javascript en jsx?
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
_
4
¿En dónde se declara el estado?
Constructor dentro de una Class
_
5
¿Qué es lo que se actualiza cuando cambia el estado?_componentDidMount
setState()_
_
6
¿Quién tiene la información de la respuesta? \_status (mala) Data()
7
¿Qué se usa para evitar que se recargue la página?
Link de react-dom
_
8
¿Cuántos almacenamientos de redux debemos tener? _ 1 x componente (mala)
9
¿Cuál es el corazón de redux?
Store
_
10
¿Qué etiqueta entrega el almacenamiento?_ provider
11
¿Qué simula el reducer?
Cambio de estado en la app
_
12
¿Cómo accedemos al reducer desde el componente?
this.props.nombreReducer
_
13
¿Cómo debemos importar las acciones?
import \* as
_
14
¿Qué es redux thunk?
Redux Thunk permite a las action creators invertir el control despachando funciones.
Van a recibir dispatch como argumento y capaz llamarlo asíncronamente.
_
15
¿Quién le entrega el estado actualizado al componente?
mapStateToProps
_
16
¿Cómo se comunica el action creator con el reducer?
middleware
_
17
¿Cuál de las opciones no es objetivo de los archivos types?
18
¿Para qué sirve el try catch?
19
¿Cuáles son los 3 estados de una llamada asíncrona?_ cargando, error y exisotoso
20
¿Cómo se declara un parámetro en la etiqueta Route?
21
¿El reducer de un componente puede compartirse con otro componente?
22
¿Cómo evitamos que se sobreescriban las funciones de diferentes acciones?
definiendo actionTypes
_
23
¿Qué instrucción me regresa el estado actual?
24
La inmutabilidad sobreescribe los estados u objetos actuales
False
_
25
¿Cómo recorremos un arreglo para generar uno nuevo?
.map()
_
26
¿Cómo cambiamos una variable de falso a verdadero y viceversa? _!variable! (mala)
27
¿Cúal es la sintaxis del operador ternario?
(operacion) ? true : falso
28
¿Quién tiene más peso?
29
¿Qué parte no es obligatoria para redux? \*
30
¿Qué formato cambiamos para la normalización?
