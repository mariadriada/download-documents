import { CURRENT_STEP } from '../constants';

export const currentStepActions = {
    set
}

function set(data) {
    return { 
        type: CURRENT_STEP.SET, 
        data
    }
}