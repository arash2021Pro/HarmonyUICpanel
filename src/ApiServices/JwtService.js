import jwtDecode from "jwt-decode";


export const saveJwt=(token)=>{
    localStorage.setItem('JwtToken',token);
}
export const fetchJwt=()=>{
    const token = localStorage.getItem('JwtToken');
    if(!token)
        return undefined;
    return token;
}
export const removeJwt=()=>{
    localStorage.removeItem('JwtToken');
}
export const decodeJwt=()=>{
   const token = localStorage.getItem('JwtToken');
   if(!token)
       return undefined;
   return jwtDecode(token);
}
export const IsAuthenticated=()=>{
    const jwt=decodeJwt()
    if(!jwt)
        return false;
    var date=Math.ceil(new Date().getTime()/1000);
    console.log(date);
    console.log(jwt.exp);

    if(jwt.exp<date)
        return false;
    return true;
}

