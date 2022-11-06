import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        console.log('Hello');
    }
    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign Up"/>

            {/* These Input Labels pass props for customizable input sections */}
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword={true} label="Password" placeholder="********"/>

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree to <Text styles={styles.agreeTextBold}>Terms</Text> & <Text styles={styles.agreeTextBold}>Conditions</Text>.</Text>
            </View>

            <Button style={styles.button} title='Sign Up'/>

            <Seperator text='Or sign up with' />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Already Have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>Sign In</Text>
            </Text>
        </ScrollView>
    )
}

export default React.memo(Signup);