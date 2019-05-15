import React, { Component } from "react";
import { fetchUserData } from "../../APICalls/APICalls";
import { userLogin, setFavorites, isLoggedIn } from "../../Actions";
import "./Login.scss";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.type]: e.target.value.toLowerCase()
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users";
    const userInput = this.state;
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetchUserData(url, userOptionObject)
      .then(results => this.props.addCurrentUser(results.data))
      .then(results => this.getFavoriteMovies(results.user.id))
      .catch(error => alert("Email or Password is incorrect"));
  };

  getFavoriteMovies = id => {
    const url = `http://localhost:3000/api/users/${id}/favorites`;
    fetchUserData(url)
      .then(response => this.props.setFavorites(response.data))
      .then(response => this.props.isLoggedIn(true))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="btn-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            className="email"
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
            value={this.state.email}
          />
          <input
            className="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            value={this.state.password}
          />
          <button> Sign in </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  addCurrentUser: user => dispatch(userLogin(user)),
  setFavorites: favorites => dispatch(setFavorites(favorites)),
  isLoggedIn: bool => dispatch(isLoggedIn(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
