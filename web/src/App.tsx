import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.svg')} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span className="App-link">Learn React</span>
      </header>
    </div>
  );
};

export default App;
