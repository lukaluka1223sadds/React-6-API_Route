"use server"

import { resolve } from "path/posix"

type Link = string

const API_GET=async function (link:Link){
    const users = await fetch(link)
    const response = await users.json()
    console.log(response)
    const promise=new Promise((resolve)=>setTimeout(resolve  , 4000))
    const pr=promise

    return pr.then(() => {
        return response;
    });
        
    
}

export default API_GET