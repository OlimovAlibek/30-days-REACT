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
import Day_4 from './components/day-4/Day_4';
import Day_5 from './components/day-5/Day_5';
import Day_6 from './components/day-6/Day_6';
import Day_7 from './components/day-7/Day_7';
import Day_8 from './components/day-8/Day_8';
import Day_9 from './components/day-9/Day_9';
import Day_10 from './components/day-10/Day_10';
import Day_11 from './components/day-11/Day_11';
import Day_12 from './components/day-12/Day_12';
import Day_13 from './components/day-13/Day_13';
import Day_14 from './components/day-14/Day_14';
import Day_15 from './components/day-15/Day_15';
import Day_16 from './components/day-16/Day_16';
import Day_17 from './components/day-17/Day_17';
import Day_18 from './components/day-18/Day_18';
import Day_19 from './components/day-19/Day_19';
import Day_20 from './components/day-20/Day_20';
import Day_21 from './components/day-21/Day_21';
import Day_22 from './components/day-22/Day_22';
import Day_23 from './components/day-23/Day_23';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={</>} /> */}
          <Route path="/day-1" element={<Day_1 />}/>
          <Route path="/day-2" element={<Day_2 />}/>
          <Route path="/day-3" element={<Day_3 />}/>
          <Route path="/day-4" element={<Day_4 />}/>
          <Route path="/day-5" element={<Day_5 />}/>
          <Route path="/day-6" element={<Day_6 />}/>
          <Route path="/day-7" element={<Day_7/>}/>
          <Route path="/day-8" element={<Day_8/>}/>
          <Route path="/day-9" element={<Day_9/>}/>
          <Route path="/day-10" element={<Day_10/>}/>
          <Route path="/day-11" element={<Day_11/>}/>
          <Route path="/day-12" element={<Day_12/>}/>
          <Route path="/day-13" element={<Day_13/>}/>
          <Route path="/day-14" element={<Day_14/>}/>
          <Route path="/day-15" element={<Day_15/>}/>
          <Route path="/day-16" element={<Day_16/>}/>
          <Route path="/day-17" element={<Day_17/>}/>
          <Route path="/day-18" element={<Day_18/>}/>
          <Route path="/day-19" element={<Day_19/>}/>
          <Route path="/day-20" element={<Day_20/>}/>
          <Route path="/day-21" element={<Day_21/>}/>
          <Route path="/day-22" element={<Day_22/>}/>
          <Route path="/day-23" element={<Day_23/>}/>
         
        </Route>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
