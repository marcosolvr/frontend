import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './style';
import api from '../../services/api';

export default class App extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    error: '',
  };

  handlerSignUpPress = async () => {
    if (this.state.username.length === 0 || this.state.email.length === 0 || this.state.password.length === 0 || this.state.password2.length === 0) {
      this.setState({ error: 'Todos os campos precisam ser preenchidos!' }, () => false);
    } else {
      try {
        const response = await api.post(`/auth/register`, {
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2,
          username: this.state.username
        });

        this.props.navigation.navigate('Login');

      } catch(err) {
        this.setState({ error: 'Houve um problema com o cadastro, verifique suas credenciais!' });
      }
    }
  }

  handlerChangeEmail = (text) => {
    this.setState({ email: text });
  }

  handlerChangePassword = (text) => {
    this.setState({ password: text });
  }

  handlerChangePassword2 = (text) => {
    this.setState({ password2: text });
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
          value={this.state.password}
          onChangeText={this.handlerChangePassword}
          autoCapitalize="none"
          autoCorret={false}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Repita sua senha"
          value={this.state.password2}
          onChangeText={this.handlerChangePassword2}
          autocapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        <Text style={styles.errorMessage}>{this.state.error}</Text>

        <TouchableOpacity 
          onPress={this.handlerSignUpPress} 
          style={styles.button}
        >
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
