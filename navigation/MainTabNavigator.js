import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { fonts, colors } from '../constants/Index';
import TabBarIcon from '../components/TabBarIcon';
import InicioScreen from '../screens/inicio';
import DescobrirScreen from '../screens/descobrir';
import PerfilScreen from '../screens/perfil';

const defaultTabBarOption = {
  activeTintColor: colors.primary,
  inactiveTintColor: colors.gray,
  style: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    height: 60,
  },
  labelStyle: {
    height: 20,
    fontSize: fonts.small,
  },
};

const InicioStack = createStackNavigator({
  Inicio: InicioScreen,
});

InicioStack.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
  tabBarOptions: {...defaultTabBarOption}
};

const DescobrirStack = createStackNavigator({
  Descobrir: DescobrirScreen,
});

DescobrirStack.navigationOptions = {
  tabBarLabel: 'Descobrir',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  ),
  tabBarOptions: {...defaultTabBarOption}
};

const PerfilStack = createStackNavigator({
  Perfil: PerfilScreen,
});

PerfilStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-person${focused ? '' : '-outline'}`
          : 'md-person'
      }
    />
  ),
  tabBarOptions: {...defaultTabBarOption}
};

export default createBottomTabNavigator({
  InicioStack,
  DescobrirStack,
  PerfilStack,
});
