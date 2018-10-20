import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  nextQuoteClickHandler() {
    console.log('hi');
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler} />
      </div>
    );
  }
}

export default App;
