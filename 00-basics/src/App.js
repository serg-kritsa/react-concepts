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


  render() {
    const { monsters } = this.state;

    return (
      <div>
      <h1>Monsters Rolodex</h1>
      {monsters.map(monster => (
        <p>{monster.name}</p>
      ))}
      </div>
    );
  }
}

export default App;
