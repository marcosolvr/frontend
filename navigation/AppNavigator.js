import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoadingScreen from "../screens/authLoading";
import LoginScreen from "../screens/login";
import CadastrarScreen from "../screens/cadastrar";
import MainTabNavigator from "./MainTabNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      // Aqui pode ser adicionado outra rota para autenticação
      // Para mais informações https://reactnavigation.org/docs/en/auth-flow.html
      AuthLoading: AuthLoadingScreen,
      Login: LoginScreen,
      Cadastrar: CadastrarScreen,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
