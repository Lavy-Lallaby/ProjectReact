import React from 'react';
import {
  SafeAreaView,
  Image,
  Linking,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={require('../assets/react_logo.png')}
        style={styles.sideMenuProfileIcon}></Image>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}>
          <DrawerItem
            label={'Visit Us'}
            onPress={() => Linking.openURL('https://it/tni.ac.th')}
          />
        </DrawerItemList>
      </DrawerContentScrollView>
      <View style={styles.customItem}>
        <Text onPress={() => Linking.openURL('https://it.tni.ac.th')}>
          Rate Us
        </Text>
        <Image
          source={require('../assets/star_filled.png')}
          style={styles.iconStyle}></Image>
      </View>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
