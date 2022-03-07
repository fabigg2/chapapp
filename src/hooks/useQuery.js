import { useState } from "react";


export function useMutation(petition) {
    const useData = new DataResponse();
    async function mutate(body) {
        useData.isLoading = true;
        // console.log('loading...',isLoading)
        try {
           data =  await petition(body);
        //    console.log(data)
        } catch (err) {
           console.log(err.response)
            useData.error = err;
        }
        useData.isLoading = false;
        // console.log('stop loading...',isLoading);

    }
    return {option: useData, mutate}
}

class DataResponse{
    constructor(){
        this.error = null;
        this.data = null;
        this.isLoading = null;
    }
}