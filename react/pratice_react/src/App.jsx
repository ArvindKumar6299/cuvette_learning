import React from 'react'
import "./App.css"
import Home from './pages/Home'
import Header from './pages/Header'
import About from './pages/About'
import Footer from './pages/Footer'

import {BrowserRouter as Router ,Routes , Route} from "react-router-dom";
// import Form from './pages/Form'
import Api from './pages/Api'
import UserForm from './basicCrud/UserForm'
import Form from './basicCrud/Form/Form'
import Table from './basicCrud/Table/Table'

const App = () => {
  return (
    <>
    {/* <Form/> */}
    {/* <Api/> */}
    {/* <UserForm/> */}
     <Form/>
     <Table/>
     {/* <Router>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/footer" element={ <Footer/>}/>
          
          
         
         
        </Routes>  
     </Router>
    <div>App</div> */}
    </>
  )
}

export default App