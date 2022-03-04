import {} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import MenuScreen from './screens/MenuScreen';
import AboutScreen from './screens/AboutScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import UserStoreProvider from './context/userContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#51D7AC'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'หน้าหลัก'}}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{title: 'เกี่ยวกับเรา'}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{title: 'ลงทะเบียน'}}
      />
    </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#51D7AC'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{title: 'สินค้า'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{title: 'DETAIL SCREEN'}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{title: 'ลงทะเบียน'}}
      />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#51D7AC'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'เข้าสู่ระบบ'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <UserStoreProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeStack"
          drawerPosition="left"
          drawerContent={props => <MenuScreen {...props} />}>
          <Drawer.Screen name="HomeStack" component={HomeStack} />
          <Drawer.Screen name="ProductStack" component={ProductStack} />
          <Drawer.Screen name="LoginStack" component={LoginStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserStoreProvider>
  );
};

export default App;
