import React, { Component, createContext } from 'react';

const initialState = {
    name: '',
    client: '',
    country: '',
    bio: '',
    email: '',
    img_url: '',
    hobbies: [],
    test: '',
    other_user: {},
    other_user_name: ''
};

const main = createContext(initialState)

const mainStateReducer= (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, name: action.payload.name, client: action.payload.client, country: action.payload.country, bio: action.payload.bio, email: action.payload.email, img_url: action.payload.img_url, hobbies: action.payload.hobbies };
        case 'SET_TEST':
            return {...state, test: action.payload.test}
        case 'SET_OTHER_USER':
            return {...state, other_user: action.payload.other_user}
        default: 
            return state
    }
}

export {main, mainStateReducer}