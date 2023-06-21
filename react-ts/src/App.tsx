import {Route, Routes} from 'react-router-dom'
import { Login } from './views/Login'
import { Home } from './views/Home'
import { Landing } from './views/Landing'
function App() {

  return (
    <>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='landing' element={<Landing />}></Route>
      </Routes>
    </> 
  )
}

export default App
