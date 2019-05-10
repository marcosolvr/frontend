import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // Aqui pode ser adicionado outra rota para autenticação
  // Para mais informações https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
}));