// import React from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
// import Details from './Details';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//               <TouchableOpacity 
//               style={styles.button}
//               onPress={() => this.props.navigation.navigate('Details')}>
//              <Text style={styles.buttonText}>Details</Text>
//            </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: {
//         screen: HomeScreen,
//         navigationOptions: {
//           header: null
//         }
//       },
//       Details: {
//         screen: Details,
//         navigationOptions: {
//           header: null,
//           tabBarVisible: false,
//         }
//       },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// RootStack.navigationOptions = ({ navigation }) => {
//     let { routeName } = navigation.state.routes[navigation.state.index];
//     let navigationOptions = {};
  
//     if (routeName === 'Details') {
//       navigationOptions.tabBarVisible = false;
//     }
  
//     return navigationOptions;
//   };

// const AppContainer = createAppContainer(RootStack);

// export default class PertamaActivity extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// const styles = StyleSheet.create({
//   inputBox: {
//     width:300,
//     backgroundColor:'#514242',
//     borderRadius: 25,
//     paddingHorizontal:16,
//     fontSize:16,
//     color:'#ffffff',
//     marginVertical: 10
//   },
//   button: {
//     width:300,
//     backgroundColor:'#1c313a',
//      borderRadius: 25,
//       marginVertical: 10,
//       paddingVertical: 13
//   },
//   buttonText: {
//     fontSize:16,
//     fontWeight:'500',
//     color:'#ffffff',
//     textAlign:'center'
//   }
// });