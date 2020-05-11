import { SUBMIT_DATA } from '../constants'

export default function documentReducer(state = {}, action) {
    
    switch(action.type ){
        case SUBMIT_DATA.SET:
            console.log('SUBMIT_DATA REDUCER ', action)
            return {
                ...state,
                [action.name]: action.value
            }
       
        default:
            return state
    }   
}