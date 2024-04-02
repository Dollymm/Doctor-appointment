import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './pages/Footer'
import AllDoc from './component/health/AllDoc'
import Appointment from './component/consult/Appointment'

import { DoctorsAppoitment } from './component/consult/DoctorsAppoitment'
import Aboutus from './pages/Aboutus'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/allDoc' element={<AllDoc/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        
        <Route path='/doctor' element={<DoctorsAppoitment/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App