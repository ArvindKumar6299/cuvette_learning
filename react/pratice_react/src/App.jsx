import React, {useEffect, useState} from "react";
import "./App.css"

function App(){

  const [count, setCount] = useState(0);


  const handleClick=()=>{
    setCount(count+1);
    
  }

  useEffect(()=>{
      console.log("You have increased the count");
  },[count])

  


  return(
    <div>
      <h2>{count}</h2>

      <button onClick={handleClick}>update</button>
    </div>
  )
}

export default App;