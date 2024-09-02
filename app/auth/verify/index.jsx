import { Link, useNavigation, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PinInput } from 'react-native-pin-input-component';

export default function Verify() {
    const navigation = useNavigation();
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const code = ''
    const [values, setValues] = useState(code)

    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [navigation]);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <SafeAreaView>
                        <Link href='/auth/login'>
                            <View>
                                <Image
                                    source={require('@/assets/images/arrow_left.png')}
                                    alt="go back"
                                />
                            </View>
                        </Link>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('@/assets/images/accexx-logo.png')}
                                alt="accexx logo"
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={[styles.welcome, { fontFamily: 'NohemiBold' }]}>Confirm user account</Text>
                            <View style={{ marginTop: 4 }}>
                                <Text style={{ color: '#82808F', fontFamily: 'InterRegular', fontSize: 14, textAlign: 'center' }}>We sent a 4 digit pin for you to confirm your account</Text>
                            </View>
                        </View>

                        <View style={styles.center}>
                            <PinInput
                                autoFocus
                                value={values}
                                onPress={() => { }}
                                onChangeText={(values) => { setValues(values) }}
                                length={4}
                                keyboardType={'numeric'}
                            />
                        </View>

                        <View style={styles.btnContainer}>
                            <Pressable style={styles.button} onPress={() => router.push('/auth/verification-success')}>
                                <Text style={{ color: 'white', fontFamily: 'NohemiRegular' }}>Continue</Text>
                            </Pressable>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#ffffff',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#242450',
        paddingVertical: 20,
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    welcome: {
        fontSize: 21,
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: -1,
        textAlign: 'center',
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: '#82808F',
    },
    input: {
        borderRadius: 8,
        width: '100%',
        paddingLeft: 12,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        backgroundColor: '#FBFBFC',
        color: '#D0D0D5',
        fontWeight: '500',
        fontSize: 12,
        marginTop: 10,
    },
    flexInput: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    showText: {
        position: 'absolute',
        top: '40%',
        right: 12,
        // transform: 'translateY(-50%)',
        fontWeight: '500',
        fontSize: 12,
        color: '#161518',
    },
    forgotPassword: {
        display: 'flex',
        color: '#161518',
        fontSize: 14,
        marginTop: 10,
        alignSelf: 'flex-end',
        fontWeight: 700

    },
    formContainer: {
        marginTop: 50,
        gap: 15,
    },
    btnContainer: {
        marginTop: 70,
        marginBottom: 90
    },
    account: {
        marginTop: 20,
        textAlign: 'center',
        fontWeight: '700',
    }
})