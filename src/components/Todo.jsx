import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./CSS/Todo.css";
import Todoitems from "./Todoitems";


  let count = 0;
const Todo = () => {
  const[todos,setTodos] = useState([]);
  const inputRef = useRef(null);  


  const add = ()=>{
    const newTodo = {
      no: count++,
      text: inputRef.current.value,
      display: "",
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    inputRef.current.value="";
``
  }
  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
  },[]);

  useEffect(()=>{
    setTimeout(() => {
      
      console.log(todos);
      localStorage.setItem("todos",JSON.stringify(todos)) 
    }, 100);
  },[todos])


  return (
    <div className="Todo flex h-screen w-screen bg-emerald-200 justify-center items-center flex-col">
      <div
        className="container bg-emerald-500 rounded-lg w-96 flex  flex-col"
        id="main-container"
      >
        <div className="todo-add ">
        <h1>Todo list </h1>
          <input 
            ref={inputRef}
            type="text"
            placeholder="Add your task"
            className="input border-none rounded-3xl h-10"/>

            <button id="add-btn"   
            onClick={()=>{ add()}}
            className="bg-lime-200 rounded-2xl  p-2 text-xs font-medium w-20">ADD
            </button>
        </div>

        <div className="todos-items">
          {todos.map((items,index)=>{
            return <Todoitems key={index} setTodos={setTodos} no={items.no} display={items.display} text={items.text}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
