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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (<div>Error esto esta mal</div>),
  },
  {
    path: "/discos",
    element: <App />,
    errorElement: (<div>disco no esta</div>),
  },
  {
    path: "/info",
    element: <Info />,
    errorElement: (<div>disco no esta</div>),
  },
  {
    path: "/proximamente",
    element: <Proximamente />,
    errorElement: (<div>disco no esta</div>),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
