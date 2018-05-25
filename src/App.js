import React, { Component } from 'react';
import './sass/main.scss';
import Bookmark from './img/SVG/bookmark.svg';
import Chat from './img/SVG/chat.svg';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <img src="img/logo.png" alt="trillo logo" className="logo" />
          <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search Hotels" />
            <button className="search__button">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="search__icon">
                <title>magnifying-glass</title>
                <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
              </svg>
            </button>
          </form>
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <svg version="1.1" className="user-nav__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>bookmark</title>
                <path d="M14 2v17l-4-4-4 4v-17c0-0.553 0.585-1.020 1-1h6c0.689-0.020 1 0.447 1 1z"></path>
              </svg>
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <svg version="1.1" className="user-nav__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>chat</title>
                <path d="M5.8 12.2v-6.2h-3.8c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h1v3l3-3h5c1.1 0 2-0.9 2-2v-1.82c-0.064 0.014-0.132 0.021-0.2 0.021l-7-0.001zM18 1h-9c-1.1 0-2 0.9-2 2v8h7l3 3v-3h1c1.1 0 2-0.899 2-2v-6c0-1.1-0.9-2-2-2z"></path>
              </svg>
              <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
              <img src='img/profile.jpeg' alt="" className="user-nav__user-photo" />
              <p className="user-nav__user-name">Emmanuel</p>
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
