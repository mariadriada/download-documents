import { STEPS } from '../constants'

export default function documentReducer(state = {}, action) {
    
    switch(action.type ){
        case STEPS.SET:
            console.log('reducer STEPS ', action)
            return action.data
       
        default:
            return state
    }   
}