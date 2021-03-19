import React from "react"
import "./registerForm-style.css"
import RegisterFormField from "../formField/formField"
import { Link } from "react-router-dom"

export default function RegisterForm(){
    return(
        <form className="register-form">
            <h2>Register</h2>
            <p>Manage all your lottery efficiency</p>
            <p>Let's get you all set up so you can verify your personal account and begin <br/> setting up your profile</p>
            <RegisterFormField label="First Name"></RegisterFormField>
            <RegisterFormField label="Last Name"></RegisterFormField>
            <RegisterFormField label="Phone Number"></RegisterFormField>
            <RegisterFormField label="Email"></RegisterFormField>
            <RegisterFormField label="Password"></RegisterFormField>
            <RegisterFormField label="Confirm Password"></RegisterFormField>
            <label>
                <input name="email-recieving" type="checkbox" />
                <span> I want to recieve Lottery Display emails</span>
            </label>
            <label>
                <input name="policy-agreement" type="checkbox" />
                <span> I agree to all the Terms, Privacy policy and Fees</span>
            </label>
            <button className="create-button">Create Account</button>
            <p>Alreada have an Account? <Link to="/login">Log in</Link></p>        

        </form>
    )

}