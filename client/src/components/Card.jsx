import React from 'react'
import {NavLink} from 'react-router-dom';
import Fade from "react-reveal/Fade";
import imag from "../assets/read1.png";
const Card = ({value}) => {
    return (
        <>
              
           <div className='cardcont'>
        <div className="cards">
            {
                     
            }
           
          <span><h1>Title:</h1></span> <span><p>{value.title}</p></span> 
          <span><h1>Description:</h1></span>   <span> <p>{value.discription}</p></span>
          <span><h1>Username:</h1></span>  <span> <p>{value.username}</p></span>
          <span><h1>Category:</h1></span>  <span><p>{value.category}</p></span>
          <span><h1>price:</h1></span>  <span><p>{value.price}</p></span>
          <span><h1>price:</h1></span>  <span><p>{value.contact}</p></span>
            
           
            <div className='v'>
           
            </div>
          </div>
          <NavLink to={`/detail/${value._id}`}><button className="bookrevbtn">view more</button></NavLink>
          </div>
            
           
        </>
    )
}

export default Card
