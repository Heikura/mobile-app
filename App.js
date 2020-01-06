import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require("./images/background3.jpg")} style={styles.container}>
    <View style={styles.container}>

      <Button type='solid' title="New exercise" />
      <Button type='outline' title="Inspect exercises" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
