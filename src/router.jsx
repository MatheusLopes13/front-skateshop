import React, { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Detals from "./pages/Detals/detals";
import Admin from "./pages/Admin/admin"




const Router = () => {
     

return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />

          <Route  path="/login" element={<Login />} />

          <Route  path="/detals" element={<Detals/>} />

          <Route path="/admin" element={<Admin/>}/>
        </Routes>
    </BrowserRouter>
)
}

export default Router