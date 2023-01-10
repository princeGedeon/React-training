
import './App.css';
import Docs from './components/Docs';
import Tutorial from './components/Tutorial';
import Community from './components/Community';
import Menu from './components/Menu';
import {  Navigate, Route ,Routes} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import { MyContext } from './components/MyContext';
import { useState } from 'react';
import HookComp from './components/HookComp';
import FunctionState from './components/FunctionState';
import Todo from './components/Todo';

function App() {
  

  const [underConst, setunderConst] = useState({Docs:false,Tuto:true,Comm:false});
  return (
    <MyContext.Provider value={{"nom":"Prince"}}>
    
 
      <Menu/>
      <Routes>
      <Route  path="/" element={<Navigate to="/docs"/>}/>
      <Route  path="/docs" element={<Docs/>}/>
      <Route  path="/new" element={<FunctionState/>}/>
      <Route  path="/tuto" element={<Tutorial/>}/>
      <Route  path="/todo" element={<Todo/>}/>
      {/* <Route  path="/tuto" element={underConst.Tuto?<Navigate to="/"/>:<Tutorial/>}/> */}
      
       <Route path="/user/:profileId" element={<Profile/>}/>

    <Route  path="/community" element={<Community/>} />
                <Route path="*" element={ErrorPage}/>
      </Routes>
     
   
    </MyContext.Provider>
  );
}

export default App;
