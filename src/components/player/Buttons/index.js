import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

type Props = {};

const style = StyleSheet.create({
  icon: {
    color: 'blue',
  },
});

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <FontAwesomeIcon icon={faCoffee} style={style.icon} />
      </View>
    );
  }
}
