import React from 'react';
import {BrowserRouter as  Router, Routes, Route} from 'react-router';
import './App.css'
import Home from './pages/Home';
import Library from './pages/Library';
import Details from './pages/Details';

function App() {
  return (
    <Router basename='/'>
      <AppContent />
    </Router>
  );
}

function AppContent(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
