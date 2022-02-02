import React,{useState} from "react";
import {GetData} from '../Servicess/Service'
const Content = ()=>{
const[arrayM,setArray]=useState([]);

return(
    <div>
        <h1>Content</h1>
        <button onClick={()=>{GetData(setArray)}}>Send</button>

{
arrayM.map((item)=>
<li>{item.movieName}</li>
)
}
    </div>
)    
}
export default Content;