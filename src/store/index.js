import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducer from '../reducers/Reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(saga);

export default store;