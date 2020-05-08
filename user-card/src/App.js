import React from "react";
import "./App.css";
import UserCard from "./Components/UserCard";
import SearchForm from "./Components/SearchForm";
import axios from "axios";
const API_URL = "https://api.github.com/users/chad-scanlon";

class App extends React.Component {
  constructor() {
    super();
    this.state = { users: [], followers: [], searchedUsers: [] };
  }

  componentDidMount() {
    console.log("componentDidMount() executed");
    const url = `${API_URL}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ users: data });
        console.log(this.state.users);
      });
    axios
      .get("https://api.github.com/users/chad-scanlon/followers")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ followers: data });
        console.log(this.state.followers);
      });
  }
  componentDidUpdate() {
    axios
      .get("https://api.github.com/users/`${searchedUser}`")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ searchedUsers: data });
        console.log(this.state.searchedUsers);
      });
    console.log("componentDidUpdate() executed");
  }
  render() {
    return (
      <div className="App">
        <UserCard
          key="1"
          users={this.state.users}
          followers={this.state.followers}
        />
        {/* <SearchForm searchedUsers={this.state.searchedUsers} /> */}
      </div>
    );
  }
}

export default App;
