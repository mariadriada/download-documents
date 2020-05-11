//const axios = import('axios');
import  axios  from 'axios'

const BASE_URL = "https://crawler-dot-tributi-v2.wl.r.appspot.com"


const getURL = (type) => {
    switch(type){
        case 'rut': return `${BASE_URL}/user_get_rut`; break
        case 'declaracion': return `${BASE_URL}/user_get_previously_filingt`; break
        case 'terceros': return `${BASE_URL}/user_get_exogenat`; break
        default: return false
    }
}

/**
 * fetchDocument
 * [data]: Object
 */
export const fetchDocument = async (data) => {   
    
    const URL = getURL(data.document)
    console.log('fetchDocument', data, URL)

    if(URL !== false) {
        const response = fetch(URL, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            params: JSON.stringify({
                national_id: data.cedula, 
                password: data.password
            })
        })
        console.log('response')
        // const data = await response.json()     
        // if(response.status >= 400){
        //     throw new Error(data.error)
        // }    
        // return data
    }
    
}
