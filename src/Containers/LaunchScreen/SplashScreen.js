import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Home from '../Home/Home';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(setupDelay, 1000);
  });

  const setupDelay = () => {
    props.navigation.navigate('walkthrough');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/download.jpeg')}
        style={styles.logo}>
        <Text style={styles.title}>Splash Screen</Text>
      </ImageBackground>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logoTextContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  logo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
