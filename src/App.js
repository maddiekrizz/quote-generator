import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <div className='div1'>
      <Link className='home' to='/home'>Home</Link>
      <Link className='about' to='/about'>About</Link>
      <Link className='con' to='/contact'>Contact</Link>
      <a  className='anc' href='#c'>Info</a>
      </div>

      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>
    
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
