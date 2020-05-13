import { DOCUMENT } from '../constants'
import { takeEvery, put, call } from 'redux-saga/effects'
import { 
    documentActions
} from '../actions'
import { fetchDocument } from '../api'

export function* handleGetDocument(action){ 
   try {       
        yield put(documentActions.loading())
        const document = yield call(fetchDocument, action.data)  
        yield put(documentActions.download(document))
    }
    catch(error){
        yield put(documentActions.error(document))
    } 
}

export default function* watchDocument(){
    yield takeEvery(DOCUMENT.GET, handleGetDocument)
}