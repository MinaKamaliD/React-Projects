import React from "react";
import { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="nav-background">
          <div className="nav-container">
            <header className="nav-header">
              <img src="./logo2.jpg" alt="" />
            </header>
            <nav>
              <ul className="nav-ul">
                <li>
                  <a href="#" className="nav-links active-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-links">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-links">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-links">
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
export default NavBar;
