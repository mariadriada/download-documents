import { STEPS } from '../constants'

export default function documentReducer(state = {}, action) {
    
    switch(action.type ){
        case STEPS.SET:
            return action.data
       
        default:
            return state
    }   
}