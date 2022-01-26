import React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FirstPage from '/ReactNative/pages/FirstPage';
import SecondPage from '/ReactNative/pages/SeconPage';
import ThirdPage from '/ReactNative/pages/ThirdPage';

import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require('/ReactNative/assets/drawerWhite.png')}
          style={{width: 25, height: 25, marginLeft: 5}}></Image>
      </TouchableOpacity>
    </View>
  );
};

function FirstScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerStyle: {backgroundColor: '#f4511e'},
        headerTintColor: '#ffff',
        headerTitleStyle: {fontweight: 'bold'},
        headerLeft: () => (
          <NavigationDrawerStructure
            navigationProps={navigation}></NavigationDrawerStructure>
        ),
      }}>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{title: 'FIRST PAGE'}}></Stack.Screen>
    </Stack.Navigator>
  );
}

function SecondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerStyle: {backgroundColor: '#f4511e'},
        headerTintColor: '#ffff',
        headerTitleStyle: {fontweight: ''},
        headerLeft: () => (
          <NavigationDrawerStructure
            navigationProps={navigation}></NavigationDrawerStructure>
        ),
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{title: 'SECOND PAGE'}}></Stack.Screen>

      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{title: 'THIRD PAGE'}}></Stack.Screen>
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="FirstPage"
          component={FirstScreenStack}></Drawer.Screen>
        <Drawer.Screen
          name="SecondPage"
          component={SecondScreenStack}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
