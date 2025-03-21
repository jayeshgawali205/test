import 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home/></>
    },
    {
      path: "/about",
      element: <><Navbar /><About/></>
    }
  ])
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App