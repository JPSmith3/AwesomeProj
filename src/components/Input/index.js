import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

// This component passes props through the Input funtion i.e. placeholder={placeholder}
const Input = ({label, placeholder, isPassword}) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () =>{
        setIsPasswordVisible(!isPasswordVisible);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />

{/* This function is checking to see if the component is a password, if not, then it doesn't show the eye icon V*/}

                {isPassword ? (
                <Pressable onPress={onEyePress}>
                    <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye-closed.png')}/>
                </Pressable>
                ) : null}
            </View>
        </View>

    )
}

export default React.memo(Input);