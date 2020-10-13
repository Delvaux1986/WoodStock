import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Jumbo from './components/jumbo';
import About from './components/about';
import Team from './components/team';






const App = () => {
  return (
    <div className='App'>
      <Menu/>
      <Jumbo />
      <About />
      <Team/>
    </div>
  );
}

export default App;
