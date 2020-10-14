import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Jumbo from './components/jumbo';
import About from './components/about';
import Team from './components/team';
import Contact from './components/contact';
import Footer from './components/footer';






const App = () => {
  return (
    <div className='App'>
      <Menu/>
      <Jumbo />
      <About />
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
