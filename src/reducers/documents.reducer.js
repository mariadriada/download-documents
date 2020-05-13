import { DOCUMENT } from '../constants'

const initialState = {
    loading: false, 
    error: false,
    showModal: false
}

export default function documentReducer(state = initialState, action) {
    
    switch(action.type ){
        case DOCUMENT.DOWNLOAD:
            return {
                ...state,
                loading: false,
                error: false,
                blob: action.data
            }
        break
        case DOCUMENT.LOADING:
            return {
                ...state, 
                loading: true,
                showModal: true,
                error: false
            }
        break
        case DOCUMENT.LOADED:
            return {
                ...state, 
                loading: false
            }
        break
        case DOCUMENT.LOADED:
            return {
                ...state, 
                loading: false
            }
        break
        case DOCUMENT.ERROR:
            return {
                ...state, 
                error: true,
                loading: false
            }
        break
        case DOCUMENT.SHOW_MODAL:
            return {
                ...state, 
                showModal: true
            }
        break
        case DOCUMENT.HIDE_MODAL:
            return {
                ...state, 
                showModal: false
            }
        break
       
        default:
            return state
    }   
}