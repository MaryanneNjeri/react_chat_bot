import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {GiftedChat } from 'react-native-gifted-chat';
import {dialogflowConfig} from "./env";

export default class App extends React.Component {
  state = {
    messages:[
      {
        _id:1,
        text:"Hello am  a Faq bot, how can help you.. ",
        user:{
          _id: 2,
          name:'Help Desk',
          avatar:'https://img.icons8.com/bubbles/100/000000/lol-female.png'
        },
        createdAt: new Date()
      }
    ]
  };
  onSend(messages = []){
    this.setState(previousState =>({
      messages: GiftedChat.append(previousState.messages,messages)
    }))
  }
  render() {
    return (
      <View style={styles.container}>
        <GiftedChat messages={this.state.messages}
                   onSend={messages =>this.onSend(messages)}
                   user={{
                     _id:1
                   }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
