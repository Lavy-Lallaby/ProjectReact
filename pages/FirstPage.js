import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

import {styles} from '/ReactNative/components/styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '/ReactNative/components/Logo';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View styles={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Ionicons name="home" size={30} color={'coral'}></Ionicons>
          <Text styles={styles.textTopStyle}>This is the First Page</Text>
          <Button
            title="Go To Second Page"
            onPress={() => navigation.navigate('SecondPage')}></Button>
          <Button
            title="GO To Third Page"
            onPress={() => navigation.navigate('ThirdPage')}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
