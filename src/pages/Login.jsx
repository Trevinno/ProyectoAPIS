import React, { Component, useState, useHistory, useEffect } from 'react';

import LoginComponent from '../components/login_component'
import RegisterComponent from '../components/register_component'

import axios from 'axios';
import { Redirect } from 'react-router'

import '../css/login.css'

const Login = () => {

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

    const [redirect, setRedirect] = useState(false)

    const handleLogin = async () => {
        const {data} = await axios.post('http://localhost:5000/api/login/login', loginInfo)
        if(data){
          setRedirect(true);
        }
    }   
    
    const handleRegister = () => {
        console.log(registerInfo)
        axios.post("http://localhost:5000/api/users/registro", registerInfo)
      }


    if (redirect) {
    return <Redirect to='/Homepage'/>;
    }
    console.log(registerInfo)
    return ( 
    <React.Fragment>
        <div class='login-page'>
            <div class='form'>
            { register ?  
            <RegisterComponent
            handleChangeRegister={handleChangeRegister}
            handleRegister={handleRegister}
            setRegister={setRedirect}
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