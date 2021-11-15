import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [{name: 'user1'}, {name: 'user2'}]
    };
  }
  title = 'Hello React';
  users = [];

  render() {
    const title = this.title;
    return (
      <div>
        <h1>{title}</h1>
        {this.state.users.map(u => (
          <p>{u.name}</p>
        ))}
      </div>
    );
  }
}

export default App;

