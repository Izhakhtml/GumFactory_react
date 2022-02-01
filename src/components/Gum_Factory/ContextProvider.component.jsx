import React,{useState} from "react";
export const MyProvider = React.createContext();
export const ContextProvider = ({children})=>{
const [object,setObject]=useState({AgentName:"izhak",numberOfOrders:0,email:"izhak@gmail.com"})
return(
    <MyProvider.Provider value={{object,setObject}}>
        {children}
    </MyProvider.Provider>
)    
}
