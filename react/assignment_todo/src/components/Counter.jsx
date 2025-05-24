import { useState } from "react";

const Counter =()=>{

    const [count ,setCount] = useState(0);

  function update(){
    setCount(count+1);
  }

    return(
        <div className="w-full h-100 bg-gray-500 flex relative  flex-col">
                <h3 className="font-bold absolute text-lg justify-center w-full pt-2 mb-2">Counter</h3>
                <div className="flex w-full items-center justify-center mt-15">
                <span className="flex text-[50px] size-40  bg-red-200 text-center justify-center items-center font-bold">{count}</span>
                 </div>
                 <div className="mt-5 flex justify-center items-center">
                    <button onClick={update} className="
                      flex  justify-center items-center
                      rounded-[10px] border-2 py-2 w-40 font-bold bg-yellow-300 cursor-pointer hover:bg-orange-500
                   ">Update Me</button>
                 </div>
                

        </div>
    )
}

export default Counter;