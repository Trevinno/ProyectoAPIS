import React, {useReducer} from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar'
import Home from './pages/Homepage'
import Mensajes_Positivos from './pages/Mensajes_Positivos'
import Chat from './pages/Chat'
import PostIt from './pages/PostIt'
import Perfil from './pages/Perfil'
import ChatRoom from './pages/ChatRoom'

import {main, mainStateReducer} from './state/mainState'

function App() {

  let [mainState, stateDispatch] = useReducer(mainStateReducer, {
    StateBool: false
  })

  return (
    <React.Fragment>
      <Navbar/>
        <main.Provider value={{state: mainState, dispatch: stateDispatch}}>
          {/* <Navbar/> */}
              <Switch>
              <Route path="/Homepage" component={Home} />
              <Route path="/Mensajes_Positivos" component={Mensajes_Positivos} />
              <Route path="/Chat" component={Chat} />
              <Route path="/ChatRoom" component={ChatRoom} />
              <Route path="/PostIt/:_id" component={PostIt} />
              <Route path="/Perfil/:_id" component={Perfil} />
              <Route path="/Perfil/" component={Perfil} />
              <Redirect from="/" to="/Homepage" />
              </Switch>
        </main.Provider>
    </React.Fragment>
  );
}

export default App;
