import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Picker,
  ScrollView,
} from "react-native";

class Inputs extends Component {
  state = {
    email: "",
    password: "",
    data: "",
    user: ""
  };
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };
  updateUser = user => {
    this.setState({ user: user });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width: 200, height: 100, alignSelf: "center" }}
            source={require("../image/beautiful-place.jpg")}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>

          <Text style={{ textAlign: "center" }}>{this.state.data.body}</Text>

          <Picker
            selectedValue={this.state.user}
            onValueChange={this.updateUser}
          >
            <Picker.Item label="Steve" value="steve" />
            <Picker.Item label="Ellen" value="ellen" />
            <Picker.Item label="Maria" value="maria" />
          </Picker>
          <Text style={styles.text}>{this.state.user}</Text>
        </ScrollView>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  containerHorizontal: {
   flexDirection: 'row'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white",
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    alignSelf: "center"
  }
});
