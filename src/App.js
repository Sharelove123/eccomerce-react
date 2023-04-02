import './App.css';
import HomePage from './components/pages/Home/HomePage';
import About from './components/pages/About/about';
import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


export default class extends Component {
  render() {
    return (
      <>
      <div style={{ background:'#faf4f0' }}>
      <Router>
        <Routes>
          <Route  path='/' element={< HomePage />}></Route>
          <Route  path='/about' element={<About/>}></Route>
          <Route  path='/contact' element={<h1> Contact </h1>}></Route>
        </Routes>
      </Router>
      </div>
      </>
    );
  }
}


