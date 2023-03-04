




import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { getdata } from '../api';
import { sendupdatedata } from '../api';
const Update = () => {
    const windo=()=>{
        window.alert("success");
    }
      
        
    
    return (
        <>
           <div className ="container">
   
       
      
     
           TYPE YOUR NAME
        <input type="text"   className='buy' />
        TYPE YOUR ADDRESS

        <input type="text"   className='buy' />
        TYPE YOUR CONTACT NUMBER
        <input type="text"   className='buy' />
        TYPE YOUR EMAIL ID
        <input type="text"   className='buy' />
        <NavLink to={"/home"}><button onClick={windo} className='newsletter-btn'>buy</button></NavLink>
      
      

   
      
    </div>
        </>
    )
    
    }
export default Update

 
 