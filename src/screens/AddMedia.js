import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

class AddMedia extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name='ios-add-circle-outline' style={{ color: tintColor }} />
    }

  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <Text> AddMedia </Text>
       </View>
    );
  }
}

export default AddMedia;