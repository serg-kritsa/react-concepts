import React from 'react';
import GoogleAuth from '../auth/Google';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
        Streamy
      </div>
      <div className="right menu">
        <div className="item">
          All Streams
        </div>
      </div>
    </div>
  );
};

export default Header;
