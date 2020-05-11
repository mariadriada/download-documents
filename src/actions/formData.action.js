import { FORM_DATA } from '../constants';

export const formDataActions = {
    set
}

function set(data) {
    return { 
        type: FORM_DATA.SET, 
        data
    }
}