import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const Logo = () => {
  return (
    <View>
      <Image source={require('../assets/react_logo.png')}></Image>
    </View>
  );
};

export default Logo;
const styles = StyleSheet.create({});
