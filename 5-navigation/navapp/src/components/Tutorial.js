import React from 'react';
import { useNavigate } from 'react-router';

function Tutorial(props) {
    const navigate=useNavigate();
    console.log(props);

    setTimeout(()=>{
        navigate('/');
    },5000);
    return (
        <div className="flex items-center justify-center h-screen bg-red-600">
        <h1 className="m-5 text-2xl font-bold md:text-3xl">Oops, vous serez rediriger dans 5 seoncde;</h1>
        
        <button className="px-6 py-2 border-2 hover:ring hover:ring-blue-900" onClick={()=>navigate(-1)}>Retours vers précédent</button>
        <button className="px-6 py-2 bg-red-300 border-2 hover:ring hover:ring-red-900" onClick={()=>navigate('/community')}>Retours vers Community</button>
  </div>
    );
}

export default Tutorial;