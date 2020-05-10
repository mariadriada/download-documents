import { DOCUMENT } from '../constants'
import { 
    documentActions
} from '../actions'

import { takeEvery, put, call } from 'redux-saga/effects'


export function* handleGetDocument(){ 
   yield console.log('handleGetDocument()')
    

}

export default function* watchDocument(){
    yield takeEvery(DOCUMENT.GET, handleGetDocument)
}