import React from 'react';

const textStyles = {
  color: 'red',
  fontSize: '24px'
}

export const Demo01 = () => (
  <div style={textStyles}>
    <p> TEXT </p>
  </div>
);

// ===========================================

import styled from 'styled-components';

const Text = styled.div`
  color: red;
  font-size: 24px;
`
export const Demo02 = () => (
  <div>
    <Text> TEXT </Text>
  </div>
);
// passed prop 
const Text = styled.div`
  color: red;
  font-size: 24px;
  border: ${ ({isActive}) => isActive ? '1px solid black' :  '1px dotted green'}

`
export const Demo03 = () => (
  <div>
    <Text isActive={true}> TEXT </Text>
    <Text isActive={false}> TEXT </Text>
  </div>
);