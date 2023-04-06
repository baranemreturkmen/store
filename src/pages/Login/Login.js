import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import styles from './Login.style';
import Input from '../Input';
import Button from '../Button';

import Config from 'react-native-config';
import usePost from '../../hooks/usePost';

const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch();

    function handleLogin(values) {
        //console.log(values);
        console.log("****:" + Config.API_AUTH_URL)
        post(Config.API_AUTH_URL + "/login", values);
    }

    if (error) {
        Alert.alert("Store", "Bir hata oluştu!")
    }

    if (!loading) {
        if (data) {
            if (data.token !== undefined) {
                console.log('success..');
                dispatch({type: 'SET_USER', payload: {user}});
                navigation.navigate("ProductsPage")
            }
            else {
                Alert.alert('PatikaStore', 'Something went wrong..');
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require('../../assets/login-logo.png')}
                    style={styles.logo}></Image>
            </View>
            <Formik initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}>
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input placeholder="Kullanıcı adını giriniz..."
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"></Input>
                        <Input placeholder="Şifrenizi giriniz..."
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure></Input>
                        <Button text="Giriş Yap"
                            onPress={handleSubmit}
                            loading={loading}></Button>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login;

//mock data
const user = {
    "address": { "geolocation": { "lat": "-37.3159", "long": "81.1496" }, "city": "kilcoole", "street": "new road", "number": 7682, "zipcode": "12926-3874" }, "id": 1, "email": "john@gmail.com", "username": "johnd", "password": "m38rmF$", "name": { "firstname": "john", "lastname": "doe" }, "phone": "1-570-236-7033", "__v": 0
}