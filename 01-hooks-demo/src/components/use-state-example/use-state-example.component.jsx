import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  // // array destruction demo
  // const [a, b, c] = [1, 2, 3];
  // console.log(a, b, c);

  const [name, setName] = useState('Yihua');
  const [address, setAddress] = useState('Amsterdam');
  const [value, setValue] = useState(''); // added w/ empty default value

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Andrei')}>Set Name to Andrei</button>
      <button onClick={() => setAddress('Canada')}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Yihua',
      address: 'Canada'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Andrei' })}>
          Set Name to Andrei
        </button>
        <button onClick={this.setState({ address: 'Amsterdam' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
