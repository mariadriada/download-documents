
import { all } from 'redux-saga/effects';

import documentSaga from './document.saga'

export default function* rootSaga(){   
    yield all([
        documentSaga(),
    ])
}