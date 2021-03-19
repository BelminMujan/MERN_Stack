import React from "react"
import "./loginForm-style.css"
import { Link  } from "react-router-dom"
import FormField from "../formField/formField"

export default function LoginForm() {
    return (
        <div>
            <FormField label="UserName"></FormField>
            <FormField label="Password"></FormField>
            <button className="create-button login-button">Log in</button>
            <p>Don't have an account? <Link to="/">Create one</Link></p>
        </div>
    )
}