import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
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

const DetailScreen = ({navigation, route}) => {
  const {id, title} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      //title: 'รายละเอียดสินค้า',//static
      title: title, //dynamic
    });
  }, [navigation]);

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDate = async id => {
    setLoading(true);
    const res = await axios.get(
      'https://api.codingthailand.com/api/course/' + id,
    );
    //DetailScreen
    setDetail(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getDate(id);
  }, [id]);

  const _onRefresh = () => {
    getDate(id);
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.ch_id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({item, index}) => (
          <ListItem thumbnail>
            <Left>
              <Text>{index + 1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.ch_view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
