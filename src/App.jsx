import { useState } from 'react'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);




function App() {


  return (
    <>
 
     <Navbar/>
   <Home/>
   
    </>
  )
}

export default App
