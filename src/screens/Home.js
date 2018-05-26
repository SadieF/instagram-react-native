import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

class Home extends React.Component {
static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='ios-home-outline' style={{ color: tintColor }} />
}
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <Text> Home </Text>
       </View>
    );
  }
}

export default Home;