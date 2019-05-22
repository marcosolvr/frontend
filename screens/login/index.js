import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WebBrowser } from "expo";

import styles from "./style";
import { colors } from "../../constants/Index";
import api from "../../services/api";

export default class App extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignInPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState(
        { error: "Preencha usuário e senha para continuar!" },
        () => false
      );
    } else {
      try {
        const response = await api.get(`/auth/login`, {
          params: {
            email: this.state.email,
            password: this.state.password
          }
        });

        const { token } = response.data;

        await AsyncStorage.setItem("@Biblib:token", token);

        this.props.navigation.navigate("Main", { token: token });
      } catch (err) {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais!"
        });
      }
    }
  };

  _handlePressButtonSocial = async () => {
    try {
      let response = await WebBrowser.openBrowserAsync(
        "https://biblibapi.herokuapp.com/auth/google"
      );

      const { token } = response.data;

      await AsyncStorage.setItem("@Biblib:token", token);

      this.props.navigation.navigate("Main", { token: token });
    } catch (err) {
      this.setState({
        error: "Houve um problema com o login"
      });
    }
  };

  handlerChangeEmail = text => {
    this.setState({ email: text });
  };

  handlerChangePassword = text => {
    this.setState({ password: text });
  };

  _cadastrar = () => {
    this.props.navigation.navigate("Cadastrar");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />

        <TextInput
          style={styles.input}
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handlerChangeEmail}
          autoCapitalize="none"
          autoCorret={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlerChangePassword}
          autoCapitalize="none"
          autoCorret={false}
          secureTextEntry
        />

        <Text style={styles.errorMessage}>{this.state.error}</Text>

        <TouchableOpacity
          onPress={this.handleSignInPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.alternativasTitle}>OU</Text>

        <View style={styles.socialLogin}>
          <TouchableOpacity onPress={this._handlePressButtonSocial}>
            <Ionicons name="logo-google" size={50} color={colors.secondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.criarContaText}>
          <Text>Não possui uma conta?</Text>
          <TouchableOpacity onPress={this._cadastrar}>
            <Text style={styles.criarContaButton}>Criar conta.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
