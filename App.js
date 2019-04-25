import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button/button'
import CountButton from './button/CountButton'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="ok" type="danger"/>
        <Button text="More ok"/>
        <Button text="NOT ok" disabled="true"/>
        <hr/>
        <CountButton text="please white..." delay="10" disabled="true" />
      </header>
    </div>
  );
}

export default App;
