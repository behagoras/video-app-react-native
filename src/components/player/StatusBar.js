import React from 'react';
import styled from 'styled-components/native';

const StatBar = styled.View`
  background-color: #2a2b2f;
  height: 12px;
  width: 60%;
  padding: 3px;
  margin-top: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 0;
`;
const Rating = styled.View`
  border-radius: 4px;
  width: ${props => props.progress + '%' || '0%'};
  height: 100%;
  font-size: 12px;
  color: white;
  text-align: center;
  background-color: #428bca;
`;
const StatusBar = ({progress = 0}) => {
  return (
    <StatBar>
      <Rating progress={progress} />
    </StatBar>
  );
};

export default StatusBar;
