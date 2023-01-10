import React,{useState} from 'react'

function FunctionState() {
    const [counter, setcounter] = useState(0);

    const addOne=()=>{
        setcounter(counter+1);
    }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
    <div>
    Hello World

    <p>Class State : {counter}</p>
    <button className="px-6 py-2 bg-blue-600 rounded-md" onClick={()=>addOne()}>Click</button>
    </div>
</div>
  )
}

export default FunctionState
