import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import './index.css'
import Main from './views/Main/Main'
import Contacto from './views/Contacto/Contacto'
import SobreMi from './views/SobreMi/SobreMi'
import Proyectos from './views/Proyectos/Proyectos'
import NotFound from './views/404/NotFound'

function App() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-base-100 text-base-content">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
