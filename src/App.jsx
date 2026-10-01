import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Tours from './Pages/Tours'
import Gallery from './Pages/Gallery'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
const router = createBrowserRouter([
  {
     path: '/',
     element:<> <Navbar /><Home/> <Footer/> </>
     
  },
   {
     path: '/tours',
     element:<> <Navbar /><Tours/> <Footer/> </>
     
  },
   {
     path: '/gallery',
     element:<> <Navbar /><Gallery/> <Footer/> </>
     
  },
   {
     path: '/about',
     element:<> <Navbar /><About/> <Footer/> </>
     
  },
  {
     path: '/contact',
     element:<> <Navbar /><Contact/>  <Footer/> </>
     
  },
   
])

function App() {
  return <RouterProvider router={router} />
}

export default App