import axios from 'axios';
import {Text, View, Component, StyleSheet} from 'react-native';
import React from 'react';
import {
  Container,
  Icon,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userStoreContext} from '../context/userContext';

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .email('รูปแบบอีเมลไม่ถูกต้อง')
    .required('กรุณากรอกอีเมลใหม่'),
  password: Yup.string()
    .min(3, 'รหัสผ่าน 3 ตัวอักษรขึ้นไป')
    .required('กรุณากรอกรหัสผ่านใหม่'),
});

const LoginScreen = ({navigation}) => {
  const userStore = React.useContext(userStoreContext);
  return (
    <Container>
      <Content padder>
        <Formik
          //ค่าเริ่มต้นโดยกำหนดให้ตรง backend
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          onSubmit={async (values, {setSubmitting}) => {
            try {
              const url = 'https://api.codingthailand.com/api/login';
              const res = await axios.post(url, {
                email: values.email,
                password: values.password,
              });
              await AsyncStorage.setItem('@token', JSON.stringify(res.data));

              const urlProfile = 'https://api.codingthailand.com/api/profile';
              const resProfile = await axios.get(urlProfile, {
                headers: {
                  Authorization: 'Bearer ' + res.data.access_token,
                },
              });
              //alert(JSON.stringify(resProfile.data.data.user));
              await AsyncStorage.setItem(
                '@profile',
                JSON.stringify(resProfile.data.data.user),
              );
              const profile = await AsyncStorage.getItem('@profile');
              userStore.updateProfile(JSON.parse(profile));

              alert('เข้าสู่ระบบแล้ว');
              navigation.navigate('HomeScreen');
            } catch (error) {
              alert(error.response.data.message);
            } finally {
              //button return click double
              setSubmitting(false);
            }
          }}>
          {(
            {
              errors,
              touched,
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }, // ไว้ตรวจสอบ err ที่เกิดขึ้น touch เมื่อกดแต่ยังไม่กรอก
          ) => (
            <Form>
              <Item
                fixedLabel
                error={errors.email && touched.email ? true : false}>
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Icon name="close-circle"></Icon>
                )}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{color: '#FF4C4C'}}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                last
                error={errors.password && touched.password ? true : false}>
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  keyboardType="number-pad"
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle"></Icon>
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{color: '#FF4C4C'}}>{errors.password}</Label>
                </Item>
              )}
              <Button
                onPress={handleSubmit}
                //disabled for open/close button
                disabled={isSubmitting}
                block
                large
                style={{marginTop: 15, backgroundColor: '#ABFCD1'}}>
                <Text
                  style={{color: '#97C1EC', fontSize: 16, fontWeight: 'bold'}}>
                  Login
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
