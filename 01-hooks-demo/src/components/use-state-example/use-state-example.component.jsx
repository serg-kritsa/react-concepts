import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  // // array destruction demo
  // const [a, b, c] = [1, 2, 3];
  // console.log(a, b, c);

  const [name, setName] = useState('Yihua');

  return (
    <Card>
      <h1> {name} </h1>
      <button onClick={() => setName('Andrei')}>Set Name to Andrei</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Yihua',
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Andrei' })}>
          Set Name to Andrei
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
