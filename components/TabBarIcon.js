import React from 'react';
import { Icon } from 'expo';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons 
        name={this.props.name}
        size={26}
        color={this.props.focused ? '#000' : '#999'}
      />
    );
  }
}