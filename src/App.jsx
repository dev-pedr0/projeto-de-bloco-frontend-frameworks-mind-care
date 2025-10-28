import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import DocumentosPage from './pages/DocumentosPage';
import ConversaPage from './pages/ConversaPage';
import HorariosPage from './pages/HorariosPage';
import AnotacoesPage from './pages/AnotacoesPage';
import ConsultasPage from './pages/ConsultasPage';
import ProgressoPage from './pages/ProgressoPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useUser, UsuarioProvider } from './context/UsuarioContext';

function AppRoutes() {
  const { usuario } = useUser();

  if (!usuario) {
    return <Navigate to="/login" />;
  }

  return <Home usuario={usuario} />;
}

function App() {

  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/home" element={<AppRoutes />} />

          <Route path="/home/consultas" element={<ConsultasPage/>} />
          <Route path="/home/progresso" element={<ProgressoPage />} />
          <Route path="/home/documentos" element={<DocumentosPage />} />
          <Route path="/home/conversa" element={<ConversaPage />} />
          <Route path="/home/horarios" element={<HorariosPage />} />
          <Route path="/home/anotacoes" element={<AnotacoesPage />} />
        </Routes>
      </BrowserRouter>
    </UsuarioProvider>
    
  )
}

export default App;