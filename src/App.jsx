import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Third from './components/Third'
import Ding from './components/Ding'
import CarGrid from './components/CarGrid'
import{Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
     <Navbar/>
     <Routes>

     <Route path='/'element={<Third/>}/>
     <Route path='/c'element={<CarGrid/>}/>
     <Route path='/d'element={<Ding/>}/>

     </Routes>
    </>
  )
}
import Navbar from './components/Navbar'

export default App
