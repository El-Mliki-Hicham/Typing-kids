import logo from './logo.svg';
import './App.css';
import Login from './login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/home';


function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
        
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/" element={ <Login/>}/>
         
        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
