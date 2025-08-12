import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import React from 'react'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router} />
  )
}


export default App



