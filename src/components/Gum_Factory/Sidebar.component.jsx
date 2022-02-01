import React from "react";
import {Link} from 'react-router-dom'
import styledComponents from 'styled-components'
const Sidebar = ()=>{
const NavStyle = styledComponents.nav`
grid-area:menu;
background:gray;
`
const ButtonStyle = styledComponents.button`
padding:10px;
display: flex;
flex-direction: column;
margin:5px;
transition:0.5s;
`
return(
<NavStyle>
         <h1>Sidebar</h1>
         <nav>
           <Link to="/"><ButtonStyle>Home</ButtonStyle></Link>
           <Link to="/Content"><ButtonStyle className>Content</ButtonStyle></Link>
           <Link to="/CreateOrder"><ButtonStyle className>Create Order</ButtonStyle></Link>
           <Link to="/Product"><ButtonStyle className>Product</ButtonStyle></Link>
           <Link to="/Orders"><ButtonStyle className>Orders</ButtonStyle></Link>
         </nav>    
</NavStyle>


)    
}
export default Sidebar;
