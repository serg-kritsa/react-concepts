import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

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
        <CardList />
      </div>
    );
  }
}

export default App;
