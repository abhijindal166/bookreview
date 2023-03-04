import axios from 'axios';

const url="http://localhost:8000/";
export const getpost=async(param)=>{
    try{
    
        const response= await axios.get(`${url}/allpost${param}`);
      
        return response;
    }
    catch(err){
        console.log(err);
    }
}
export const getmusic=async()=>{
    try{
        const response= await axios.get(`${url}/musicpost`);
      
        return response;
    }
    catch(err){
        console.log(err);
    }
}
export const getbooks=async()=>{
    try{
        const response= await axios.get(`${url}/bookpost`);
      
        return response;
    }
    catch(err){
        console.log(err);
    }
}

export const viewpost=async(id)=>{
    try{
        const data= await axios.get(`${url}/detailpost/${id}`);
        
        return data.data;
    }
    catch(err){
        console.log(err);
      
    }
}
export const getdata=async(id)=>{
    try{
        const data= await axios.get(`${url}/predata/${id}`);
       
        return data.data;
    }
    catch(err){
        console.log(err);
        
    }
}
export const sendupdatedata=async(post,id)=>{
    try{
        
         await axios.post(`${url}/updatedata/${id}`,post);
        
       
    }
    catch(err){
        console.log(err);
        
    }
}
export const deletepost=async(id)=>{
    try{
        
         await axios.get(`${url}/deletedata/${id}`).then((res)=>{
           
         })
        
       
    }
    catch(err){
        console.log(err);
       
    }
}
export const addcomment=async(id,data)=>{
    try{
         await axios.post(`${url}/comment/${id}`,data);
       
      
    }
    catch(err){
        console.log(err);
       
    }
}