import React from "react";
import "./App.css";
import ViewUsers from "./Components/Users";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", users: [] };
  }
  handleNamechange = (e) => {
    this.setState = {
      email: e.target.value,
    };
    console.log(this.state.name);
  };
  handleEmailchange = (e) => {
    this.setState = {
      password: e.target.value,
    };
    console.log(this.state.email);
  };
  handleGenderchange = (e) => {
    this.setState = {
      Gender: e.target.value,
    };
    console.log(this.state.email);
  };
  handlePasswordchange = (e) => {
    this.setState = {
      password: e.target.value,
    };
    console.log(this.state.email);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // let Users = { name: this.state.name, email: this.state.email };
    this.setState({ users: [...this.state.users, ViewUsers] });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="icon-bar">
        <input
          name="text"
          type="name"
          placeholder="Contact/name"
          // onChange={(e) => this.handleEmailchange(e)}
          // value={this.state.name}
          className="icon2"
        />
        <br />
        <input
          name="email"
          type="email"
          placeholder="email/phone"
          // onChange={(e) => this.handleEmailchange(e)}
          // value={this.state.email}
          className="ease"
        />
        <br />
        <input
          name="number"
          type="number"
          placeholder="dd/mm/yy"
          // onChange={(e) => this.handleEmailchange(e)}
          // value={this.state.email}
          className="ease"
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          // onChange={(e) => this.handleEmailchange(e)}
          // value={this.state.email}
          className="ease"
        />
        <br />
        <input
          name="text"
          type="text"
          placeholder="Gender"
          // onChange={(e) => this.handleEmailchange(e)}
          // value={this.state.email}
          className="ease"
        />
        <br />
        <input type="submit" className="access" />
      </form>
    );
  }
}

export default App;
