import logo from './logo.svg';
import './App.css';
import Question from './components/day-1/Question';
import { useState } from 'react';
import Input from './components/day-2/Input';
import Output from './components/day-2/Output';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-2xl font-bold text-center text-indigo-700 bg-indigo-100 p-4 rounded-md shadow-md">
  30 days react!
</p>
        <a
          className="App-link"
          href="/"
          target="_blank"
        >
          JUST ALI
        </a>

      </header>
    </div>
  );
}

export default App;
