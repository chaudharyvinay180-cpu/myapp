import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import About from './Pages/About'
import Locations from './Pages/Locations'
import Contact from './Pages/Contact'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login'

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home></Home>} ></Route>
        <Route path='/Collections' element={<Collections></Collections>} ></Route>      
        <Route path='/About' element={<About></About>} ></Route>
        <Route path='/Locations' element={<Locations></Locations>} ></Route>  
        <Route path='/Contact' element={<Contact></Contact>} ></Route>
        <Route path='/Login' element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
    
  )
}

export default App
