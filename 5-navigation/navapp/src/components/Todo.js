import React,{useState} from 'react'
import AddtodoForm from './AddtodoForm';
import {v4 as uuidv4} from 'uuid';
const Todo = () => {
    const [todos, setTodo] = useState([
        {id:1,todo:"Acheter du lait"},
        {id:2,todo:"Acheter un pain"},
        {id:3,todo:"Acheter un chawarma"},

    ]);

const addNewTodo=(newTodo)=>{
    setTodo([
        ...todos,
        {
            id:uuidv4(),
            todo:newTodo

        }
    ])
}
  return (
    <div className="flex flex-col items-center h-screen">
      <h1>Le nombre de Todo : {todos.length}</h1>
      <h2 className="text-xl">Mes Todos</h2>
      <ul className="w-3/4">
          {todos.map((todo)=>{
              return (<li className="p-4 font-semibold border " key={todo.id}>{todo.todo}</li>);
          })}
      </ul>
      <AddtodoForm addNewTodo={addNewTodo}/>
    
     
    </div>
  )
}

export default Todo;
