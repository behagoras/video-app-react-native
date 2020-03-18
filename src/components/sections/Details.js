import React from 'react';
import {Platform, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import YouTube from './Youtube';

const Cover = styled.Image`
  width: 125px;
  height: 190px;
`;
const Title = styled.Text`
  color: #44546b;
  font-size: 18px;
  font-weight: bold;
`;
const Top = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
  padding: 20px;
  background-color: white;
`;

const Bottom = styled.View`
  padding: 20px;
  /* flex: 1; */
`;
const MainDetails = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;
const Description = styled.Text`
  font-size: 15px;
  line-height: 22.5px;
  color: #4c4c4c;
  margin-left: 10px;
  flex: 1;
`;

// const wb = styled.webv

const Details = props => {
  // console.log('Details props', props);
  return (
    <ScrollView>
      <Top>
        <Title>{props.title}</Title>
      </Top>
      <Bottom>
        <YouTube videoId={props.yt_trailer_code} />
        <MainDetails>
          <Cover source={{uri: props.medium_cover_image}} />
          <Description>{props.description_full}</Description>
        </MainDetails>
      </Bottom>
    </ScrollView>
  );
};

export default Details;
