import { DOCUMENT } from '../constants'

export default function documentReducer(state = {}, action) {
    
    switch(action.type ){
        case DOCUMENT.DOWNLOAD:
            //console.log('reducer ', action)
            return true
       
        default:
            return state
    }   
}