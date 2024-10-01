import axios from "axios";
import { useEffect } from "react";
import { baseURI, GOOGLECALLBACK } from "../../../Api/Api";
import { Navigate, useLocation } from "react-router-dom";
import Cookie from 'cookie-universal'
export default function Googlecallback() {
 
    const cookie=Cookie();

    const loaction=useLocation()
  useEffect(() => {
    async function GoogleCall() {
      try {
        const res = await axios.get(
          `${baseURI}/${GOOGLECALLBACK}${loaction.search}`);
        const token=res.data.access_token
        cookie.set('e-commerce',token)
        
      } catch (err) {
        console.log(err);
      }
     
    }
    GoogleCall();
  }, []);
  return (<h1>Test</h1>)
  
}
