import React from 'react'
import check from './Assets/check.png';
import not_tick from './Assets/not_tick.png';
import xmark from "./Assets/x-mark.png";
import "./CSS/Todoitems.css";

const Todoitems = ({no,display,text,setTodos}) => {

  const del = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  }
  
  const toggle=(no)=>{
  let data = JSON.parse(localStorage.getItem("todos"));
  for(let i=0; i<data.length;i++)
  {
    if(data[i].no===no){
      if (data[i].display===""){
        data[i].display="line-through";
     }  
     else{
        data[i].display="";
     }
    break;
    }
  }
  setTodos(data);
}
  return (
    <div className='todoitems  flex justify-between items-center'>
        <div className= {`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
          {
            display===""?<img src={not_tick} className='cursor-pointer'/>:<img src={check} className='cursor-check'/>
          }
           <div className="todoitems-text">{text}</div>
        </div> 
        <img src={xmark} id='xmark'  
        className=' cursor-pointer'
        onClick={()=>{del(no)}}/>
    </div>
  )
}

export default Todoitems