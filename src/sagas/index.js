import {call, put, takeEvery} from 'redux-saga/effects';
import CatalogServices from '../services/Catalogservices';

function* getOrders(action) {
    try {
        const orders = yield call(CatalogServices.getOrders);
        yield put({
            type: "GET_ORDERS",
            orders: orders
        });
    }
    catch(e) {
        console.log(e)
    }
};

function* createOrder(action) {
    try {
        const orders = yield call(CatalogServices.getOrders);
        yield put({
            type: "CREATE_ORDERS",
        });
    }
    catch(e) {
        console.log(e)
    }
};

function* RootSaga() {
    yield takeEvery("GET_ORDERS_REQUEST", getOrders);
    yield takeEvery("CREATE_ORDER_REQUEST", createOrder);
}

export default RootSaga;