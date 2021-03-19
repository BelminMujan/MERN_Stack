import React from "react"
import "./register-style.css"
import RegisterForm from "../registerForm/registerForm"
import LoginForm from "../loginForm/loginForm"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


export default function Register(){
    return(
        <div className="main"> 
            <div className="left">
                <h1>Lottery Display</h1>
                <p>A few clicks away <br/> from creating your <br/> Lottery Display</p>
            </div>
            <Router>
                <div className="right">
                    <Switch>
                        <Route path="/" exact component={RegisterForm}/>
                        <Route path="/login" exact component={LoginForm}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}