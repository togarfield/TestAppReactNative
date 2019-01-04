import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Accordion,
  Button,
  Text,
  Body,
  Title,
  Card,
  CardItem,
  Icon,
  Right
} from "native-base";
import { StyleSheet, View, Alert, PermissionsAndroid } from "react-native";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class AccordionHeaderContentStyleExample extends Component {
  componentDidMount() {
    this._askForLocationServices();
  }
  _askForLocationServices() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      'title': 'question',
      'message': 'gimme that location',
    }).then((granted) => {
      console.log('granted', granted);
      // always returns never_ask_again
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Testing ae duls</Title>
          </Body>
        </Header>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />

          <View style={styles.buttonContainer}>
            <Button rounded success onPress={showAlert}>
              <Text>Success</Text>
            </Button>
          </View>

          <Card>
            <CardItem Header>
              <Text>Testing Header</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>isi body nya</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem footer>
              <Text>Testing Footer</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const showAlert = () => {
  Alert.alert("Testing Alert");
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    marginTop: 30,
    alignSelf: "center",
    justifyContent: "center"
  }
});
