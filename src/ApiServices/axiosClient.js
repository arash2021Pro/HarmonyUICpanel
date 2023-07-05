import axios from "axios";
import {toast} from "react-toastify";

import {fetchJwt} from "./JwtService";

const client = axios.create({
    baseURL:'https://Core.harmonycms.ir/api'
});

client.interceptors.response.use(null,error => {
    if(error.response && error.response.status==403)
    {
        toast.error('You\'re UnAuthorized');
    }
    if(error.response && error.response.status==404)
    {
        toast.error('Not Found');

    }
    else{
        toast.error('Error');

    }
})

const token=fetchJwt();

if(token!=undefined)
{
    client.defaults.headers.common['Authorization']='Bearer' + token;
}
export default client;