import React, {useState} from "react";

import '../../../rootFiles/loginfiles/dist/css/style.css';
import '../../../rootFiles/loginfiles/dist/css/app.css';
import '../../../rootFiles/loginfiles/dist/css/output.css';


import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {schema} from "../../../Validations/Authentication/LoginSchema";
import {loginHandler} from "../../../ApiServices/Authentication";
import {saveJwt} from "../../../ApiServices/JwtService";

export function HandleLogin(){

    const redirectTo = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const [users,SetUsers] = useState({username:'',password:''})
    const handleValue = (e)=>{
        const {name,value} = e.target;
        SetUsers({...users,[name]:value});
    }
    const HandleSubmit= async()=>{
        const {username,password} = users;
        const token = await loginHandler(username,password);
        console.log(token);
        if(token !== null){
            saveJwt(token);
            redirectTo('/Dashboard',{replace:true});
        }
        reset();
    }

    return (



        <body className="login">
        <div className="container sm:px-10">



            <div className="block xl:grid grid-cols-2 gap-4">

                <div className="hidden xl:flex flex-col min-h-screen ">
                    <a href="src/Components" className="-intro-x flex items-center pt-5">
                        <img alt="Midone Tailwind HTML Admin Template" className="w-32" src="Assets/images/logo/logo.png"/>

                    </a>
                    <div className="my-auto">
                        <img alt="Midone Tailwind HTML Admin Template" className="-intro-x w-1/2 -mt-16"
                             src="Assets/images/illustration.svg"/>
                        <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            چند کلیک دیگر به
                            <br/>
                            به حساب خود وارد شوید.
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
                            ورود
                        </h2>
                        <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">چند کلیک دیگر برای ورود به حساب
                            کاربری خود. تمام حساب های تجارت الکترونیک خود را در یک مکان مدیریت کنید
                        </div>

                        <form method='post' onSubmit={handleSubmit(HandleSubmit)}>
                            <div className="intro-x mt-8 space-y-5">

                                <input type="text"
                                       className="intro-x login__input input input--lg border border-gray-300 block"
                                       placeholder="نام کاربری"
                                       value={users.username}
                                       onInput={(e)=>handleValue(e)}
                                name='username'
                                       {...register("username")}

                                />
                                <p style={{color:'red'}}>{errors.username?.message}</p>
                                <input type="password"
                                       className="intro-x login__input input input--lg border border-gray-300 block "
                                       placeholder="پسورد"
                                       value={users.password}
                                       onInput={(e)=>handleValue(e)}
                                name='password'
                                       {...register("password")}
                                />
                                <p style={{color:'red'}}>{errors.password?.message}</p>
                            </div>
                            <div className="intro-x flex text-gray-700 text-xs sm:text-sm mt-4 justify-between">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" className="input border mr-2" id="remember-me" />
                                    <label className="cursor-pointer select-none" htmlFor="remember-me">مرا به خاطر
                                        بسپار</label>
                                </div>
                                <a href="/Authentication/ForgetPassword">رمز عبور را فراموش کرده اید؟</a>
                            </div>
                            <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left flex gap-3">
                                <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 ">ورود</button>

                                <a href='/Authentication/Signup' className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300  xl:mt-0">
                                    ثبت
                                    نام
                                </a>


                            </div>
                        </form>

                        <div className="intro-x mt-10 xl:mt-24 text-gray-700 text-center xl:text-right">
                            با ثبت نام، با ما موافقت می کنید
                            <br/>
                            <a className="text-theme-1" href="src/Components">شرایط و ضوابط</a> & <a className="text-theme-1"
                                                                                                     href="src/Components">سیاست حفظ حریم
                            خصوصی</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        </body>


    )
}