import axios from "axios"
import { baseURI, LOGOUT } from "../../../Api/Api"
import Cookie from'cookie-universal'
export default function Logout()
{
    const cookie=Cookie();
    async function handlelogout() {
        try{
        const res=await axios.get(`${baseURI}/${LOGOUT}`,{
            headers:{
                Authorization: 'Bearer '+ cookie.get('e-commerce')

            }
            
        })
        console.log(res)
        window.location.pathname='/';
        
        }
        catch(err)
        {
         console.log(err)
        }
    }
    return <button onClick={handlelogout}>Logout</button>
} 