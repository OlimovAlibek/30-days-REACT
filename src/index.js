import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Question from './components/day-1/Question';
import Output from './components/day-2/Output';
import Input from './components/day-2/Input';
import Day_1 from './components/day-1/Day_1';
import Day_2 from './components/day-2/Day_2';
import Day_3 from './components/day-3/Day_3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={</>} /> */}
          <Route path="/day-1" element={<Day_1 />}/>
          <Route path="/day-2" element={<Day_2 />}/>
          <Route path="/day-3" element={<Day_3 />}/>
         
        </Route>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
