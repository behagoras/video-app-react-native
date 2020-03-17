import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.ImageBackground`
  width: 250px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
const Genre = styled.Text`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.75);
`;

const Category = ({genres, background_image}) => {
  return (
    <Wrapper
      source={{
        uri: background_image,
      }}>
      <Genre>{genres[0]}</Genre>
    </Wrapper>
  );
};

export default Category;
