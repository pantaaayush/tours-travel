import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Tours from './pages/Tours'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <> <Navbar /><Home /> <Footer /> </>
  },
  {
    path: '/tours',
    element: <> <Navbar /><Tours /> <Footer /> </>
  },
  {
    path: '/gallery',
    element: <> <Navbar /><Gallery /> <Footer /> </>
  },
  {
    path: '/about',
    element: <> <Navbar /><About /> <Footer /> </>
  },
  {
    path: '/contact',
    element: <> <Navbar /><Contact /> <Footer /> </>
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App