import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Main from './layouts/Main'
import ErrorPage from './pages/ErrorPage.jsx'
import { RouterProvider } from "react-router/dom";
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext.jsx'
import Cadastro from './pages/Cadastro/index.js'
import Evento from './pages/Evento/index.js'
import Catalogo from './pages/Catalogo/index.jsx'


const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      
      { 
        path: "/", element: <Catalogo /> 
      },
      { 
        path: "/login", element: <Login /> 
      },
       { 
        path: "/cadastro", element: <Cadastro />
      },
       { 
        path: "/criar-evento", element: <Evento />
      },
    ]
  }    
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
