// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import About from './screens/About';
import Contact from './screens/Contact';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Footer from './components/Footer';


function App() {
  return (
     
      <Router>
        <div>
       <NavBar></NavBar>
       <Routes>
        <Route exact path ="/" element={<Home />}></Route>
        <Route exact path = "/about" element={<About />}></Route>
        <Route exact path = "/contact" element={<Contact />}></Route>
       </Routes>
       <Footer/>
       </div>
       </Router>
  );
}

export default App;
