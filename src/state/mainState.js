import React, { Component, createContext } from 'react';

const initialState = {
    name: ''
};

const main = createContext(initialState)

const mainStateReducer= (state, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, city: action.payload.city };
        default: 
            return state
    }
}

export {main, mainStateReducer}