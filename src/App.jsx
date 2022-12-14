import React from 'react'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Background from './pages/Background'
import Projects from  './pages/Projects'
import ContactMe from './pages/ContactMe'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Aboutme' element={<Aboutme/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/ContactMe' element={<ContactMe/>}/>
        </Routes>
      </BrowserRouter>
    </>


   
    // <div className="App">
    //   <Home/>
    //   <Aboutme/>
    //   <Background/>
    //   <Projects/>
    //   <ContactMe/>
            
    // </div>
  )
}


export default App

