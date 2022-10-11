import React from 'react'
import { useState,createContext } from 'react'

export const SidebarContext=createContext();

 function SidebarContextProvider(props) {

    const [toggle,setToggle]=useState(true);

    const toggleChange=()=>{
        setToggle(!toggle);
    }
 
    return (
        <SidebarContext.Provider value={{toggle,toggleChange}}>
            {props.children}
        </SidebarContext.Provider>
    )
}
export default SidebarContextProvider;