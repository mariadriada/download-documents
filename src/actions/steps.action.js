import { STEPS } from '../constants';

export const stepActions = {
    set
}

function set(data) {
    return { 
        type: STEPS.SET, 
        data
    }
}