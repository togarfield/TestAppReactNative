import * as React from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    TabView,
    TabBar,
    SceneMap
} from 'react-native-tab-view';
import PertamaActivity from './PertamaActivity';
import KeduaActivity from './KeduaActivity';

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [{
                key: 'first',
                title: 'Pertama'
            },
            {
                key: 'second',
                title: 'Kedua'
            },
        ],
    };

    render() {
        return ( <
            TabView navigationState = {
                this.state
            }
            renderScene = {
                SceneMap({
                    first: PertamaActivity,
                    second: KeduaActivity,
                })
            }
            onIndexChange = {
                index => this.setState({
                    index
                })
            }
            initialLayout = {
                {
                    width: Dimensions.get('window').width
                }
            }
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});