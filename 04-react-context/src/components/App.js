import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
          />
          <i
            className="flag nl"
          />
        </div>
      </div>
    );
  }
}

export default App;
