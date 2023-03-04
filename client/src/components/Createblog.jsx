import React from 'react'
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Createblog = () => {

const [user,setuser]=useState("");
const [info,setinfo]=useState({
    title:"",
    discription:"",
    username:user,
    category:"",
    contact:"",
    price:"",
    image:""
});
const [img,setImg]=useState()
  const uploadImage=(files)=>{
    console.log(files[0]);
    
    const formdata=new FormData();
    formdata.append("file",files[0]);
    formdata.append("upload_preset","x8enycrc")
    axios.post("https://api.cloudinary.com/v1_1/desjmubi1/image/upload",formdata).then((res)=>{
    console.log(res.data.secure_url);
    
    setImg(res.data.secure_url);
    console.log(img);
    })}
const url="http://localhost:8000";
const updateblog=(e)=>{
setinfo({...info,[e.target.name]:e.target.value});

}
let history = useHistory ();
const publishblog=async()=>{
    try{
        const res=await fetch(`${url}/create`,{
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
       
      
        history.push('/home');}
catch(err){
    console.log(err);
    
}
}


    return (
        <div className='createp'>
        <div className='create'>
        <div className='t'>
            <h1 >Create Review</h1>
            </div>
            <div className='create2'>
                <h2>Title</h2>
            <input type="text" className='form' id="title"  name="title" value={info.title} placeholder="title" onChange={(e)=>updateblog(e)} required/>
            <h2>Discription</h2>
            <input type="text" className='form' id="dis"name="discription" value={info.discription} placeholder="discription" onChange={(e)=>updateblog(e)} required/>
            <h2>Username</h2>
            <input type="text" className='form' id="user"name="username" value={info.user} placeholder="username" onChange={(e)=>updateblog(e)} required/>
            <h2>Category</h2>
            <input type="text" className='form' id="category"name="category" value={info.category} placeholder="category" onChange={(e)=>updateblog(e)} required/>
            <h2>contact</h2>
            <input type="text" className='form' id="contact"name="contact" value={info.contact} placeholder="contact" onChange={(e)=>updateblog(e)} required/>
            <h2>price</h2>
            <input type="text" className='form' id="price"name="price" value={info.price} placeholder="price" onChange={(e)=>updateblog(e)} required/>
            {/* <input type="file" onChange={(event)=>{uploadImage(event.target.files);}}></input> */}

            </div>
           <div className='publish'>
            <button className="newsletter-btn" onClick={()=>publishblog()} >publish</button>
            </div>
            </div>
        </div>
    )
}

export default Createblog





