import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./style.js";

export default class BookAdd extends React.Component {
  static navigationOption = {
    header: {
      title: "Adicionar Livro"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Insira o ISBN do livro para adicioná-lo.</Text>
        <TextInput
          style={styles.inputPesquisar}
          placeholder="ISBN"
          autoCapitalize="none"
        />
        <TouchableOpacity>
          <Text>Adicionar Livro</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
