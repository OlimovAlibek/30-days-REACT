import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import { useState } from 'react';

function App() {

  const [state, setState] = useState({
    question: "Who is ALI",
    answer: "ALI is a full-stack developer"
  });

  const eventHandler = (event) => {
    setState({question: state.answer, answer: state.question})
  }

  return (
    <div className="App">
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

        <Question question={state.question} click={eventHandler}/>
      </header>
    </div>
  );
}

export default App;
