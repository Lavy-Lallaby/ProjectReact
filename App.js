import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import Home from './screens/Home';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#E9BFE2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home Page'}}
      />
    </Stack.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#E9BFE2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{title: 'Setting Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? (
                <Image
                  source={require('/ReactNative/assets/logo1.png')}
                  style={{width: 30, height: 30}}></Image>
              ) : (
                <Image
                  source={require('/ReactNative/assets/logo2.png')}
                  style={{width: 30, height: 30}}></Image>
              );
            } else if (route.name === 'Setting') {
              iconName = focused ? (
                <Image
                  source={require('/ReactNative/assets/logo1.png')}
                  style={{width: 30, height: 30}}></Image>
              ) : (
                <Image
                  source={require('/ReactNative/assets/logo3.png')}
                  style={{width: 30, height: 30}}></Image>
              );
            }
            return iconName;
          },
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Setting" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
