import React, { Component, useState, useHistory, useEffect, useContext } from 'react';

import LoginComponent from '../components/login_component'
import RegisterComponent from '../components/register_component'

import axios from 'axios';
import { Redirect } from 'react-router'

import { main } from "../state/mainState";

import '../css/login.css'

const Login = () => {

    let { state: globalState, dispatch } = useContext(main);

    let [loginInfo, setLoginInfo] = useState({});
    let [registerInfo, setRegisterInfo] = useState({});
    let [register, setRegister] = useState(false)

    let handleChangeLogin = (e) => {
        const auxLoginInfo = { ...loginInfo };
        auxLoginInfo[e.currentTarget.name] = e.currentTarget.value;
        setLoginInfo(auxLoginInfo);
    }

    let handleChangeRegister = (e) => {
        const auxRegisterInfo = { ...registerInfo };
        auxRegisterInfo[e.currentTarget.name] = e.currentTarget.value;
        setRegisterInfo(auxRegisterInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        
        let {data} = await axios.post("http://localhost:5000/api/users/login", loginInfo).catch(err => err)
        data = data[0]
        if (data) {
            dispatch({ type: "SET_USER", payload: { name: data.name, client: data.client, country: data.country, bio: data.bio, email: data.email, img_url: data.img_url, hobbies: data.hobbies}});
            dispatch({ type: "SET_TEST", payload: { test: 'Newest Test'}});
        } else {
            console.log("Sorry Brother")
        }
    }   
    
    const handleRegister = () => {
        console.log(registerInfo)
        axios.post('http://localhost:5000/api/users/registro', registerInfo)
    }


    if (globalState.name != '') {
        return <Redirect to='/Homepage'/>;
    }
    return ( 
    <React.Fragment>
        <div class='login-page'>
            <div class='form'>
            { register ?  
            <RegisterComponent
            handleChangeRegister={handleChangeRegister}
            handleRegister={handleRegister}
            setRegister={setRegister}
            /> : 
            <LoginComponent
            handleChangeLogin={handleChangeLogin}
            handleLogin={handleLogin}
            setRegister={setRegister}
            /> } 
            </div>
        </div>
    </React.Fragment>
     );
}
 
export default Login;