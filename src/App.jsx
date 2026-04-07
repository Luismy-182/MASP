import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MASP from "./pages/MASP";

import Header from './components/Header';
import Footer from './components/Footer';
import MLayout from './layout/MLayout';
import ProjectDetail from './pages/ProjectDetail';

function App() {

  return (
    <BrowserRouter>
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
