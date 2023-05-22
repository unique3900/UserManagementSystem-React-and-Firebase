import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavbarMain from './Components/NavbarMain'
import Adduser from './Components/Adduser'
import UpdateUser from './Components/UpdateUser'
import DisplayUser from './Components/DisplayUser'

const App = () => {
  return (
    <div>
      <NavbarMain/>
      <Routes>
      <Route path='/' element={<DisplayUser/>}/>
        <Route path='/addUser' element={<Adduser/>} />
        <Route path='/updateUser' element={<UpdateUser/>} />
        <Route path='/login' element={<h1>Login</h1>}/>
     </Routes>
    </div>
  )
}

export default App
