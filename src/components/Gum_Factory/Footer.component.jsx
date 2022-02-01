import React from "react";
import styledComponents from 'styled-components'

const Footer = ()=>{
const FooterStyle = styledComponents.footer`
grid-area:footer;
background:pink;
`
return(
     <FooterStyle>
         <h1>Footer</h1>
     </FooterStyle>
)    
}
export default Footer;
