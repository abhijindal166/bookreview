import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios";
const url="http://localhost:8000";
const Logout = () => {
  let history = useHistory ();
    useEffect(() => {

        const logoutroute=async()=>{

            const data= await axios.get(`${url}/logout`);
            localStorage.clear();

            history.push('/');
   }
 
   logoutroute();
  
}

,[])
  return (
    <>Logout</>
  )
}

export default Logout