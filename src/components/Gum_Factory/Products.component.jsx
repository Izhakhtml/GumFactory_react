import React,{useContext,useEffect} from "react";
import { MyProvider } from "./ContextProvider.component";
const Product = ()=>{
const ConsumerContext = useContext(MyProvider);
useEffect(()=>{
    alert(`Welcome to Agent : ${ConsumerContext.object.AgentName}`)
},[])
return(
    <div>
        <h1>Product</h1>
    </div>
)    
}
export default Product;
