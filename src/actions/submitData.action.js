import { SUBMIT_DATA } from '../constants';

export const submitDataActions = {
    set
}

function set(name, value) {
    return { 
        type: SUBMIT_DATA.SET, 
        name,
        value
    }
}