import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='login' element={<Login/>} />
     <Route path='signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
