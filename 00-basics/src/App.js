import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  title = 'Monsters Rolodex';
  users = [];

  render() {
    const title = this.title;
    return (
      <div>
        <h1>{title}</h1>
        {this.state.monsters.map(monster => (
          <p>{monster.name}</p>
        ))}
      </div>
    );
  }
}

export default App;

