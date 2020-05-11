import { DOCUMENT } from '../constants'
import { 
    documentActions
} from '../actions'
import { fetchDocument } from '../api'

import { takeEvery, put, call } from 'redux-saga/effects'


export function* handleGetDocument(action){ 
   yield console.log('handleGetDocument()', action)

   try {       
        const document = yield call(fetchDocument, action.data)  
        console.log('document', document)
        
    }
    catch(error){
        console.log('Error api ', error)
       
    } 
    

}

export default function* watchDocument(){
    yield takeEvery(DOCUMENT.GET, handleGetDocument)
}