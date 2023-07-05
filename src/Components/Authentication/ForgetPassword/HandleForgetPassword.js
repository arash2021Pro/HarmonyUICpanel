import '../../../rootFiles/loginfiles/dist/css/style.css';
import '../../../rootFiles/loginfiles/dist/css/app.css';
import '../../../rootFiles/loginfiles/dist/css/output.css';

import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {schema} from "../../../Validations/Authentication/LoginSchema";
import {loginHandler} from "../../../ApiServices/Authentication";
import {saveJwt} from "../../../ApiServices/JwtService";
import React from "react";


export const HandleForgetPassword=()=>{
    return (

        <body className="login">
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">

                <div className="hidden xl:flex flex-col min-h-screen ">
                    <a href="" className="-intro-x flex items-center pt-5">
                        <img alt="Midone Tailwind HTML Admin Template" className="w-32" src="../Assets/images/logo/logo.png"/>
                    </a>
                    <div className="my-auto">
                        <img alt="Midone Tailwind HTML Admin Template" className="-intro-x w-1/2 -mt-16"
                             src="../Assets/images/illustration.svg"/>
                            <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                                چند کلیک دیگر
                                <br/>
                                    رمز عبور خود را بازیابی کنید
                            </div>
                            <div className="-intro-x mt-5 text-lg text-white">تمام حساب های تجارت الکترونیک خود را در یک
                                مکان مدیریت کنید.
                            </div>
                    </div>
                </div>

                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0 ">
                    <div
                        className="my-auto mx-auto xl:mr-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-right">
                            بازیابی رمز عبور
                        </h2>
                        <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">چند کلیک دیگر برای ورود به
                            حساب کاربری خود. تمام حساب های تجارت الکترونیک خود را در یک مکان مدیریت کنید
                        </div>

                        <form method='post' hidden={false}>
                        <div className="space-y-1 mt-8">
                            <label>نوع دریافت رمز</label>
                            <div>
                                <select className="select2 w-full " data-hide-search="true">
                                    <option value="1" selected>موبایل</option>
                                    <option value="2">ایمیل</option>
                                </select>
                            </div>
                        </div>
                        <div className="intro-x mt-8 space-y-5">
                            <input type="text" className="intro-x login__input input  border border-gray-300 w-full"
                                   placeholder="موبایل / ایمیل"/>
                        </div>
                        <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left flex gap-3">
                            <button className="button button--lg w-full   text-white bg-theme-1 " type='submit'>دریافت کد یکبار مصرف
                            </button>
                        </div>
                        </form>


                        <form method='post' hidden={false}>
                        <div
                            className="intro-x mt-10  text-gray-700 text-center xl:text-right space-y-2.5  p-2 rounded-md">
                            <h2 className="font-bold text-xl text-center xl:text-right ">
                                کد دریافتی خود را وارد کنید
                            </h2>
                            <input type="text" className="intro-x login__input input  border border-gray-300 block"
                                   placeholder="کد یکبار مصرف"/>
                                <button className="button button--lg w-full  text-white bg-theme-1 ">تایید کد</button>
                        </div>
                        </form>


                    </div>
                </div>

            </div>
        </div>

        </body>





    )
}