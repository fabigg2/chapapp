import httpClient from '../settings/httpClient';

export const auth = {
    regularSignIn : async(data)=>{
        // console.log(data);
        return await httpClient.post('/auth/sign-in', data);
    },
    googleSignIn : async(xgtoken)=>{
        return await httpClient.post('/auth/google', {}, {headers: {xgtoken}});
    },
    signWithToken : async(data)=>{
        return await httpClient.post('/auth/token', {}, {headers:{'x-token':data}});
    },
    sendLink : async(email)=>{
        return await httpClient.post('/auth/link', {email});
    }
}