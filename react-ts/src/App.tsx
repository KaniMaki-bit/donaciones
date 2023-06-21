import {Route, Routes} from 'react-router-dom'
import { Login } from './views/Login'
import { Home } from './views/Home'
import { RegistroD } from './components/Registro_Donativo'
import { Landing } from './views/Landing'
import { Organizacion } from './views/Organizacion'
function App() {

  return (
    <>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='registro_donativo' element={<RegistroD />}></Route>
        <Route path='landing' element={<Landing />}></Route>
        <Route path='organizacion' element={<Organizacion />}></Route>
      </Routes>
    </> 
  )
}

export default App
