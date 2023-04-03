import React, { useState } from 'react';
// import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import Header from '../components/Header';
import Map from './Map';
import History from './History';

function App() {
  const [displayCase, setDisplayCase] = useState(1)

  const selectFunction = () => {

  }
  
  const _renderContent = () => {
    let display = displayCase === 1 ? <Map /> : <History />
    return display;
  }

  return (
    <div className="App">
      <Header />
      {_renderContent()}
    </div>
  );
}

export default App;
