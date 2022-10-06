import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import GamePage from './Components/GamePage/Game';
import Login from './Components/LoginPage/login';


function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
        
        <Routes>
          <Route exact path="/Game" element={<GamePage/>}/>
          <Route exact path="/Login" element={ <Login/>}/>
         
        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
