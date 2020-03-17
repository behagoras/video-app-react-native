import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px 0;
`;

const Title = styled.Text`
  color: #4c4c4c;
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 8px;
  font-weight: bold;
`;

const CategoryListLayout = ({title, children}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default CategoryListLayout;
