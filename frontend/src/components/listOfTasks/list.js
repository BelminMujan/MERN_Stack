import React, { useState, useEffect } from "react"
import "./list.css"
import Category from "../category/category"
import Task from "../task/task"
import NewCategory from "../newCategory/newCategory"
import axios from "axios"
import Modal from "react-modal"

export default function List(props){
    const[data, setData]=useState([])
    const[task, setTask]=useState([])
    const[modalIsOpen, setModalIsOpen]=useState(false)
    

    async function fetchData() {
        let response = await axios("/category");
        let data = await response.data;
        setData(data);
        console.log(data);
      }
    async function fetchTasks(){
        let response=await axios("/tasks")
        let data = await response.data
        setTask(data)
        console.log(data)
    }    
      useEffect(()=>{
        fetchData()
        fetchTasks()
      },[])
 
    return(
        <div className="list-wrapper">
            <div className="navbar2">
                <h3 className="sprint-number">Product Design Team <span>Sprint II</span></h3>
                <button className="new-member-button">+ New Member</button>
            </div>
            <div className="list-commands">
                <input type="text" placeholder="Search items"></input>
                <div>
                    <button onClick={()=>setModalIsOpen(true)}>+ New Category</button>
                    <Modal className="new-category-modal" isOpen={modalIsOpen}>
                        <NewCategory close={setModalIsOpen}></NewCategory>
                    </Modal>
                    <button>Filter</button>
                    <button>Board</button>
                </div>
            </div>
            <div className="categories">
                {
                    data.map((entry)=>{ 
                        let brojac=0
                        return <Category key={entry._id} category={entry.title} categoryId={entry._id}>
                           {
                               task.map((t)=>{
                                   if(t._categoryId==entry._id)
                                        brojac++
                                   if(t._categoryId==entry._id){
                                       return <Task 
                                       key={t._id}
                                       brojac={brojac}
                                       title={t.title}
                                       description={t.description}
                                       author={t.author}
                                       >
                                       </Task>
                                    }
                                })
                            }
                       </Category>
                    }) }
            </div>
        </div>
    )
} 