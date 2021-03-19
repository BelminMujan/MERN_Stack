import React, { useState } from "react"
import "./newCategory.css"
import axios from "axios"
import FormField from "../formField/formField"

export default function NewCategory(props){
let[title,setTitle]=useState("")

const onHandleChange=(event)=>{
    setTitle(event.target.value)
}
const addCategory=(title)=>{
    axios.post("/category", {title:title})
}

    return(
        <div className="new-category">
            <form>
                <FormField label="Category" name="category" value={title} change={onHandleChange}></FormField>
                <div>
                    <button className="add-button" onClick={()=>addCategory(title)}>Add</button>
                    <button onClick={()=>props.close(false)}className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    )
}