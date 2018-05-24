import React, { Component } from 'react';
import './sass/main.scss';
import Magnifying from './img/SVG/magnifying-glass.svg';
import Bookmark from './img/SVG/bookmark.svg';
import Chat from './img/SVG/chat.svg';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <img src="img/logo.png" alt="trillo logo" className="logo" placeholder="Search Hotels" />
          <form action="#" className="search">
            <input type="text" className="search__input" />
            <button className="search__button">
              {/* <svg className="search__icon">
                <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use>
              </svg> */}
              <img src={Magnifying} className="search__icon" />
            </button>
          </form>
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <img src={Bookmark} alt="" className="user-nav__icon" />
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <img src={Chat} alt="" className="user-nav__icon" />
              <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
              <img src='img/profile.jpeg' alt="" className="user-nav__user-photo" />
              <span className="user-nav__user-name">Emmanuel</span>
            </div>
          </nav>
        </header>
        <div className="content">
          <nav className="sidebar">
            Navigation
            </nav>
          <main className="hotel-view">
            Hotel View
            </main>
        </div>
      </div >
    );
  }
}

export default App;
