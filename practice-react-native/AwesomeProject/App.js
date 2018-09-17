import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>type you text below</Text>
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 150,
    height: 180,
    borderColor: '#7a42f4',
    alignItems: 'center',
    borderWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
