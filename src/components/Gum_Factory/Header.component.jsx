import React,{useContext} from "react";
import styledComponents from 'styled-components'
// import { MyProvider } from "./ContextProvider.component";
const Header = ()=>{
// const ConsumerContext = useContext(MyProvider)    
const HeaderStyle = styledComponents.header`
grid-area:header;
background:green;`

return(
     <HeaderStyle>
         {/* {ConsumerContext.object.AgentName} */}
         <h1>Header</h1>
     </HeaderStyle>
)    
}
export default Header;