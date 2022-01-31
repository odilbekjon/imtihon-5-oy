import './App.css';
import Home from "./Components/Home/Home";
import Users from './Components/Users/Users';
import {Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {
const  [refech , setRefech] = useState(false)

  return (
    <>
        <Routes>
          <Route path="/" element={<Home refech={refech}  setRefetch={setRefech}/>} />
          <Route path="/users" element={<Users /> } />
        </Routes>
    </>
  );
}

export default App;
