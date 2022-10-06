import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import GamePage from './Components/GamePage/Game';
import Login from './Components/LoginPage/login';
import Home from './Components/HomePage/Home';
import Levels from './Components/LevelsPage/Levels';


function App() {
  return (
    <div>
   
    <BrowserRouter>
        
        <Routes>
          <Route   path="/Game" element={<GamePage/>}/>
          <Route  path="/Login" element={ <Login/>}/>
          <Route path="/Home" element={ <Home/>}/>
          <Route path="/Levels" element={ <Levels/>}/>
         
        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
