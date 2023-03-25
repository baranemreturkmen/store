import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native'

import styles from './Login.style';
import Input from '../Input';
import Button from '../Button';

const Login = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require('../../assets/login-logo.png')}
                    style={styles.logo}></Image>
            </View>
            <View style={styles.body_container}>
                <Input placeholder="Kullanıcı adını giriniz..."></Input>
                <Input placeholder="Şifrenizi giriniz..."></Input>
                <Button text="Giriş Yap"></Button>
            </View>      
        </SafeAreaView>
    )
}

export default Login;