import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Feature_one from './components/Feature_one.jsx'
import Blogs from './components/Blogs.jsx'
import Team from './components/Team.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />
      },
      {
        path: "feature_one",
        element: <Feature_one />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
      {
        path: "team",
        element: <Team />
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
