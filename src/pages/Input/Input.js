import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, value, onType, iconName, isSecure}) => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} 
                       placeholder={placeholder} 
                       onChangeText={onType} 
                       value={value}
                       secureTextEntry={isSecure}
                       autoCapitalize="none"></TextInput>
            <Icon name={iconName} size={25} color="gray"></Icon>
        </View>
    );
}

export default Input;