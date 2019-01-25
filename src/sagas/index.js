import {call, put, takeEvery} from 'redux-saga/effects';
import CatalogServices from '../services/Catalogservices';
import {createOrder as _createOrder} from '../javascripts/firebase';
import {getOrders as _getOrders} from '../javascripts/firebase';

function* getOrders(action) {
    try {
        const orders = yield _getOrders();
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
        _createOrder(action.order);
        yield put({
            type: "CREATE_ORDER",
            order: action.order
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