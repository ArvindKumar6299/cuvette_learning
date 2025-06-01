import { createContext } from "react";
import Child from "./Child";

// export const Data = createContext();

const Parent = ()=>{


    return(
        <>
        {/* <Data.Provider value={"this is my summary"}>
            <Parent/>
        </Data.Provider> */}
        <Child/>
        </>
    )
}

export default Parent;