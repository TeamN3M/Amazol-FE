/* eslint-disable react/react-in-jsx-scope */
import {BrowserRouter as Router,Routes as Switch,Route} from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App header">
        <NavBar />
        <header className='App-Header'>
           <Router>
               <Switch>
                   <Route exact  path="/" element={<Home />}  />
                   <Route  path="/Login" element={ <Login />} /> 
                   <Route  path="/Register" element={<Register />} />    
        
               </Switch>
           </Router>
          

        </header>
        <Footer />
    </div>
    
  );
}

export default App;
