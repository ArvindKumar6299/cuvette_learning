import { useState } from "react";
import "./App.css"
import Component1 from "./components/component1"
import Parent from "./components/Parent"
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Map from "./components/Map";


function App(){

  

  return(
    <>
      
 
   

      <Header/>
     <Home/>
     <About/>
     <Footer/> 
     
    
     





    {/* <h1 style={styles}>Insitialization</h1>
    <h2>Counter</h2>
    <p>{count}</p>
    <button onClick={handleCount}>click ME</button>
    {/* <button  onClick={displayGreetings}>Click me</button> 
    <h3 style={{color:"red"}}>{arvind.name}</h3>
    <h2 style={{color:"green", background:"pink"}}>{arvind.email}</h2>
    <Component1/>
    <Parent/> */}
    </>
  )
}

export default App;