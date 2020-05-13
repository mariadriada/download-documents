import { FORM_DATA } from '../constants'

export default function documentReducer(state={}, action) {
    
    switch(action.type ){
        case FORM_DATA.SET:
            return action.data
        break
        default:
            return state
    }   
}