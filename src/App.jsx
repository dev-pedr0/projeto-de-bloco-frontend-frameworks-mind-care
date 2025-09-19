import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Home from './components/Home'

function App() {
  const [page, setPage] = useState(1)

  return (
    <div className='App'>
      {page == 1 && <Login onLoginSuccess={() => setPage(3)} onRegister={() => setPage(2)}/> }

      {page === 2 && (
        <Cadastro onRegisterSuccess={() => setPage(3)}/>
      )}

      {page === 3 && (
        <Home onLogout={() => setPage(1)}/>
      )}
    </div>
  )
}

export default App
