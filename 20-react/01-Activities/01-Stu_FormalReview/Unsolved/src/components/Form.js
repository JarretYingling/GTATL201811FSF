import React, { Component } from "react";
// controlled inputs - React controls and updates
// uncontrolled inputs - browser controls and updates


class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  
  handleChange = (event) => {
    console.log("entry detected");
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`
      Username: ${this.state.username}
      Password: ${this.state.password}
    `);
    this.setState({
      username: "",
      password: ""
    },function(){
      // optional callback executes AFTER state is updated
    };
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button onClick={this.handleSubmit} >Submit</button>
      </form>
    );
  }
}

export default Form;
