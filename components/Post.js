import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Icon, Card, CardItem, Left, Body, Right, Button } from 'native-base';

export default class Post extends Component {
  render() {
    return (
      <View>
        <Card style={{ marginLeft: 6, marginRight: 6 }}>
          <CardItem>
            <Left>
              <Image
                style={{ width: 55, height: 55, borderRadius: '50%' }}
                source={{
                  uri: this.props.puserdp
                }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 6 }}>
                {this.props.pusername}
              </Text>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{ width: null, height: 300, flex: 1 }}
              source={{
                uri: this.props.pimg
              }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Icon name='heart' />
              <Text style={{ marginLeft: 8 }}>Like</Text>
            </Left>
            <Body>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Icon name='chatbubbles' />
                <Text style={{ marginLeft: 8 }}>Comment</Text>
              </View>
            </Body>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Icon name='paper-plane' />
                <Text>Share</Text>
              </View>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}
