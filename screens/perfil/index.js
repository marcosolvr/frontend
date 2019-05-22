import React from "react";
import { View, Text, AsyncStorage, TouchableOpacity } from "react-native";

import api from "../../services/api";
import styles from "./style";

export default class Perfil extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    data: {}
  };

  async componentDidMount() {
    try {
      const response = await api.get(`/users`);
      const dados = response.data;
      this.setState({ data: dados });
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  logoutApp = async () => {
    await AsyncStorage.removeItem("@Biblib:token");
    this.props.navigation.navigate("AuthLoading");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tela}>{this.state.data.username}</Text>
        <Text>Descrição do usuario</Text>
        <Text>15 livros lidos</Text>
        <TouchableOpacity onPress={this.logoutApp}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
