import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MASP from "./paginas/MASP";
import About from "./paginas/About";
import Skills from "./paginas/Skills";
import Projects from "./paginas/Projects";
import Experience from "./paginas/Experience";
import Contact from "./paginas/Contact";
import HeaderLayout from "./layout/HeaderLayaut"

function App() {

  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<HeaderLayout />}>
        <Route index element={<MASP/>}/>
        <Route path="/informacion" element={<About />}/>
        <Route path="/habilidades" element={<Skills />}/>
        <Route path="/portafolio" element={<Projects />}/>
        <Route path="/experiencia" element={<Experience />}/>
        <Route path="/contacto" element={<Contact />}/>

        </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
