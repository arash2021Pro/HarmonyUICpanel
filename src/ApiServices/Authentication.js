import client from "./axiosClient";

export const registerHandler= async (username,lastname,password,email)=>{
    await client.post('/Authentication/Register',{username,lastname,password,email})
}

export const  loginHandler = async (username,password)=>{
    const {token} = await client.post('/Authentication/Login',{username,password})
    if(!token)
        return undefined;
    return token;
}
export const forgetPassHandler= async(mobilePhoneNumber,email)=>{
    const {result}  =await client.post('/Authentication/ForgetPassword',{mobilePhoneNumber,email})
    return result;
}
export const ValidateOptHandler=async (otp)=>{
    const result = await client.post('/Authentication/ValidateOtp',{otp})
    return result;
}
export const NewPasswordHandler = async(password)=>{
    await client.post('Authentication/NewPassword',{password});
}