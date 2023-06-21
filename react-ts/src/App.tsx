import {Route, Routes} from 'react-router-dom'
import { Login } from './views/Login'
import { Landing } from './views/Landing'
function App() {

  return (
    <>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='landing' element={<Landing />}></Route>
      </Routes>
    </> 
  )
}

export default App
