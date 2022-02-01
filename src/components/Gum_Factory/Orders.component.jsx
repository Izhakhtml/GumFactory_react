import React,{useContext} from "react";
import { MyProvider } from "./ContextProvider.component";
const Orders = ()=>{
const ConsumerContext = useContext(MyProvider);
const OccurClick = ()=>{
    ConsumerContext.object={
        AgentName:ConsumerContext.object.AgentName,
        numberOfOrders:Number(ConsumerContext.object.numberOfOrders)+1,
        email:ConsumerContext.object.email
    }   
    ConsumerContext.setObject(ConsumerContext.object)
    alert(`
    The number of orders: ${ConsumerContext.object.numberOfOrders}
    The Email is: ${ConsumerContext.object.email}
`)
}
return(
    <div>
        <h3>The number of orders: {ConsumerContext.object.numberOfOrders}</h3>
        <button onClick={OccurClick}>Up Order</button>
    </div>
)    
}
export default Orders;
