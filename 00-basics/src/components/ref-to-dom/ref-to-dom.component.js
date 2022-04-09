import React from 'react';

class RefToDom extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef(); // 1 - create reference
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight; // 3 - getting prop of dom element when needed

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    return (
      <div>
        <img ref={this.imageRef /* 2 - binding */ } /> 
      </div>
    );
  }
}

export default RefToDom;
