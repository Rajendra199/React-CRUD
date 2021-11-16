import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import View from './components/users/View';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

      <Routes>
        <Route  path = "/" element = {<Home/>}/>
        <Route  path = "/About" element = {<About/>}/>
        <Route  path = "/Contact" element = {<Contact/>}/>
        <Route  path = "/users/add" element = {<AddUser/>}/>
        <Route  path = "/users/edit/:id" element = {<EditUser/>}/>
        <Route  path = "/users/:id" element = {<View/>}/>
        <Route path = "/*" element = {<PageNotFound />} />
      </Routes>
      </div>
    </Router>
      
    
  );
}

export default App;
