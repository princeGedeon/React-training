import React,{useState} from 'react'

export default function AddtodoForm({addNewTodo}) {
    const [addtodoname, setaddtodoname] = useState('');
    const handleTodo=(e)=>{
        e.preventDefault();
        addNewTodo(addtodoname);
    }
  return (
    <div>
      <form className="w-full my-5" onSubmit={handleTodo}>
          <div className="w-full px-3 py-4 border rounded-md">
            <div className="flex flex-col justify-between">
          <label>Ajouter de nouveau todo</label>
          <input type="text" value={addtodoname} onChange={(e)=>setaddtodoname(e.target.value)} className="my-3 rounded-md border-1 focus:ring ring-blue-900" name="todo" id="id_todo" />
          </div> 
          <input type="submit" value="Ajouter Todo" className="w-full px-3 py-2 my-2 rounded-md shadow-md hover:shadow-xl hover:ring ring-blue-900 " />
          </div>
      </form>
    </div>
  )
}
