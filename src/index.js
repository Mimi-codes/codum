import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from './components/Pages/Popular';
import All from './components/Pages/All';
import Sofa from './components/Pages/Sofa';
import Lamps from './components/Pages/Lamps';
import Chair from './components/Pages/Chair';
import LogIn from './components/NavBar/LogIn';
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/Pages/SignUp';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="popular" element={<Popular />} />
      <Route path="all" element={<All />} />
      <Route path="sofa" element={<Sofa />} />
      <Route path="lamp" element={<Lamps />} />
      <Route path="chair" element={<Chair />} />
      <Route path="login" element={<LogIn />} />
      <Route path="/" element={<NavBar />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();