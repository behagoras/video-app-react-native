import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px;
`;
const Text = styled.Text`
  font-size: 16px;
`;

const Empty = ({text, children}) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Empty;
