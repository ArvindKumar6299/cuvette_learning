import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

const Form = () =>{

    const {handleSubmit ,handleChange, user} = useContext(UserContext);

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={user.name} name="name" type="text" placeholder="Name"/> <br /><br />
            <input onChange={handleChange} value={user.email} name="email" type="email" placeholder="Email"/> <br /><br />
            <input onChange={handleChange} value={user.number} name="number" type="number" placeholder="Phone"/> <br /><br />
            <input onChange={handleChange} value={user.password} name="password" type="password" placeholder="Password"/>  <br /><br /> 

            <button>{user.id ? "Update" : "Save"}</button>
        </form>
        </>
    )
}

export default Form;