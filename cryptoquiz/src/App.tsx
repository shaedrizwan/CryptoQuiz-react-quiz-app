import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { Header } from './Components';
import './App.css';
import { Home, Login, Quiz, Result, Rules, Signup } from './Pages';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/quiz/:id" element={<Quiz/>}/>
      <Route path="/rules/:id" element={<Rules/>}/>
      <Route path="/result/:id" element={<Result/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;
