import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import{ useEffect, useState } from 'react'
import Preloader from './Components/preloader'; 


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

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
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (<RouterProvider router={router} />)}
    </>
  )
}


export default App



