import React from 'react';

class SetStateDemo extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  onClickHandler = () => {
    //              executed second because of async
    //                                                                            executed first
    //            better way if previous state is needed because of inner optimization
    this.setState((prevState, prevProp) => ({ counter: prevState.counter + this.props.increment }), console.log(this.state.counter));
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