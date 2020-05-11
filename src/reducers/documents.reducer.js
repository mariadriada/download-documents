import { DOCUMENT } from '../constants'

const loadingReducer = (state = {}, action) => {
    
    switch(action.type ){
        case DOCUMENT.GET:
            console.log('reducer ', action)
            return true
       
        default:
            return state
    }   
}

export default loadingReducer