import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ImageBackground } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <ImageBackground source={require("./images/background.png")} style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button type='solid' title="New exercise"  />
    <Separator />
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

  buttonContainer: {
    flex: 0,
    height: 20,
    padding: 5,
    position: 'absolute',
    bottom:250
  },

  separator: {
    marginVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
