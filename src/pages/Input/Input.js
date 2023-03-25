import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, value, onType}) => {
    return(
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onType} value={value}></TextInput>
        </View>
    );
}

export default Input;