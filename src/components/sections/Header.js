import React from 'react';
import styled from 'styled-components/native';
import {View, SafeAreaView, Image} from 'react-native';

const Logo = styled.Image`
  width: 80px;
  height: 26px;
  resize-mode: contain; /* equivalente a background size */
`;

const Container = styled.View`
  padding: 10px 20px;
  flex-direction: row;
`;

const Right = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Header = ({children}) => {
  return (
    <SafeAreaView>
      <Container>
        <Logo source={require('../../assets/logo.png')} />
        <Right>{children}</Right>
      </Container>
    </SafeAreaView>
  );
};

export default Header;

// const styles = StyleSheet.create({});
