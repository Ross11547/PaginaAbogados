import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Inicio from './pages/inicio'
import Nosotros from './pages/nosotros'
import Contacto from './pages/contacto'
import Areapractica from './pages/areapractica'
import Navbar from './components/navar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/> } >
            <Route path='/' element={<Inicio />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/areapractica' element={<Areapractica/>}/> 
            <Route path='/contacto' element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
