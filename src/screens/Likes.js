import React, {Component} from 'react';
import { Text, View } from 'react-native';

class Likes extends React.Component {

  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <Text> Likes</Text>
       </View>
    );
  }
}

export default Likes;