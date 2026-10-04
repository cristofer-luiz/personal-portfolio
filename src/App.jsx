import './App.css'
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CaseProjeto from "./pages/CaseProjeto";
import NaoEncontrada from './pages/NaoEncontrada';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos/:slug" element={<CaseProjeto />} />
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>
  )
}

export default App
