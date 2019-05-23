import React from "react";
import { ActivityIndicator, AsyncStorage, View } from "react-native";

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("@Biblib:token");

    this.props.navigation.navigate(userToken ? "Main" : "Login");
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}
