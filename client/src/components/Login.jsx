import React, { useState } from 'react'
import axios from "axios";
import {NavLink} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const url="http://localhost:8000";
const Login = () => {
    const [info,setinfo]=useState({
email:"",
password:"",
username:""
    }

    );
    let history = useHistory ();
    const updateblog=(e)=>{
        setinfo({...info,[e.target.name]:e.target.value});
        console.log(info);
        }
        const publishblog=async()=>{
            try{
                console.log("moving to login page");
              
                const res=await fetch(`${url}/login`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
            
                    },
                    body:JSON.stringify({
                       info
                        
                    })
                });
                console.log(res);
                const response=await res.json();
console.log(response);
                  console.log(response.token);
                  localStorage.setItem( "jwttoken",response.token);
                console.log(response);
               if(response){
                 console.log("moving to home page");
                 if(res.status==200){
                     window.alert("success");
                     history.push(`/home/?username=${info.username}`);
                 }
                 else{
                     window.alert("fail");
                 }
                }
                else{ window.alert("fail");}
                 
            }
        catch(err){
            console.log(err);
            console.log("erorr");
        }

        }
  return (
      <>
      <div className ="container">
        <h2>Login page</h2>
   
       <input type="text" className="buy"  id="user"name="username" value={info.username} placeholder="username" onChange={(e)=>updateblog(e)}/>
    <input type="text" className="buy"  id="email" name="email" value={info.email} placeholder="email" onChange={(e)=>updateblog(e)}/>
   
    <input type="password" className="buy"  id="password" name="password" value={info.password} placeholder="password" onChange={(e)=>updateblog(e)}/>
    <button className="newsletter-btn" onClick={()=>publishblog()} >Login</button>
    <h4 id="dn">Don't have account?</h4>
    <NavLink to="/register"><button className="newsletter-btn"> signup</button></NavLink>
    </div>
    </>
  )
}

export default Login