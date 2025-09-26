import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import usuarios from './data/UsuariosFake'

function App() {
  const [page, setPage] = useState(1)
  const [user, setUser] = useState(usuarios);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <div className='App'>
      {page == 1 && <Login usuarios={user} onLogin={setUsuarioLogado} onLoginSuccess={() => setPage(3)} onRegister={() => setPage(2)}/> }

      {page === 2 && (
        <Cadastro onRegisterSuccess={() => setPage(3)}/>
      )}

      {page === 3 && (
        <Home usuario={usuarioLogado} onLogout={() => setPage(1)}/>
      )}
    </div>
  )
}

export default App;
