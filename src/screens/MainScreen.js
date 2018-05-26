import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base'
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Search from './Search';
import AddMedia from './AddMedia';
import Likes from './Likes';
import Profile from './Profile';

const TabNavigator = createBottomTabNavigator({
    Home: { screen: Home },
    Search: { screen: Search },
    AddMedia: { screen: AddMedia },
    Likes: { screen: Likes },
    Profile: { screen: Profile }
},{
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColour: 'black',
        inActiveTintColor: 'grey'
    }
})

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Instagram',
        headerLeft: <Icon name="ios-camera-outline" style={{paddingLeft: 10}} />,
        headerRight: <Icon name="ios-send-outline" style={{paddingRight: 10}} />
    }
  render() {
    return (
       < TabNavigator />
    );
  }
}

export default MainScreen;