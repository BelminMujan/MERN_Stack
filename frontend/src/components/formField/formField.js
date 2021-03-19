import React, {useState} from "react"
import "./formField-style.css"

export default function RegisterFormField(props){

    return(
        <div className="field">
            <label>{props.label}</label>
            <input name={props.name} value={props.value} onChange={(event)=>{props.change(event)}} ></input>
        </div>
    )
}