/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

// SCREENS
import HomeScreen from "./component/activity/Home";
import MainScreen from "./component/activity/Main";
import SettingsScreen from "./component/activity/Settings";

const Stack1 = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home"
    }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: "Main"
    }
  }
});

Stack1.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === "Main") {
    navigationOptions.tabBarVisible = false;
    navigationOptions.swipeEnabled = false;
  }

  return navigationOptions;
};

const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Stack1,
      navigationOptions: {
        title: "Home"
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings"
      }
    }
  },
  {}
);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  }
});
