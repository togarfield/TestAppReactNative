// import React from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
// import SecondActivity from './component/activity/SecondActivity';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center'}}>
//       <Image  style={{width:200, height: 140, marginTop: 30}}
//           			source={require('./component/image/beautiful-place.jpg')}/>
//         <TextInput style={styles.inputBox} 
//               underlineColorAndroid='rgba(0,0,0,0)' 
//               placeholder="Email"
//               placeholderTextColor = "#ffffff"
//               selectionColor="#fff"
//               keyboardType="email-address"
//               onSubmitEditing={()=> this.password.focus()}
//               />
//               <TextInput style={styles.inputBox} 
//               underlineColorAndroid='rgba(0,0,0,0)' 
//               placeholder="Password"
//               placeholderTextColor = "#ffffff"
//               selectionColor="#fff"
//               secureTextEntry={true}
//               onSubmitEditing={()=> this.password.focus()}
//               />
//               <TouchableOpacity 
//               style={styles.button}
//               onPress={() => this.props.navigation.navigate('Details')}>
//              <Text style={styles.buttonText}>Login</Text>
//            </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         header: null
//       }
//     },
//     Details: {
//       screen: SecondActivity,
//       navigationOptions: {
//         header: null
//       }
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
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