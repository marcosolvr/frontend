import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

import styles from './style';

export default class App extends React.Component {
  state = {
    email: 'marcos@abreu.com',
    senha: 'nvkdlsnv',
  };

  _handlePressButtonSocial = async () => {
    let result = await WebBrowser.openBrowserAsync('https://expo.io');
  }

  handlerChangeEmail = (text) => {
    this.setState({ email: text });
  }

  handlerChangeSenha = (text) => {
    this.setState({ senha: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/images/logo.png')}
          />
        </View>
        
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

        <Text style={styles.errorMessage}>Ocorreu algum problema no login.</Text>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.alternativasTitle}>OU</Text>

        <View style={styles.socialLogin}>
          <TouchableOpacity onPress={this._handlePressButtonSocial}>
            <Ionicons
              style={{ marginRight: 30 }}
              name="logo-facebook"
              size={50}
              color="#7c80f8"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="logo-google"
              size={50}
              color="#7c80f8"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.criarContaText}>
          <Text>Não possui uma conta?</Text>
          <TouchableOpacity
            onPress={()=>{}}
          >
            <Text style={styles.criarContaButton}>Criar conta.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
