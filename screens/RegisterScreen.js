import axios from 'axios';
import {Text, View, Component} from 'react-native';
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

const validateSchema = Yup.object().shape({
  name: Yup.string().required('กรุณาป้อนชื่อสกุล'),
  email: Yup.string()
    .email('รูปแบบอีเมลไม่ถูกต้อง')
    .required('กรุณากรอกอีเมลใหม่'),
  password: Yup.string()
    .min(3, 'รหัสผ่าน 3 ตัวอักษรขึ้นไป')
    .required('กรุณากรอกรหัสผ่านใหม่'),
});

const RegisterScreen = ({navigation}) => {
  return (
    <Container>
      <Content padder>
        <Formik
          //ค่าเริ่มต้นโดยกำหนดให้ตรง backend
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          //button register
          onSubmit={async (values, {setSubmitting}) => {
            // same shape as initial values
            try {
              const url = 'https://api.codingthailand.com/api/register';
              const res = await axios.post(url, {
                name: values.name,
                email: values.email,
                password: values.password,
              });
              alert(res.data.message);
              navigation.navigate('HomeScreen');
            } catch (error) {
              //not save data to server ex.double email
              alert(error.response.data.errors.email[0]);
            } finally {
              //button return click double
              setSubmitting(false);
            }
            //console.log(values);
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
                error={errors.name && touched.name ? true : false}>
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {errors.name && touched.name && (
                  <Icon name="close-circle"></Icon>
                )}
              </Item>
              {errors.name && touched.name && (
                <Item>
                  <Label style={{color: '#FF4C4C'}}>{errors.name}</Label>
                </Item>
              )}
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
                  Register
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default RegisterScreen;
