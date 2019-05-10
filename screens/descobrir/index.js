import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default class Descobrir extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tela}>Screen Descobrir</Text>
      </View>
    );
  }
}
