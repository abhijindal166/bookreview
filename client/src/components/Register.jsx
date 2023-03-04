import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios"
const url="http://localhost:8000";

const Register = () => {
    const[info,setinfo]=useState({
        email:"",
        password:"",
        username:"",
        points:0,
    })
    let history = useHistory ()
    const updateblog=(e)=>{
        setinfo({...info,[e.target.name]:e.target.value});
        console.log(info);
        }
        const publishblog=async()=>{
            try{
                console.log(info);

                const res=await fetch(`${url}/register`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
            
                    },
                    body:JSON.stringify({
                       info
                        
                    })
                });
                const data=await res.json();
console.log(data);






                // const data= await axios.post(`${url}/register`,info);
                console.log(data);
                if(data.status==202){
                    window.alert("already exist")
                }
                 history.push('./');
            }
        catch(err){
            console.log(err);
            console.log("erorr");
        }
        }
  return (
   <>
   <div className="container">
    <h2>Register</h2>
    <input type="text" className='buy' id="user"name="username" value={info.username} placeholder="username" onChange={(e)=>updateblog(e)}/>
    <input type="text" className='buy'  name="email" value={info.email} placeholder="email" onChange={(e)=>updateblog(e)}/>
   
   <input type="text" className='buy' name="password" value={info.password} placeholder="password" onChange={(e)=>updateblog(e)}/>
   <button className="newsletter-btn" onClick={()=>publishblog()} >Register</button>
   </div>
   </>
  )
}

export default Register