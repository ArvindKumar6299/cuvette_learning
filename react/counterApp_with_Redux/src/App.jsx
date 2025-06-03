import { useDispatch, useSelector } from "react-redux";
import "./App.css"
import { decrement, increment, incrementByAmount, reset } from "./features/counter/CounterSlice";
import { useState } from "react";

const App =()=>{
   
 const [amount, setAmount] = useState('');
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement(){
    dispatch(increment());
  }

  function handleDecrement(){
    dispatch(decrement());
  }

  function handleReset(){
    dispatch(reset());
  }

  function handleIncAmount(){
       dispatch(incrementByAmount(amount));
  }

  return(
    <div className="container">
    <h2>Counter App With Redux</h2>
      <p>
        {count}
      </p>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>Reset</button>
    <br />
    <input type="number"  value={amount} placeholder="enter amount" 
    onChange={(e)=> setAmount(e.target.value)}/>
    <br />
    <button onClick={handleIncAmount}>increment by amount</button>
    </div>
  )
}

export default App;