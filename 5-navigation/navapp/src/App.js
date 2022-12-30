
import './App.css';
import Docs from './components/Docs';
import Tutorial from './components/Tutorial';
import Community from './components/Community';
import Menu from './components/Menu';
import {  Navigate, Route ,Routes} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import { MyContext } from './components/MyContext';

function App() {
  return (
    <MyContext.Provider value={{"nom":"Prince"}}>
    
 
      <Menu/>
      <Routes>
      <Route  path="/" element={<Navigate to="/docs"/>}/>
      <Route  path="/docs" element={<Docs/>}/>
      <Route  path="/tuto" element={<Tutorial/>}/>
       <Route path="/user/:profileId" element={<Profile/>}/>

    <Route  path="/community" element={<Community/>} />
               {/* <Route component={ErrorPage}/> */}
      </Routes>
     
   
    </MyContext.Provider>
  );
}

export default App;
