import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Details extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Detail Activity
                </Text>
            </View>
        );
    }
}