import {Route, Routes} from 'react-router-dom'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { RegistroD } from './components/Registro_Donativo'
function App() {

  return (
    <>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='registro_donativo' element={<RegistroD />}></Route>
      </Routes>
    </> 
  )
}

export default App
