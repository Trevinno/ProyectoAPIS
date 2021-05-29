import React, {useReducer} from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar'
import Home from './pages/Homepage'
import Mensajes_Positivos from './pages/Mensajes_Positivos'
import Chat from './pages/Chat'
import PostIt from './pages/PostIt'
import Perfil from './pages/Perfil'
import ChatRoom from './pages/ChatRoom'
import AddPostIt from './pages/AddPostIt'
import Login from './pages/Login'
import PerfilUsuarios from './pages/PerfilUsuarios'
import SpecificChatRoom from './pages/SpecificChatRoom'
import ChatBot from './pages/ChatBot'

import {main, mainStateReducer} from './state/mainState'

function App() {

  let [mainState, stateDispatch] = useReducer(mainStateReducer, {
    name: '',
    client: '',
    country: '',
    bio: '',
    email: '',
    img_url: '',
    test: '',
    other_user: {}
  })

  return (
    <React.Fragment>
        <main.Provider value={{state: mainState, dispatch: stateDispatch}}>
        <Navbar/>
              <Switch>
              <Route path='/Homepage' component={Home} />
              <Route path='/Mensajes_Positivos' component={Mensajes_Positivos} />
              <Route path='/Chat' component={Chat} />
              <Route path='/ChatRoom' component={ChatRoom} />
              <Route path='/ChatBot' component={ChatBot} />
              <Route path='/SpecificChatRoom/:_id' component={SpecificChatRoom} />
              <Route path='/AddPostIt/' component={AddPostIt} />
              <Route path='/Perfil/:_id' component={PerfilUsuarios} />
              <Route path='/Perfil/' component={Perfil} />
              <Route path='/Login/' component={Login} />
              <Redirect from='/' to='/Homepage' />
              </Switch>
        </main.Provider>
    </React.Fragment>
  );
}

export default App;
