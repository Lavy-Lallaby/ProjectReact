import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userStoreContext} from '../context/userContext';

const MenuScreen = ({navigation}) => {
  const userStore = React.useContext(userStoreContext);

  React.useEffect(() => {
    const getProfile = async () => {
      const profile = await AsyncStorage.getItem('@profile');
      if (profile) {
        userStore.updateProfile(JSON.parse(profile));
      }
    };
    getProfile();
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.view}>
        <Text style={styles.Textstyle}>เมนูหลัก</Text>
        {userStore.profile && (
          <>
            <Text style={{color: '#5177D7', fontSize: 16, fontWeight: 'bold'}}>
              ยินดีต้อนรับ {userStore.profile.name}
            </Text>
            <Text style={{color: '#D77751', fontSize: 14, fontWeight: 'bold'}}>
              welcome {userStore.profile.email}
            </Text>
          </>
        )}
      </View>

      <View>
        {/* native base */}
        <Content>
          <ListItem
            icon
            style={{marginTop: 10, marginBottom: 10}}
            onPress={() => navigation.navigate('HomeStack')}>
            <Left>
              <Button style={{backgroundColor: '#FF9501'}}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem
            icon
            style={{marginTop: 10, marginBottom: 10}}
            onPress={() => navigation.navigate('ProductStack')}>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>สินค้า</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          {/* {!userStore} */}

          {!userStore.profile && (
            <ListItem
              icon
              style={{marginTop: 10, marginBottom: 10}}
              onPress={() => navigation.navigate('LoginStack')}>
              <Left>
                <Button style={{backgroundColor: '#007AFF'}}>
                  <Icon active name="log-in" />
                </Button>
              </Left>
              <Body>
                <Text>เข้าสู่ระบบ</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          )}
          {userStore.profile && (
            <ListItem
              icon
              style={{marginTop: 10, marginBottom: 10}}
              onPress={async () => {
                await AsyncStorage.removeItem('@token');
                await AsyncStorage.removeItem('@profile');
                userStore.updateProfile(null);
                navigation.closeDrawer();
              }}>
              <Left>
                <Button style={{backgroundColor: '#007AFF'}}>
                  <Icon active name="log-out" />
                </Button>
              </Left>
              <Body>
                <Text>ออกจากระบบ</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          )}
        </Content>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  Textstyle: {
    color: '#51D7AC',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: undefined,
  },
});
