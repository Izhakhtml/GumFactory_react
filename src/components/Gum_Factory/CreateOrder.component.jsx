import React,{useContext} from "react";
import { MyProvider } from "./ContextProvider.component";
const CreateOrder = ()=>{
const ConsumerContext = useContext(MyProvider);
const ValueInput = (e)=>{
//! one way 
ConsumerContext.object[e.target.name] = e.target.value    
//! second way
// switch (e.target.name) {
//     case "AgentName":
//         ConsumerContext.object={
//             AgentName:e.target.value,
//             numberOfOrders:ConsumerContext.object.numberOfOrders,
//             email:ConsumerContext.object.email
//         }           
//         break;
//         case "numberOfOrders":
//             ConsumerContext.object={
//                 AgentName:ConsumerContext.object.AgentName,
//                 numberOfOrders:e.target.value,
//                 email:ConsumerContext.object.email  
//             }
//             break;
//             case "email":
//                 ConsumerContext.object={
//                     AgentName:ConsumerContext.object.AgentName,
//                     numberOfOrders:ConsumerContext.object.numberOfOrders,
//                     email:e.target.value  
//                 }
//                 break;
//     default:
//         console.log("error");
//         break;
// }
}
const OccurClick = ()=>{
ConsumerContext.setObject({...ConsumerContext.object});
        alert(`
               The Agent Name is: ${ConsumerContext.object.AgentName}
               The number of orders: ${ConsumerContext.object.numberOfOrders}
               The Email is: ${ConsumerContext.object.email}
               saved successfully!`)
}
return(
    <div>
        <label htmlFor="">Agent Name:</label><br />
            <input onChange={ValueInput} type="text" name="AgentName" /><br />
        <label htmlFor="">Number Of Orders:</label><br />
            <input onChange={ValueInput} type="number" name="numberOfOrders"/><br />
        <label htmlFor="">Email:</label><br />
            <input onChange={ValueInput} type="text" name="email" /><br />
        <button onClick={OccurClick}>Send</button>
    </div>
)    
}
export default CreateOrder;
