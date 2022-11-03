import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{setTodos([...todos, {id:Date.now(), text:todo, status: false}]); setTodo('')}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todos.map((data, index)=> {
            return (
              <div className={data.status ? 'todo done': 'todo'} key={index}>
                <div className="left">
                  <input onChange={(e)=>{
                    setTodos(todos.filter(obj=>{
                      if(obj.id === data.id){
                        obj.status = e.target.checked
                      }
                      return obj;
                    }))
                    }} value={data.status} type="checkbox" name="" id={data.id} />
                  <label for={data.id}>{data.text}</label>
                </div>
                <div className="right">
                  <i onClick={()=>{
                    setTodos(todos.filter(obj=>{
                      return obj.id !== data.id;
                    }))
                    }} className="fas fa-times"></i>
                </div>
              </div>
            );
          })
        }
        
      </div>
    </div>
  );
}

export default App;

