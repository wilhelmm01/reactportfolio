import React, { Component } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Contact></Contact>
     
      </div>
    );
  }
}

export default App;