import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
    const [checked, setChecked] = useState(false);

    const onSignUp = () => {
        console.log('Hola');
    }
    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign In"/>

            {/* These Input Labels pass props for customizable input sections */}
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword={true} label="Password" placeholder="********"/>

            <Button style={styles.button} title='Sign In'/>

            <Seperator text='Or sign up with' />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Don't have an Account?
                <Text onPress={onSignUp} style={styles.footerLink}>Sign Up</Text>
            </Text>
        </ScrollView>
    )
}

export default React.memo(Signin);