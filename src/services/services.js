import httpClient from '../settings/httpClient';

export const userServices = {
    create : async(data)=>{
        // console.log(data);
        return await httpClient.post('/user', data);
    },
    
}