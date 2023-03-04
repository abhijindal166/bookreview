import React, { useState } from 'react'
import Card from './Card'
import {NavLink ,useLocation } from "react-router-dom";
import {  useEffect} from "react";
import { getpost,getmusic,getbooks } from '../api';
import img from "../assets/filter.png";
import Fade from "react-reveal/Fade";
import axios from 'axios';
const url="http://localhost:8000";
const Middle = () => 
{const [post,setpost]=useState([]);
    const {search}=useLocation();
    
    useEffect(() => {
        const getallpost=async()=>{        
            
          
            const data1= await axios.get(`${url}/allpost${search}`);
    
            setpost(data1.data);
         } 
       getallpost();       


}, [search])


    return (
        <>
        <div className="middle">
            <div className="left">
            <NavLink to="/create"> <button className='filterbtnc'>Create</button> </NavLink>
           
        {/* <button onClick={()=>{music()}}>music</button>
        <button  onClick={()=>{dance()}}>dance</button>
        <button  onClick={()=>{books()}}>books</button> */}
       
        <div className="explore-main">
      <div className="explore-filter">
        <div className="filter-head">
        
          <img src={img} alt="filter-img" className="filter-img" />
          <h4 className="filter-heading">Filter reads</h4>
        </div>

        <hr />
        <Fade left>
        <h5 className="filter-cat">By Genre</h5>
       
          <div className="filter-btn">
          <NavLink to="/explore/?category=science"><button className='filterbtn'>Science</button></NavLink>
        <NavLink to="/explore/?category=books"><button className='filterbtn'>Finance</button></NavLink>
        <NavLink to="/explore/?category=adventure"><button className='filterbtn'>Adventure</button></NavLink>
        <NavLink to="/explore/?category=course related"><button className='filterbtn'>Course related</button></NavLink>
        <NavLink to="/explore/?category=biography"><button className='filterbtn'>Biography</button></NavLink>
        <NavLink to="/explore/?category=history"><button className='filterbtn'>History</button></NavLink>

          </div>
        </Fade>
</div>
</div>
            </div>
           <div className="allblogs">
             
               {post.map((value)=>{
                 
                   return (<Card value={value}/>);
               }
               )
}

</div>
</div>
        </>
    )
}

export default Middle
