import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Icon, Header, Left, Right, Body, Container, Content } from 'native-base';

class Home extends React.Component {
static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='ios-home-outline' style={{ color: tintColor }} />
}
  render() {
    return (
        <Container>
            <Header>
                <Left><Icon name="ios-camera-outline" style={{paddingLeft: 10}}/></Left>
                <Body><Text>Instagram</Text></Body>
                <Right><Icon name="ios-send-outline" style={{paddingRight: 10}} /></Right>
            </Header>
            <Content>
                <Text>Welcome to Insta</Text>
            </Content>
        </Container>
    );
  }
}

export default Home;