import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import styledComponents from 'styled-components'
import Header from "./Header.component";
import Footer from "./Footer.component" 
import Sidebar from "./Sidebar.component"
import CreateOrder from "./CreateOrder.component";
import Home from './Home.component';
import Content from './Contact.component';
import Product from "./Products.component";
import Orders from "./Orders.component";
const AppRouter = ()=>{
const BaseStyle = styledComponents.div`
display:grid;
grid-template-areas:
'header header header header header header'
'menu main main main main main '
'menu main main main main main '
'menu footer footer footer footer footer';
width: 100vw;
height: 100vh;
grid-template-rows: 10% 80%;
grid-template-columns: 20%;
text-align:center;
`
return(
<BaseStyle>    
<BrowserRouter>
        <Header/> 
        <Sidebar/>
        <Routes>
            <Route exact path="/"element={<Home/>}/>
            <Route path="/Content"element={<Content/>}/>
            <Route path="/CreateOrder"element={<CreateOrder/>}/>            
            <Route path="/Product"element={<Product/>}/>
            <Route path="/Orders"element={<Orders/>}/>
        </Routes>
        <Footer/>
</BrowserRouter> 
</BaseStyle>
)    
}
export default AppRouter;
