
import {createContext , useState, useEffect} from "react";

export const UserContext = createContext(); //variable which will contain all the data


const UserContextProvider = ({children}) =>{
    
      
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
        <UserContext.Provider value={{user,info, handleChange,handleSubmit,handleDelete,handleEdit}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;