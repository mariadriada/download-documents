import { FORM_DATA } from '../constants'

export default function documentReducer(state = {}, action) {
    
    switch(action.type ){
        case FORM_DATA.SET:
            //console.log('reducer FORM_DATA ', action)
            return action.data
       
        default:
            return state
    }   
}