import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./style.js";

export default class DetailsBook extends React.Component {
  static navigationOption = {
    title: "Detalhes do Livro"
  };

  render() {
    const titleBook = this.props.navigation.getParam("title", "NO-TITLE");

    return (
      <View style={styles.container}>
        <Text>Titulo do livro: {JSON.stringify(titleBook)}</Text>
      </View>
    );
  }
}
