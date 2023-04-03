import React, { useState } from 'react';
import '../assets/css/App.css';
import Header from '../components/Header';
import MapsWithPackage from './Maps';
import History from './History';

function App() {
  const [displayCase, setDisplayCase] = useState(1)

  const selectFunction = (select) => {
    setDisplayCase(select);
  }
  
  const _renderContent = () => {
    let display
    switch (displayCase) {
      case 1:
        display = <MapsWithPackage />
        break;
      case 2:
        display = <History />
      default:
        break;
    }
    return display;
  }

  return (
    <div className="App">
      <Header selectParentFunction={selectFunction} />
      
      {_renderContent()}
    </div>
  );
}

export default App;
