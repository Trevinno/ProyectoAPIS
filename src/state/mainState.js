import React, { Component, createContext } from 'react';

const initialState = {
    name: ''
};

const main = createContext(initialState)

const mainStateReducer= (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, name: action.payload.name };
        default: 
            return state
    }
}

export {main, mainStateReducer}