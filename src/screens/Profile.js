import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

class Profile extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name='person' style={{ color: tintColor }} />
    }

  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <Text> Profile </Text>
       </View>
    );
  }
}

export default Profile;