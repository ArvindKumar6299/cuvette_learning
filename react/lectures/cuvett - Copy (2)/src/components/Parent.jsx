import React from "react";
import Child from "./Child";





function Parent({name:Parentname}){


    return(
        <>
        <Child name="1" des="child 1 desc"  newParentname={Parentname}/>
        <Child  name="2" des="child 2 desc"/>
        <Child name="3" des="child 3 desc"/>
        <h3>Something in parent</h3>
        </>
    )
}
export default Parent;