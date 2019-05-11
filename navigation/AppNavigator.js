import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/login';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // Aqui pode ser adicionado outra rota para autenticação
  // Para mais informações https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginScreen,
  Main: MainTabNavigator,
},
{
   initialRouteName: 'Login',
}
));