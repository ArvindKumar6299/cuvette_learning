import { useState } from "react";


function Todo(){

     const [inputValue,setInputValue] = useState('');
     const [todos,setTodo] = useState([]);

     function handleChange(event){
         setInputValue(event.target.value);
     }

     function updateInfo(){
      if(inputValue.trim() === ""){
        alert("Add something...");
        return;
      }
          setTodo([...todos ,{ text:inputValue , id:Date.now() }]);
          setInputValue("");
     }
     

     const removeItem =(id)=>{
      setTodo(todos.filter(todo =>  todo.id !== id)); 
      //This keeps all todos except the one with id
     }


    return(
        <div className="mt-5 items-center justify-center bg-amber-200 p-10">
            
            <h1 className="font-bold text-2xl text-red-500  m-5">TODO</h1>
            
            <input type="text" value={inputValue} onChange={handleChange}
              className="border-2 p-2 rounded-[10px] px-4 w-120"
              placeholder="Enter the task which you have to do .."/>

            <div className="mt-5 flex justify-center items-center">
                    <button onClick={updateInfo}  className="
                      flex  justify-center items-center
                      rounded-[10px] border-2 py-2 w-40 font-bold bg-yellow-300 cursor-pointer hover:bg-orange-500
                   ">Submit</button>
                 </div>
                {/* //Tasks */}
                 <h2 className="font-bold text-2xl text-purple-700  mt-5">Tasks to Perform</h2>
                 <div className="h-1 rounded-2xl m-2 bg-green-600"></div>

                 <ul className="">
                  {todos.map((todo)=>{
                   return <li 
                   className=""
                   key={todo.id}>
                   <span 
                   className="font-bold mt-5 rounded-[10px] border-2 py-2 px-20 w-70">
                    {todo.text}</span> 
                   <button
                    onClick={()=>removeItem(todo.id)} 
                    className="ml-4 text-red-500 font-bold mt-5 rounded-[10px] border-2 p-1.5 cursor-pointer" >
                      Remove</button>
                    </li>
                  })}
                </ul>
                
        </div>
    )
}

export default Todo;