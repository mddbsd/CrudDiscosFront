//Modulos
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Componentes
import App from './App.jsx'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import Home from './componentes/Home.jsx'
import Proximamente from './componentes/Proximamente.jsx'
import Info from './componentes/Info.jsx'
import ComponenteDisco from './componentes/ComponenteDisco.jsx'

const router = createBrowserRouter([
  {
    //http://localhost:5173
    path: "/",
    element: <Home />,
    errorElement: (<div>Error esto esta mal</div>),
  },
  {
    //http://localhost:5173/discos
    path: "/discos",
    element: <App />,
    errorElement: (<div>disco no esta</div>),
  },
  {
    //http://localhost:5173/info
    path: "/info",
    element: <Info />,
    errorElement: (<div>disco no esta</div>),
  },
  {
    //http://localhost:5173/proximamente
    path: "/proximamente",
    element: <Proximamente />,
    errorElement: (<div>disco no esta</div>),
  },
  {
    //http://localhost:5173/agrega-disco
    path: "/agrega-disco",
    element: <ComponenteDisco />,
    errorElement: (<div>No se puede agregar</div>)
  },
  {
    //http://localhosyt:5173/actualiza-disco/1
    path: "/actualiza-disco/:id",
    element: <ComponenteDisco />,
    errorElement: (<div>No se puede actualizar</div>)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
