import { UserContext } from "../Context/UserContextProvider"
import { useContext } from "react"

const Table = () =>{
    
    const {handleDelete,handleEdit,info}  = useContext(UserContext);

    return(
        <>
         <div className="table">
            
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Password</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map((item , index)=> (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.password}</td>
                                <td style={{display:"flex" , justifyContent:"center", alignItems:"center" , gap:"5px"}}>
                                    <button onClick={()=>handleEdit((item))}>Edit</button>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Table