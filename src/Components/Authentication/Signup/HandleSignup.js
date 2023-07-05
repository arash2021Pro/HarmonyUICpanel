import React from "react";

import '../../../rootFiles/loginfiles/dist/css/style.css';
import '../../../rootFiles/loginfiles/dist/css/app.css';
import '../../../rootFiles/loginfiles/dist/css/output.css';
import {schemeStrength} from "../../../Validations/Authentication/PasswordStrengthValidation";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../../../Validations/Authentication/SignupScheme";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {useState} from "react";
import {registerHandler} from "../../../ApiServices/Authentication";
export function HandleSignup (){

    const redirectTo = useNavigate();

    const [isCapital,SetCapital] = useState(false);
    const [isLength,SetLenght] = useState(false);
    const [isSpecialchar,SetSpecialchar] = useState(false);
    const [isDigit,SetDigit] = useState(false);
    const PasswordStrength_Validate = (password) => {
        schemeStrength.capital.test(password) === true?SetCapital(true):SetCapital(false);
        schemeStrength.length.test(password) === true?SetLenght(true):SetLenght(false);
        schemeStrength.specialChar.test(password) === true?SetSpecialchar(true):SetSpecialchar(false);
        schemeStrength.digit.test(password)=== true?SetDigit(true):SetDigit(false);
    }
    const HandlePassStrengthValidation=(password,e)=>{
        handleValue(e)
        PasswordStrength_Validate(password);
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const [users,SetUsers] = useState({username:'',lastname:'',password:'',email:''})
    const handleValue=(e)=>{
        const {name,value} = e.target;
        SetUsers({...users,[name]:value});
    }
    const HandleSubmit= async()=>{
        const {username,lastname,password,email} = users;
        await registerHandler(username,lastname,password,email)
        redirectTo('/')
        reset();
    }

    return (

        <body className="login">


        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">

                <div className="hidden xl:flex flex-col min-h-screen">
                    <a href="src/Components/Authentication/Signup" className="-intro-x flex items-center pt-5">
                        <img alt="Midone Tailwind HTML Admin Template" className="w-32"
                             src="../Assets/images/logo/logo.png"/>
                    </a>
                    <div className="my-auto">
                        <img alt="Midone Tailwind HTML Admin Template" className="-intro-x w-1/2 -mt-16"
                             src="../Assets/images/illustration.svg"/>
                        <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            چند کلیک دیگر به
                            <br/>
                            در حساب کاربری خود ثبت نام کنید.
                        </div>
                        <div className="-intro-x mt-5 text-lg text-white">تمام حساب های تجارت الکترونیک خود را در یک
                            مکان مدیریت کنید.
                        </div>
                    </div>
                </div>

                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    <div
                        className="my-auto mx-auto xl:mr-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-right">
                            ثبت نام
                        </h2>
                        <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">چند کلیک دیگر برای ورود به
                            حساب کاربری خود. تمام حساب های تجارت الکترونیک خود را در یک مکان مدیریت کنید
                        </div>
                       <form method='post' onSubmit={handleSubmit(HandleSubmit)}>
                           <div className="intro-x mt-8 space-y-2.5">

                               <input type="text"
                                      className="intro-x login__input input input--lg border border-gray-300 block"
                                      placeholder="نام"
                                      name='username'
                                      {...register("username")}
                                      onInput={(e)=>handleValue(e)}

                               />
                               <p style={{color:'red'}}>{errors.username?.message}</p>
                               <input type="text"
                                      className="intro-x login__input input input--lg border border-gray-300 block"
                                      placeholder="فامیلی"
                                      name='lastname'
                                      {...register("lastname")}
                                      onInput={(e)=>handleValue(e)}
                               />
                               <p style={{color:'red'}}>{errors.lastname?.message}</p>

                               <input type="text"
                                      className="intro-x login__input input input--lg border border-gray-300 block"
                                      placeholder="ایمیل"
                                      name='email'
                                      {...register("email")}
                                      onInput={(e)=>handleValue(e)}
                               />
                               <p style={{color:'red'}}>{errors.email?.message}</p>

                               <input type="text"
                                      className="intro-x login__input input input--lg border border-gray-300 block"
                                      placeholder="پسورد"
                                      name='password'
                                      onInput={(e)=>HandlePassStrengthValidation(e.target.value,e)}

                                      {...register("password")}
                               />
                               <p style={{color:'red'}}>{errors.password?.message}</p>



                               <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-4">

                                   <div className={`col-span-3 h-full ${isDigit === true?"rounded bg-theme-9":"rounded bg-gray-200"}`}></div>
                                   <div className={`col-span-3 h-full ${isLength === true?"rounded bg-theme-9":"rounded bg-gray-200"}`}></div>
                                   <div className={`col-span-3 h-full ${isCapital === true?"rounded bg-theme-9":"rounded bg-gray-200"}`}></div>
                                   <div className={`col-span-3 h-full ${isSpecialchar === true?"rounded bg-theme-9":"rounded bg-gray-200"}`}></div>



                               </div>
                               <a href="src/Components/Authentication/Signup" className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">رمز عبور امن
                                   چیست؟</a>
                               <input type="text"
                                      className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                                      placeholder="تایید رمز عبور"
                                      name='repeatedPass'
                                      {...register("repeatedPass")}
                               />
                               <p style={{color:'red'}}>{errors.repeatedPass?.message}</p>
                           </div>
                           <div
                               className="intro-x flex items-center justify-between text-gray-700 mt-4 text-xs sm:text-sm">
                               <div>
                                   <input type="checkbox" className="input border mr-2" id="remember-me"
                                    name='agreed'
                                          {...register("agreed")}

                                   />


                                   <label   className="cursor-pointer select-none mr-3" htmlFor="remember-me">با شرایط
                                       موافقم</label>
                                   <p style={{color:'red'}}>{errors.agreed?.message}</p>
                               </div>
                               <a className="text-theme-1 " href="src/Components/Authentication/Signup">سیاست حفظ حریم خصوصی</a>
                           </div>
                           <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left flex gap-3">
                               <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">ثبت نام
                               </button>
                               <a href="/"   className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300  shadow-md">
                                   ورود
                               </a>
                           </div>
                       </form>
                    </div>
                </div>

            </div>
        </div>

        </body>


    )
}