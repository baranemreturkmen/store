import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';
import {Formik} from 'formik';

import styles from './Login.style';
import Input from '../Input';
import Button from '../Button';

const Login = () => {
function handleLogin(values){
    console.log(values);
}

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require('../../assets/login-logo.png')}
                    style={styles.logo}></Image>
            </View>
            <Formik initialValues={{username: '', password: ''}} 
            onSubmit={handleLogin}>
            {({handleSubmit, handleChange, values}) => (
                <View style={styles.body_container}>
                <Input placeholder="Kullanıcı adını giriniz..." 
                    value={values.username}
                    onType={handleChange('username')}></Input>
                <Input placeholder="Şifrenizi giriniz..." 
                        value={values.password}
                        onType={handleChange('password')}></Input>
                <Button text="Giriş Yap" onPress={handleSubmit}></Button>
            </View>   
            )} 
            </Formik>  
        </SafeAreaView>
    )
}

export default Login;