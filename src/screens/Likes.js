import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

class Likes extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name='ios-heart-outline' style={{ color: tintColor }} />
    }

  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <Text> Likes</Text>
       </View>
    );
  }
}

export default Likes;