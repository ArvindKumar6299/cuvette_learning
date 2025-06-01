import { useEffect, useState } from "react";
import "./UserForm.css"


const UserForm = ()=>{
   
    const [user,setUser] = useState({
        name:"",
        email:"",
        number:"",
        password:""
    });

    //making state for collection of users
    const [info , setInfo] = useState([]);

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setUser({...user, [name]:value});
    }
    const handleSubmit=(event)=>{
           
          event.preventDefault();
          if (!user.name || !user.email || !user.number || !user.password) return;

          if(user.id){
             const updatedInfo = info.map((item)=>
                item.id == user.id ? {...user} : item
            )
            setInfo(updatedInfo);
          }else{
             
            setInfo([...info ,{...user, id:crypto.randomUUID()}]);
          }

        //   setInfo([...info ,{...user, id:crypto.randomUUID()}]);
        //    console.log(user); 
         setUser({
             name:"",
             email:"",
             number:"",
             password:""
        })
    }
    
    const handleDelete = (id) =>{
        const updatedInfo = info.filter((item) => {
            return id !== item.id;
        })
        setInfo(updatedInfo);
    }

    const handleEdit = (item)=>{
      setUser(item);
    }

    useEffect(()=>{
           console.log(info);
    },[info])
    return(
        <>
           <h1>Create Records</h1>
        <div className="container">
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={user.name} name="name" type="text" placeholder="Name"/> <br /><br />
            <input onChange={handleChange} value={user.email} name="email" type="email" placeholder="Email"/> <br /><br />
            <input onChange={handleChange} value={user.number} name="number" type="number" placeholder="Phone"/> <br /><br />
            <input onChange={handleChange} value={user.password} name="password" type="password" placeholder="Password"/>  <br /><br /> 

            <button>{user.id ? "Update" : "Save"}</button>
        </form>

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
        </div>
        </>
    )
}

export default UserForm;