import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {styles} from '../components/stylesPractice';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.screenSty}>
        <Text style={styles.textSty}> You are on Profile Screen </Text>
        <Text style={styles.tniText}> www.tni.ac.th </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
