import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ControlCarousel from "./ControlCarousel"
import Login from "./Login"
import Header from "./Header"
import About from "./About"
import Home from "./Home"
import Contact from './Contact'


function Routes() {
    return (
        <div>
        <Router>
        <Switch>
        <Route path="/Contact">
        <Header/>
        <Contact/>
        </Route>
        <Route path="/Login">
        <Header/>
        <Login />
        </Route>
        <Route path="/About">
        <Header/>
        <About/>
        </Route>
        <Route path="/">
        <Header/>
        <ControlCarousel/>
        <Home/>
        </Route>
        </Switch>
        </Router>
        </div>
    )
}

export default Routes;


