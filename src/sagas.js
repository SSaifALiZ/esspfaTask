import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_DATA_FETCH, GET_DATA_SUCCESS } from './actions';

function dataFetch() {
    return fetch('https://public.connectnow.org.uk/applicant-test/'
    ).then(response => response.json());
}

function* workGetDataFetch(action) {
    const data = yield call(dataFetch, action?.payload)
    yield put({ type: GET_DATA_SUCCESS, data })
}

function* mySaga() {
    yield takeEvery(GET_DATA_FETCH, workGetDataFetch)
}

export default mySaga