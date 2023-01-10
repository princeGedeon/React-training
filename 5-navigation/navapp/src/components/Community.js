import React from 'react';
import { useNavigate } from 'react-router';


const Community = () => {
    const navigate=useNavigate();
    return (
        <div className="flex items-center justify-center h-screen bg-blue-300">
        <h1 className="m-5 text-2xl font-bold md:text-3xl">Community</h1>
        <button className="px-6 py-2 border-2 hover:ring hover:ring-blue-900" onClick={()=>navigate(-2)}>Retours vers précédent</button>
        <button className="px-6 py-2 bg-red-300 border-2 hover:ring hover:ring-red-900" onClick={()=>navigate('/community')}>Retours vers Community</button>
  </div>
    );
};

export default Community;