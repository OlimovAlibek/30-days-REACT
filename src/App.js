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
        <p>
          React 30 day Challenge
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
