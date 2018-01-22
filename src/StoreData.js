import React from 'react';
import { createStore, combineReducers } from 'redux';

const initialCarsState = {
    _items: []
}

const carReducer = (state = initialCarsState, action) => {
    switch(action.type){
        case 'CARS_LIST_SUCCESS':
            return Object.assign({},state, {cars: action._items})
    }
    return state;
}

const widgetReducer = (state = {}, action) => state;

const reducers = combineReducers({
    carState: carReducer,
    widgetState: widgetReducer
});

const store = createStore(reducers);

export default store;