import React, { Component, createContext } from 'react';

const initialState = {
    StateBool: true
};

const main = createContext(initialState)

const mainStateReducer= (state, action) => {
    switch (action.type) {
        case 'TOGGLE_State':
            return {...state, StateBool: !state.modalBool}
        default: 
            return state
    }
}

export {main, mainStateReducer}