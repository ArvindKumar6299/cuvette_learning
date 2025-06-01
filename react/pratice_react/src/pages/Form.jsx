import { useState } from "react";


const Form = ()=>{

    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setUser({...user,[name]:value});
        // console.log(name,value);
    }
   
    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
        setUser({
        name:"",
        email:"",
        phone:"",
        password:""
    }

        )
    }
    return(
        <div>
            <h1>User Data</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="">Name</label>
            <input name="name" value={user.name} onChange={handleChange} type="text" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input name="email" value={user.email} onChange={handleChange} type="email" />
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <input name="phone" value={user.phone}onChange={handleChange} type="number" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input name="password" value={user.password} onChange={handleChange} type="password" />
            </div>

            <button >Submit</button>
        </form>
        </div>
    )
}

export default Form;