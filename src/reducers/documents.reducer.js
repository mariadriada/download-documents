import { DOCUMENT } from '../constants'

export default function documentReducer(state = {}, action) {
    
    switch(action.type ){
        case DOCUMENT.GET:
            //console.log('reducer ', action)
            return true
       
        default:
            return state
    }   
}