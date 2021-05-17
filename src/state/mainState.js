import React, { Component, createContext } from 'react';

const initialState = {
    name: '',
    client: '',
    country: '',
    bio: '',
    email: '',
    img_url: '',
    test: ''
};

const main = createContext(initialState)

const mainStateReducer= (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, name: action.payload.name, client: action.payload.client, country: action.payload.country, bio: action.payload.bio, email: action.payload.email, img_url: action.payload.img_url };
        case 'SET_TEST':
            return {...state, test: action.payload.test}
        default: 
            return state
    }
}

export {main, mainStateReducer}