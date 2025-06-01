
import { useContext } from "react";
import { Data } from "../App";

const GrandChild = ()=>{
   
    const context = useContext(Data);

    return(
        <>
        {
            context.map((item)=>{
                return(
                    <>
                    <h2>{item.name}</h2>
                    <h2>{item.age}</h2>
                   
                    
                    <ul >
                    <li><h2>{item.name}</h2></li>
                    <li><h2>{item.age}</h2></li>
                    </ul>

                    </>

                );
            })
        }
        {/* <h2>{context}</h2> */}
        
        <div>Grandchild</div>
        </>
    )
}

export default GrandChild;