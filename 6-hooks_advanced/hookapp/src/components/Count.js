import React, { useReducer }  from 'react';

const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'init':
            return initialState;
        default:
            return state;
    }
}
const Count = () => {
    const [count,dispatch]=useReducer(reducer,initialState);
    return (
        <div className="bg-blue-300">
            <h1 className="text-3xl font-bold text-center">Hello World</h1>
            <h2>{count}</h2>
            <div className="flex justify-between">
                <button className="px-3 py-2 bg-green-500" onClick={()=>dispatch('increment')}>+</button>
                <button className="px-3 py-2 bg-red-500" onClick={()=>dispatch('init')}>0</button>
                <button className="px-3 py-2 bg-red-500" onClick={()=>dispatch('decrement')}>-</button>
                
            </div>
        </div>
    );
};

export default Count;