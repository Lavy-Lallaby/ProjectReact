import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {styles} from '../components/stylesPractice';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.textSty}>Home Screen</Text>
          <View style={styles.btuSty}>
            <Button
              title="Go to Setting Tab"
              onPress={() => navigation.navigate('Setting')}></Button>
          </View>
          <View style={styles.btuSty}>
            <Button title="Open News Screen"></Button>
          </View>
        </View>
        <Text style={styles.tniText}> www.tni.ac.th </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
