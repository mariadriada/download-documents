import { DOCUMENT } from '../constants';

export const documentActions = {
    get,
    download
}

function get(data) {
    console.log('*** llega al action ', data)
    return { 
        type: DOCUMENT.GET, 
        data
    }
}


function download(user, password, document) {
    return { 
        type: DOCUMENT.DOWNLOAD, 
        data: { user: user, password: password, document: document }
    }
}