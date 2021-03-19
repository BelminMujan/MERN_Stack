import React from "react"
import "./task.css"

export default function Task(props){
    return(
        <div className="task">
            
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
            <p className="author">{props.author}</p>
            <hr></hr>

        </div>
    )
}