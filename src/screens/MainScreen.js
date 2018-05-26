import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base'
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Search from './Search';
import AddMedia from './AddMedia';
import Likes from './Likes';

const TabNavigator = createBottomTabNavigator({
    Home: { screen: Home },
    Search: { screen: Search },
    AddMedia: { screen: addMedia },
    Likes: { screen: Likes }
})

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