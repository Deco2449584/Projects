//main.jsx
// Importamos el objeto React desde la biblioteca "react".
// Es necesario para poder escribir componentes de React.
import React from "react";

// Importamos ReactDOM desde "react-dom/client".
// ReactDOM nos permite renderizar componentes React en el DOM del navegador.
import ReactDOM from "react-dom/client";

// Importamos el componente principal App desde el archivo App.jsx.
import App from "./App.jsx";

// Importamos estilos globales para la aplicación desde main.scss.
import "./scss/main.scss";

// Importamos el almacenamiento de la aplicación (store) desde el archivo store.
// El store se usa con Redux para gestionar el estado de la aplicación.
import { store } from "./store";

// Importamos el componente Provider desde "react-redux".
// Provider hace que el store de Redux esté disponible para todos los componentes que estén en su interior.
import { Provider } from "react-redux";

// Renderizamos la aplicación en el elemento con id "root".
// Usamos React.StrictMode para resaltar problemas potenciales en la aplicación.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*     // El componente Provider envuelve a la aplicación, permitiendo que todos los componentes hijos accedan al store de Redux.
     */}{" "}
    <Provider store={store}>
      {/*       // Renderizamos el componente principal App.
       */}{" "}
      <App />
    </Provider>
  </React.StrictMode>
);
