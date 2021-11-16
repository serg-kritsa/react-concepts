import React from 'react';

class SetStateDemo extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  onClickHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const {counter} = this.state;

    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={this.onClickHandler} />
      </div>
    );
  }
}

export default SetStateDemo;