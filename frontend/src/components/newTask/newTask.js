import React,{useState, useEffect} from "react"
import "./newTask.css"
import FormField from "../formField/formField"
import axios from "axios"

export default function NewTask(props){
    let[category,setCategory]=useState(props.categoryId)
    let[title,setTitle]=useState()
    let[description,setDescription]=useState()
    let[author,setAuthor]=useState()

    function onCategoryChange(event){
        setCategory(event.target.value)
    }

    function onTitleChange(event){
        setTitle(event.target.value)
    }
    function onDescriptionChange(event){
        setDescription(event.target.value)
    }
    function onAuthorChange(event){
        setAuthor(event.target.value)
    }

    return(
        <div className="new-task">
            <form>
                {props.brojac}
                {/* <FormField label="Category" name="category" value={category} change={onCategoryChange}></FormField>  */}
                <FormField label="Title" name="title" value={title} change={onTitleChange}></FormField>
                <FormField label="Description" name="description" value={description} change={onDescriptionChange}></FormField>
                <FormField label="Author" name="author" value={author} change={onAuthorChange}></FormField>
                <div>
                    <button className="add-button"
                    onClick={()=>{axios.post(`/category/${category}/task`, {title:title,description:description,author:author})}}>
                    Add</button>
                    <button onClick={()=>props.close(false)}className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    )
}