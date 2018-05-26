import React, { Component } from 'react';
import './sass/main.scss';

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
            <ul className="side-nav">
              <li className="side-nav__item side-nav__item--active">
                <a href="#" className="side-nav__link">
                  <svg version="1.1" className="side-nav__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>home</title>
                    <path d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"></path>
                  </svg>
                  <span>Hotel</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg version="1.1" className="side-nav__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>aircraft-take-off</title>
                    <path d="M19.87 6.453c0.119 0.257 0.127 1.29-4.884 3.642l-4.913 2.306c-1.71 0.803-4.191 1.859-5.285 2.151-0.766 0.204-1.497-0.316-1.497-0.316s-2.206-1.975-2.792-2.419c-0.585-0.444-0.535-0.67 0.215-0.91 0.467-0.149 3.13 0.493 4.265 0.78 1.339-0.8 2.562-1.486 3.141-1.798-1.396-1.033-4.008-2.962-4.841-3.55-0.799-0.565 0.010-0.768 0.010-0.768 0.368-0.099 1.162-0.228 1.562-0.144 2.721 0.569 7.263 2.071 7.611 2.186 0.832-0.436 2.128-1.092 2.922-1.465 2.075-0.974 4.327-0.037 4.486 0.305z"></path>
                  </svg>
                  <span>Flight</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg version="1.1" className="side-nav__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>key</title>
                    <path d="M17.691 4.725c-0.503-2.977-3.22-4.967-6.069-4.441s-5.256 2.816-4.753 5.795c0.107 0.641 0.408 1.644 0.763 2.365l-5.175 7.723c-0.191 0.285-0.299 0.799-0.242 1.141l0.333 1.971c0.058 0.342 0.372 0.572 0.7 0.514l1.516-0.281c0.328-0.059 0.744-0.348 0.924-0.639l2.047-3.311 0.018-0.022 1.386-0.256 2.39-3.879c0.785 0.139 1.912 0.092 2.578-0.031 2.848-0.526 4.087-3.67 3.584-6.649zM15.166 6.252c-0.784 1.17-1.584 0.346-2.703-0.475-1.119-0.818-2.135-1.322-1.352-2.492s2.326-1.455 3.447-0.635c1.12 0.819 1.391 2.432 0.608 3.602z"></path>
                  </svg>
                  <span>Car Rentals</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg version="1.1" className="side-nav__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>map</title>
                    <path d="M19.447 3.718l-6-3c-0.281-0.141-0.613-0.141-0.895 0l-5.63 2.815-5.606-1.869c-0.306-0.102-0.64-0.051-0.901 0.138s-0.415 0.49-0.415 0.811v13.001c0 0.379 0.214 0.725 0.553 0.894l6 3c0.141 0.070 0.294 0.106 0.447 0.106s0.307-0.035 0.447-0.106l5.63-2.814 5.606 1.869c0.305 0.1 0.64 0.049 0.901-0.139s0.415-0.49 0.415-0.81v-13.002c0.001-0.379-0.213-0.725-0.552-0.894zM8 5.231l4-2v11.763l-4 2v-11.763zM2 4l4 1.333v11.661l-4-2v-10.994zM18 16.227l-4-1.334v-11.662l4 2v10.996z"></path>
                  </svg>
                  <span>Tours</span>
                </a>
              </li>
            </ul>
            <div className="legal">
              &copy; 2017 by Emmanuel. All rights reserved.
            </div>
          </nav>
          <main className="hotel-view">
            <div className="gallery">
              <figure className="gallery__item">
                <img src="img/hotel-1.jpg" alt="photo of hotel 1" className="gallery__photo" />
              </figure>
              <figure className="gallery__item">
                <img src="img/hotel-2.jpg" alt="photo of hotel 2" className="gallery__photo" />
              </figure>
              <figure className="gallery__item">
                <img src="img/hotel-3.jpg" alt="photo of hotel 3" className="gallery__photo" />
              </figure>
            </div>
            <div className="overview">
              <h1 className="overview__heading">
                Hotel las Palmas
              </h1>
              <div className="overview__stars">
                <svg version="1.1" className="overview__icon-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <title>star</title>
                  <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                </svg>
                <svg version="1.1" className="overview__icon-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <title>star</title>
                  <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                </svg>
                <svg version="1.1" className="overview__icon-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <title>star</title>
                  <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                </svg>
                <svg version="1.1" className="overview__icon-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <title>star</title>
                  <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                </svg>
                <svg version="1.1" className="overview__icon-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <title>star</title>
                  <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                </svg>
              </div>
              <div className="overview__locations">
                <svg version="1.1" className="overview__icon-location" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <title>location-pin</title>
                  <path d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"></path>
                </svg>
                <button className="btn-inline">Albufeira, Portugal</button>
              </div>
              <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
              </div>
            </div>
            <div className="detail">
              <div className="description">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
                <p className="paragraph">
                  Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>
                <ul className="list">
                  <li className="list__item">Close to the beach</li>
                  <li className="list__item">Breakfast Included</li>
                  <li className="list__item">Free airport shuttle</li>
                  <li className="list__item">Free Wifi in all rooms</li>
                  <li className="list__item">Air conditioning and heating</li>
                  <li className="list__item">Pets allowed</li>
                  <li className="list__item">We speak all languages</li>
                  <li className="list__item">Perfect for families</li>
                </ul>
                <div className="recommend">
                  <p className="recommend__count">
                    Lucy and 3 other friends recommend this hotel.
                  </p>
                  <div className="recommend__friends">
                    <img src="img/user-3.jpg" alt="Friend 1" className="recommend__photo" />
                    <img src="img/user-4.jpg" alt="Friend 2" className="recommend__photo" />
                    <img src="img/user-5.jpg" alt="Friend 3" className="recommend__photo" />
                    <img src="img/user-6.jpg" alt="Friend 4" className="recommend__photo" />
                  </div>
                </div>
              </div>
              <div className="user-reviews">
                Reviews
              </div>
            </div>
          </main>
        </div>
      </div >
    );
  }
}

export default App;
