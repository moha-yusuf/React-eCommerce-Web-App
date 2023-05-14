import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "./common/cartIcon";

class NavBar extends Component {
  state = {
    isOpen: false,
    screenSize: 0
  };

  componentDidMount() {
    this.setState({ screenSize: window.innerWidth });
    window.addEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ screenSize: window.innerWidth });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleTogglerClick = () => {
    if (this.state.screenSize <= 768) {
      this.setState({ isOpen: !this.state.isOpen });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    const { user } = this.props;
    const { isOpen, screenSize } = this.state;
    const displayNavLinks = screenSize > 768 || (screenSize <= 768 && isOpen);
  
    return (
      <nav className="navbar navbar-expand-md navbar-light p-3">
        <Link className="navbar-brand mb-0 h1" to="/">
          SHOP-EASE
        </Link>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          onClick={this.handleTogglerClick}
          aria-expanded={isOpen || screenSize > 768}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {displayNavLinks && (
          <div className={`navbar-collapse`}>
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            {user && (
              <ul className="navbar-nav ml-auto text-center">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    <CartIcon/>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    {user.name}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </ul>
            )}
            {!user && (
              <ul className="navbar-nav ml-auto text-center">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        )}
      </nav>
    );
  }  
};

export default NavBar;