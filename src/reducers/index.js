import { combineReducers } from 'redux'
//import loadingReducer from './loadingReducer'
import documentsReducer from './documents.reducer'

const rootReducer = combineReducers({
    //isLoading: loadingReducer,
    documents: documentsReducer,
})

export default rootReducer