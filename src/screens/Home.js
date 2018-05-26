import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, Header, Left, Right, Body, Container, Content, Thumbnail } from 'native-base';
const imageURL = 'https://i.ytimg.com/vi/icqDxNab3Do/maxresdefault.jpg';
const UserData = [
    {name: 'Roxy', image: imageURL},
    {name: 'Roxy2', image: imageURL},
    {name: 'Roxy3', image: imageURL},
    {name: 'Roxy4', image: imageURL},
    {name: 'Roxy5', image: imageURL},
    {name: 'Roxy6', image: imageURL},
    {name: 'Roxy7', image: imageURL},
]

class Home extends React.Component {
static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='ios-home-outline' style={{ color: tintColor }} />
}

renderItem = ({item}) => {
    return (
        <View style={{width: 60, justifyContent:'center', alignItems: 'center', marginRight: 10}}>
            <Thumbnail source={{uri: item.image}} style={{borderWidth: 3, borderColor: 'pink'}}/>
            <Text style={{marginTop: 5, fontSize: 16}}>{item.name}</Text>
      </View>
    )
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
                <View style={styles.avatarContainer}>
                 <View stlye={styles.avatarTextContainer}>
                    <Text style={{fontWeight:'bold', fontSize: 18}}>Stories</Text>
                    <View style={styles.iconContainer}>
                        <Icon name="md-play" style={{color: 'black', fontSize: 16, marginRight: 3}}/>
                        <Text> Watch All</Text>
                    </View>
                 </View>
                <View style ={styles.avatarScroller}>
                    <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={this.renderItem}
                    />
                </View>
                </View>
            </Content>
        </Container>
    );
  }
}
const styles = StyleSheet.create({
    avatarContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 110,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    avatarTextContainer: {
        flex: 3
    },
    avatarScroller: {
        paddingTop: 5,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    iconContainer: {
        flexDirection: 'row'
    }
})

export default Home;