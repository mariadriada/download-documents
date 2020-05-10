import { DOCUMENT } from '../constants';

export const documentActions = {
    get
}

function get(user, password) {
    return { 
        type: DOCUMENT.GET, 
        data: { user: user, password: password }
    }
}