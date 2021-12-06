import {Link, Routes, Route, NavLink} from 'react-router-dom'
// import {Home} from '../src/pages/home';
// import {Register} from '../src/pages/register';
// import {Login} from '../src/pages/login';
// import {Privat} from '../src/routes/Privat';
// import {Publik} from '../src/routes/Publick'
import {useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';


import React from 'react'
// import {currentThunk, logOutThunk} from './redux/asynkThink'
import  Navigation from '../src/component/navigation/Navigation'


function App() {
  return (
    <div className="App">
    <header>
      <Navigation />
    </header>
    </div>
  );
}

export default App;
