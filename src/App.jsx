import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MASP from "./pages/MASP";

import Header from './components/Header';
import Footer from './components/Footer';
import MLayout from './layout/MLayout';
import ProjectDetail from './pages/ProjectDetail';
import ScrollManager from './components/ScrollManager';

function App() {

  
  return (
    <BrowserRouter>
    {/* creamos un componente que ayudara a escuchar el scroll */}
      <ScrollManager  />
      <Routes>
        <Route path="/" element={<MLayout />}>
          <Route index element={<MASP />} />
          <Route path="proyecto/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
