import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Jumbo from './components/jumbo';
import About from './components/about';






const App = () => {
  return (
    <div className='App'>
      <Menu/>
      <Jumbo />
      <About />
    </div>
  );
}

export default App;
