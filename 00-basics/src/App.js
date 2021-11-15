import React, { Component } from 'react';

class App extends Component {
  title = 'Hello React';

  render() {
    const title = this.title;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default App;
