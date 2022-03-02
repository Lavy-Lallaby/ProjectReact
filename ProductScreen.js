import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from 'native-base';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="RegisterScreen"
            iconName="person-add"
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  let cancelToken;

  const getDate = async () => {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course', {
      cancelToken: cancelToken.token,
    });
    //alert(JSON.stringify(res.data.data));
    setProduct(res.data.data);
    setLoading(false);
  };

  //ทุกๆครั้งที่เข้า product จะมีการดึงข้อมูลจาก server froever
  useFocusEffect(
    //usecallBack for optimize is not re-render child component
    React.useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getDate();
      return () => {
        cancelToken.cancel();
      };
    }, []),
  );

  // useEf ดึงข้อมูลจาก server one time
  // useEffect(() => {
  //   getDate();
  // }, []);

  if (loading == true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={'#FFB63A'} size="large"></ActivityIndicator>
      </View>
    );
  }

  const _onRefresh = () => {
    getDate();
  };

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={item => item.id.toString()}
        //pull to refresh
        onRefresh={_onRefresh}
        refreshing={loading} // true == refresh date to the end
        //render ui
        renderItem={({item}) => (
          <ListItem
            thumbnail
            onPress={() => {
              navigation.navigate('DetailScreen', {
                id: item.id,
                title: item.title, // title form backend send paramitter title to detailscreen
              });
            }}>
            <Left>
              <Thumbnail square source={{uri: item.picture}} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
