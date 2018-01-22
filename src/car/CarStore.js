import React from 'react';
import { createStore, combineReducers } from 'redux';

const initialCarState = {
    _id: string
}

const carReducer = (state = initialCarState, action) => {
    switch(action.type){
        case 'CARS_LIST_SUCCESS':
            return Object.assign({},state, {cars: action._id})
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