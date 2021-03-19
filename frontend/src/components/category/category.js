import React, { useState } from "react"
import "./category.css"
import Modal from "react-modal"
import NewTask from "../newTask/newTask"
import axios from "axios"

export default function Category(props){
    const[modalIsOpen, setModalIsOpen]=useState(false)

    const deleteCategory=(categoryId)=>{
        axios.delete("/category/"+categoryId)
        .then(res=>console.log(res.data))
    }

    return(
        <div className="category">
            <div>
                <p className="category-name">{props.category}<span></span></p>
                <p>
                    <span className="add-task" onClick={()=>setModalIsOpen(true)}>+</span>
                    <span className="remove-category" onClick={()=>deleteCategory(props.categoryId)}>x</span>
                </p>
                    <Modal className="new-category-modal" isOpen={modalIsOpen}>
                        <NewTask categoryId={props.categoryId} close={setModalIsOpen}></NewTask>
                    </Modal>
            </div>
            {props.children}
        </div>
    )
} 