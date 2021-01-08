import './App.css';
import Header from './components/header/header';
import Search from './components/search/search';
import UserCards from './components/user-cards/user-cards';
import Footer from './components/footer/footer';
import Posts from './components/posts/posts';
import React from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  state = {
    users: [],
    allUsers: [],
    posts: [],
    page: 'Users'
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        let newState = this.state;
        newState.users = users;
        newState.allUsers = users;
        this.setState(newState);
      });

    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        let newState = this.state;
        newState.posts = posts;
        this.setState(newState);
      });
  }

  handleSearch = (keyword) => {
    if (keyword != "") {
      let users = this.state.allUsers;
      users = users.filter(user => user.name.toString().toLowerCase().includes(keyword.toLowerCase()));
      let newState = this.state;
      newState.users = users;
      this.setState(newState);
    } else {
      let newState = this.state;
      newState.users = this.state.allUsers;
      this.setState(newState);
    }

  }

  handlePageSwitch = (page) => {
    let newState = this.state;
    newState.page = page;
    this.setState(newState);
  }

  render() {
    return (
      <Router>
        <Header pageName={this.state.page} />
        <Search pageName={this.state.page} onSearch={this.handleSearch} />
        <Switch>
          <Route path="/posts/:userID">
            <Posts onLoad={this.handlePageSwitch} posts={this.state.posts} />
          </Route>
          <Route path="/">
            <UserCards onLoad={this.handlePageSwitch} users={this.state.users} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
