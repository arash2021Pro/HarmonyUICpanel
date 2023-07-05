import React from "react";
import Login from "../../Pages/Authentication/Login";
import Signup from "../../Pages/Authentication/Signup";
import {ForgetPassword} from "../../Pages/Authentication/ForgetPassword";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const RoutesPath=()=>{
return (

    <BrowserRouter>

        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Authentication/Signup" element={<Signup/>}  />
            <Route path="/Authentication/ForgetPassword" element={<ForgetPassword/>}  />
        </Routes>

    </BrowserRouter>

)
}