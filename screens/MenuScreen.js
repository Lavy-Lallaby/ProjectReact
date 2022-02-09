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

const MenuScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.Textstyle}>เมนูหลัก</Text>
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
});
