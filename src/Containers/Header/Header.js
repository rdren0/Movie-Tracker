import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Images/movie-tracker-logo.png";
import "./Header.scss";
import { connect } from "react-redux";
import { userLogin, isLoggedIn } from "../../Actions";

export class Header extends Component {
  handleLogout = () => {
    this.props.isLoggedIn(false);
    this.props.addCurrentUser({});
  };

  render() {
    let whatToRender;
    if (this.props.isLoggedIn) {
      whatToRender = (
        <nav>
          <NavLink
            exact={true}
            to="/"
            activeClassName="current-nav"
            className="nav-button"
            onClick={() => this.props.browseAll()}
          >
            <h4>Browse</h4>
          </NavLink>
          <NavLink
            activeClassName="current-nav"
            to="/Favorites"
            className="nav-button"
          >
            <h4>Favorites</h4>
          </NavLink>
          <NavLink
            activeClassName="current-nav"
            onClick={this.handleLogout}
            to="/Login"
            className="nav-button log-out"
          >
            <h4>Log Out</h4>
          </NavLink>
        </nav>
      );
    } else {
      whatToRender = (
        <nav>
          <NavLink
            exact={true}
            to="/"
            activeClassName="current-nav"
            className="nav-button"
            onClick={this.props.browseAll}
          >
            <h4>Browse</h4>
          </NavLink>
          <NavLink
            activeClassName="current-nav"
            to="/Login"
            className="nav-button"
          >
            <h4>Log In</h4>
          </NavLink>
          <NavLink
            activeClassName="current-nav"
            to="/SignUp"
            className="nav-button"
          >
            <h4>Sign Up</h4>
          </NavLink>
        </nav>
      );
    }
    return (
      <div className="header">
        <Link to="/" className="logo">
          <img src={Logo} alt="Movie Tracker Logo" />
        </Link>
        {whatToRender}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export const mapDispatchToProps = dispatch => ({
  addCurrentUser: user => dispatch(userLogin(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
