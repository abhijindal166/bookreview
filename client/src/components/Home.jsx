import {useEffect,React,useState} from "react";
import Hero from "./Hero";

import Info from "./Info";
import { useHistory } from 'react-router-dom';
import axios from "axios";
const url="http://localhost:8000";

const Home = () => {
  const [info,setinfo]=useState(0);
  let history = useHistory ();
  useEffect(() => {

    const showpage=async()=>{
      try{
        const t=localStorage.getItem( "jwttoken");
       
        const res=await fetch(`${url}/home`,{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
  
          },
          body:JSON.stringify({
             t
              
          })
      });
      console.log(res.status);
    

         if(res.status==202){
          console.log("hisotyryyyyyyyyyyy")
history.push("/");
         }
         const data=await res.json();
        let point=data.points;
setinfo(point);
        
          }
  catch(err){
      console.log(err);
     
  }
  }
  showpage();
  }
,[])
  // async function mounted(){
  //   const res=await axios.get("/books")
  //   const books=res.data
  //   console.log(books)
  // }
  // mounted()
  return (
    <div>
      <h1>POINTS--{`${info}`}</h1>
      <Hero />
      <Info />
      
    </div>
  );
};

export default Home;
