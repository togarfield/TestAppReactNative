import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.props.navigation.navigate("Main")}>
                        <Text style={styles.buttonText}>Pindah Ke Main Page</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A4A2AF',
    },
      inputBox: {
        width:300,
        backgroundColor:'#514242',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
      },
      button: {
        width:300,
        backgroundColor:'#523BE4',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      }
});