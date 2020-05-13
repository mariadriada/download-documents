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
 * Download document and return blob
 */
export const fetchDocument = async (data) => {   
    
    const URL = getURL(data.document)

    if(URL !== false) {
        const response = await fetch('https://crawler-dot-tributi-v2.wl.r.appspot.com/user_get_rut', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "national_id": data.cedula, 
                "password": data.password
            })
        })

        if(response.status >= 400){
            throw new Error('Error searching document')
        }  

        const blob = await response.blob()
        const url = await window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = `${data.cedula}_${data.document}`;
        document.body.appendChild(a); 
        a.click();    
        a.remove(); 

        return url
    }
    
}
