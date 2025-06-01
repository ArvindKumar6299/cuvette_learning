import axios from "axios"
import { useEffect, useState } from "react";

const Api = ()=>{
    
    const [user, setUser]= useState([]);

    const url = "https://jsonplaceholder.typicode.com/users";

    const postDataValue = {
                   "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }} 
    }

    const getPosts = async ()=>{
      try {
        const response =  await axios.get(url);
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error); 
      }
    }

    const postPosts = async ()=>{
       try {
        await axios.post(url,postDataValue)
       } catch (error) {
        console.log(error);
       }
    }
    
    useEffect(()=>{
      getPosts();
    },[])

    // useEffect(async ()=>{
    //     await axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response =>{
    //         setUser(response.user);
    //     })
    //     .catch(error =>{
    //         console.error('Error fetching data:',error);
    //     })
    // },[]);

    return(

        <>
        <h2>Api fetching data</h2>
         
           
           <ul>
             { user &&
            user.map((item ,id) => (
              <li key={id}>
                <span>{item.name}</span>
                <span>{item.website}</span>
                <span> {item.phone}</span>
              </li>

                
            ))
             }
            </ul>

         <button onClick={postPosts}>Post data</button>   

        
        </>
    )
}

export default Api;