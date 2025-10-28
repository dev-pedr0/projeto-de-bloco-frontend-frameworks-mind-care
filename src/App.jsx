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

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/home" element={<Home />} />

        <Route path="/home/consultas" element={<ConsultasPage/>} />
        <Route path="/home/progresso" element={<ProgressoPage />} />
        <Route path="/home/documentos" element={<DocumentosPage />} />
        <Route path="/home/conversa" element={<ConversaPage />} />
        <Route path="/home/horarios" element={<HorariosPage />} />
        <Route path="/home/anotacoes" element={<AnotacoesPage />} />
      </Routes>
    </BrowserRouter>
    // <div className='App'>
    //   {page == 1 && <Login usuarios={user} onLogin={setUsuarioLogado} onLoginSuccess={() => setPage(3)} onRegister={() => setPage(2)}/> }

    //   {page === 2 && (
    //     <Cadastro onRegisterSuccess={() => setPage(3)}/>
    //   )}

    //   {page === 3 && (
    //     <Home usuario={usuarioLogado} onLogout={() => setPage(1)}/>
    //   )}
    // </div>
  )
}

export default App;
