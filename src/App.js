import React, { Component } from 'react';
import './sass/main.scss'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          Header Part
        </header>
        <div className="content">
          <nav className="sidebar">
            Navigation
            </nav>
          <main className="hotel-view">
            Hotel View
            </main>
        </div>
      </div>
    );
  }
}

export default App;
