import React from 'react'

export default function Welcome() {
    const handleClick1=()=>{
        console.log("Bonjouur");
    }

    const handleClick2=(arg)=>{
        console.log(arg);
    }
  return (
    <div>
        <button onClick={handleClick1}>Invoquez une fonction</button>
        <button onClick={()=>handleClick2("Bonsoir")}>Invoquez une fonction avec arg</button>
        <button onClick={()=>console.log('Bonne nuit')} >Invoquez une fonction</button>
    </div>
  )
}
