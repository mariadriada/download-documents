import { combineReducers } from 'redux'
//import loadingReducer from './loadingReducer'
import documentsReducer from './documents.reducer'
import stepsReducer from './steps.reducer'
import currentStepReducer from './currentStep.reducer'
import formDataReducer from './formData.reducer'
import submitDataReducer from './submitData.reducer'

const rootReducer = combineReducers({
    //isLoading: loadingReducer,
    document: documentsReducer,
    steps: stepsReducer,
    currentStep: currentStepReducer,
    formData: formDataReducer,
    submitData: submitDataReducer
})

export default rootReducer