import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/Aboutus';
import Gallery from './components/Gallery';
import Discover from './components/Discover';
import Services from './components/Services';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';



function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Discover/>} />
          <Route path='/Services' element={<Services/>}/>
          <Route path='/AboutUs'element={<About/>}/>
          <Route path='/Contact'element={<Contact/>}/>
          <Route path='/Login'element={<Login/>}/>
          <Route path='/Gallery'element={<Gallery/>}/>
          <Route path='/Register'element={<Register/>}/>
          
          
        </Routes>
     
    </Router>
    
  );
}

export default App;
