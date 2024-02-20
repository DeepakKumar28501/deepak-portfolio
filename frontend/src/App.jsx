import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from "./pages/home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

function App() {
  

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
    </BrowserRouter>
    //  
  
  )
}

export default App
