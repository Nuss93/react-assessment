import React, { useState } from 'react';
// import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import Header from '../components/Header';
import MapsWithPackage from './MapsWithPackage';
import MapsWithoutPackage from './MapsWithoutPackage';
import History from './History';

function App() {
  const [displayCase, setDisplayCase] = useState(1)

  const selectFunction = (select) => {
    console.log('returned', select);
    setDisplayCase(select);
  }
  
  const _renderContent = () => {
    let display
    switch (displayCase) {
      case 1:
        display = <MapsWithoutPackage />
        break;
      case 2:
        display = <MapsWithPackage />
        break;
      case 3:
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
