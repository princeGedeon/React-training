import React from 'react';
import { useNavigate } from 'react-router';

import { MyContext } from './MyContext';

const Docs = () => {
    const navigate=useNavigate();
    return (
        <MyContext.Consumer>
            {
                data=>{
                    return (<div className="flex flex-col items-center justify-center h-screen bg-yellow-200">
                    <h1 className="m-5 text-2xl font-bold md:text-3xl">Getting Started {data.nom}</h1>
                    <button className="px-6 py-2 border-2 hover:ring hover:ring-blue-900" onClick={()=>navigate('/tuto')}>Vers Tutorial</button>
              </div>);
                }
            }
        </MyContext.Consumer>
        
    );
};

export default Docs;