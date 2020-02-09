import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class StoryIcon extends Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',

          paddingLeft: 6,
          paddingRight: 6
        }}
      >
        <Image
          style={{ width: 55, height: 55, borderRadius: '50%' }}
          source={{
            uri: this.props.userdp
          }}
        />
        <Text>{this.props.username}</Text>
      </View>
    );
  }
}
