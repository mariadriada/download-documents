import { CURRENT_STEP } from '../constants'

export default function documentReducer(state = 0, action) {
    
    switch(action.type ){
        case CURRENT_STEP.SET:
            //console.log('reducer STEPS ', action)
            return action.data
       
        default:
            return state
    }   
}