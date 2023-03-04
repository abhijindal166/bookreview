import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom';
import { viewpost } from '../api';
import { deletepost } from '../api';
import { useHistory } from 'react-router-dom';
import Comment from './Comment';
import axios from "axios";
const url="http://localhost:8000";
const Detailblog = ({match}) => {
   
    const[detailpost,setdetailpost]=useState({});
    const[comment,setcomment]=useState();
    

    useEffect(() => {

             const detailpost=async()=>{

            // let data=await viewpost(match.params.id);
            
            const data= await axios.get(`${url}/detailpost/${match.params.id}`);
           console.log(data);
setdetailpost(data.data);
        }
      const comment=()=>{

      }
        detailpost();
        comment();
    }

    ,[])
    let history=useHistory();
    const deleteblog=async()=>{
        await deletepost(match.params.id);
       
        history.push('/explore');

    }
    const updatecomment=(e)=>{
        setcomment(e.target.value);
        console.log(comment);
    }
    const addcomment=async()=>{
    
      await addcomment(match.params.id,comment);
    }
    return (
        <div className="holder">
        <div className='create1'>
        <h2>Title</h2>
        <p>{`${detailpost.title}`}</p>
        <h2>Discription</h2>
        <p>{`${detailpost.discription}`}</p>
        <h2>Username</h2>
        <p>{`${detailpost.username}`}</p>
        <h2>Category</h2>
        <p>{`${detailpost.category}`}</p>
        <h2>price</h2>
        <p>{`${detailpost.price}`}</p>
        <h2>contact</h2>
        <p>{`${detailpost.contact}`}</p>
       
         {/* <NavLink to={`/explore/?username=${detailpost.username}`} className="author">Author :{detailpost.username}</NavLink> */}
            <NavLink to={`/update/${match.params.id}`}><button className='newsletter-btn'>buy</button></NavLink>
            
            {/* <button className='newsletter-btn' onClick={()=>deleteblog()}>Delete</button> */}
            </div>
        </div>
    )
}

export default Detailblog
