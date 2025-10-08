import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Conatct";
import PageNotFound from "./pageNotFound";
import {BrowserRouter,Routes,Route} from "react-router-dom"
const Def=()=>{
    return(
       <>
       <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>

   </Routes>
   </BrowserRouter>
       </>
    )
}
export default Def;