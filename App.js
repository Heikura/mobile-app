import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


function Separator() {
  return <View style={styles.separator} />;
}

class HomeScreen extends React.Component {
  render(){
  return (
    <ImageBackground source={require("./images/background.png")} style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button
        type='solid' title="New exercise"
        onPress={() => this.props.navigation.navigate('Exercise')}
      />
    <Separator />
      <Button type='outline' title="Inspect exercises" />
    </View>
    </ImageBackground>
  );
}
}

class ExerciseScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>New exercise</Text>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Exercise: ExerciseScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


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
export default createAppContainer(AppNavigator);
