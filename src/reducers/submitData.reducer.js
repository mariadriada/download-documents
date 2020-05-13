import { SUBMIT_DATA } from '../constants'

export default function documentReducer(state = {}, action) {
    
    switch(action.type ){
        case SUBMIT_DATA.SET:
            return {
                ...state,
                [action.name]: action.value
            }
        break
        default:
            return state
    }   
}