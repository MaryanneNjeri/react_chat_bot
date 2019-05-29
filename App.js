import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {GiftedChat } from 'react-native-gifted-chat';

export default class App extends React.Component {
  state = {
    messages:[
      {
        _id:1,
        text:"hello Developer",
        user:{
          _id: 2,
          name:'Help Desk',
          avatar:'https://img.icons8.com/bubbles/100/000000/lol-female.png'
        },
        createdAt: new Date()
      }
    ]
  };
  render() {
    return (
      <View style={styles.container}>
        <GiftedChat messages={this.state.messages} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
