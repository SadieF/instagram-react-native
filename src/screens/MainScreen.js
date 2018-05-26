import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base'

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Instagram',
        headerLeft: <Icon name="ios-camera-outline" style={{paddingLeft: 10}} />,
        headerRight: <Icon name="ios-send-outline" style={{paddingRight: 10}} />
    }
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
       <Text> Mainscreen </Text>
       </View>
    );
  }
}

export default MainScreen;