import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'native-base';

import StoryIcon from '../components/StoryIcon';
import Post from '../components/Post';
import { ScrollView } from 'react-native-gesture-handler';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Instagram',
    headerLeft: (
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 10
        }}
      >
        <Icon name='ios-camera' />
      </View>
    ),
    headerRight: (
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          paddingRight: 14
        }}
      >
        <Icon name='paper-plane' />
      </View>
    )
  };

  render() {
    return (
      <ScrollView>
        <View style={{ display: 'flex', flex: 1 }}>
          {/* Story View */}
          <View
            style={{
              height: 80,
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            {/* Self Story View */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

                paddingLeft: 4,
                paddingRight: 4
              }}
            >
              <Image
                style={{ width: 55, height: 55, borderRadius: '50%' }}
                source={{
                  uri:
                    'https://avatars1.githubusercontent.com/u/43666833?s=460&v=4'
                }}
              />
              <Text>Your story</Text>
            </View>
            {/* Other Users Stories' */}
            <StoryIcon
              userdp='https://randomuser.me/api/portraits/men/86.jpg'
              username='Random 1'
            />
            <StoryIcon
              userdp='https://randomuser.me/api/portraits/men/84.jpg'
              username='Random 2'
            />
            <StoryIcon
              userdp='https://randomuser.me/api/portraits/women/63.jpg'
              username='Random 3'
            />
            <StoryIcon
              userdp='https://randomuser.me/api/portraits/women/46.jpg'
              username='Random 4'
            />
          </View>
          {/* Posts View */}
          <View>
            <Post
              puserdp='https://randomuser.me/api/portraits/men/86.jpg'
              pusername='Random 1'
              pimg='https://images.pexels.com/photos/3617460/pexels-photo-3617460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            />
            <Post
              puserdp='https://randomuser.me/api/portraits/men/84.jpg'
              pusername='Random 2'
              pimg='https://images.pexels.com/photos/3635547/pexels-photo-3635547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
            <Post
              puserdp='https://randomuser.me/api/portraits/women/63.jpg'
              pusername='Random 3'
              pimg='https://images.pexels.com/photos/3599796/pexels-photo-3599796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
