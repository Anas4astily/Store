import { createContext, useEffect, useState } from "react";
export const WindowSize=createContext(null)
export default function WindowContext({children}){
    const[windowsize,setwindowsize]=useState(window.innerWidth);
    useEffect(()=>{
        function setwindowwidth(){
            setwindowsize(window.innerWidth)
        }
        window.addEventListener('resize',setwindowwidth);
        //clean up function
        return()=>{
            window.removeEventListener('resize',setwindowwidth);
        }
    },[])
    
    return(
        <WindowSize.Provider value={{windowsize,setwindowsize}}>{children}</WindowSize.Provider>
    )
}
