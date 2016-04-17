import React from 'react'
import ReactDOM from 'react-dom'

import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from './reducers';
import AddValue from './components/addValue'
import counter from './reducers'


const reducer = storage.reducer(combineReducers(reducers));

const engine = createEngine('my-save-key');

const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const store = createStoreWithMiddleware(reducer);

const load = storage.createLoader(engine);


load(store)
    .then((newState) => store.subscribe(render) )
    .catch(() => console.log('Failed to load previous state'));

const rootEl = document.getElementById('root')

const render = () => {
    ReactDOM.render(
        <AddValue
            value={store.getState().default}
            updateValue={() =>
    store.dispatch({
        type: 'ADD-VALUE'
    })
}
            onDecrement={() =>
    store.dispatch({
        type: 'REMOVE-ALL-VALUES'
    })
}
        />,
        rootEl
    );
}

render()
store.subscribe(render)