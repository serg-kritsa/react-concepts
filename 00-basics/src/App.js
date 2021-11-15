import React, { Component } from 'react';

class App extends Component {
  title = 'Hello React';
  users = [{name: 'user1'}, {name: 'user2'}];

  render() {
    const title = this.title;
    return (
      <div>
        <h1>{title}</h1>
        {this.users.map(u => (
          <p>{u.name}</p>
        ))}
      </div>
    );
  }
}

export default App;

