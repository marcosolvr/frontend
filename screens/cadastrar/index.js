import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './style';

export default class App extends React.Component {
  state = {
    username: 'marcos',
    email: 'marcos@abreu.com',
    senha: 'nvkdlsnv',
    senhaDois: 'nvkdjl',
  };

  handlerChangeEmail = (text) => {
    this.setState({ email: text });
  }

  handlerChangeSenha = (text) => {
    this.setState({ senha: text });
  }

  handlerChangeSenhaDois = (text) => {
    this.setState({ senhaDois: text });
  }

  handlerChangeUsername = (text) => {
    this.setState({ username: text });
  }

  _login = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={this.state.username}
          onChangeText={this.handlerChangeUsername}
          autoCapitalize="none"
          autoCorrect={false}
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
          value={this.state.senha}
          onChangeText={this.handlerChangeSenha}
          autoCapitalize="none"
          autoCorret={false}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Repita sua senha"
          value={this.state.senhaDois}
          onChangeText={this.handlerChangeSenhaDois}
          autocapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        <Text style={styles.errorMessage}>Ocorreu algum problema no cadastro.</Text>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>CRIAR CONTA</Text>
        </TouchableOpacity>

        <View style={styles.fazerLoginText}>
          <Text>Já possui uma conta?</Text>
          <TouchableOpacity
            onPress={this._login}
          >
            <Text style={styles.fazerLoginButton}>Fazer login.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
