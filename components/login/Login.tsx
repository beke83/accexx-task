import { Link, useNavigation, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Login() {
    const navigation = useNavigation();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(true)

    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [navigation]);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <SafeAreaView>
                        <Image
                            source={require('@/assets/images/accexx-logo.png')}
                            alt="accexx logo"
                        />
                        <View>
                            <Text style={[styles.welcome, { fontFamily: 'NohemiBold' }]}>Welcome back</Text>
                            <View style={{ marginTop: 4 }}>
                                <Text style={{ color: '#82808F', fontFamily: 'InterRegular', fontSize: 14 }}>Sign in to continue to your account</Text>
                            </View>
                        </View>
                        <View style={styles.formContainer}>
                            <View>
                                <Text style={styles.label}>Email Address</Text>
                                <TextInput style={styles.input} placeholder='E.g: Johndoe@gmail.com' />
                            </View>
                            <View>
                                <Text style={styles.label}>Password</Text>
                                <View style={{ position: 'relative' }}>
                                    <TextInput secureTextEntry={showPassword} style={styles.input} placeholder='************' keyboardType='default' />
                                    <Text style={styles.showText} onPress={toggleShowPassword}> {showPassword ? 'Show' : 'Hide'}</Text>
                                </View>
                            </View>
                            <Text style={[styles.forgotPassword, { fontFamily: 'InterBold' }]}>Forgot password? <Text style={{ color: '#242450' }}>Reset</Text></Text>
                        </View>

                        <View style={styles.btnContainer}>
                            <Pressable style={styles.button} onPress={() => router.push('/onboarding')}>
                                <Text style={{ color: 'white', fontFamily: 'NohemiRegular' }}>Login</Text>
                            </Pressable>
                            <Text style={[styles.account, { fontFamily: 'InterBold' }]}>Don’t have an account?{" "}
                                <Link href='/auth/create-account'>
                                    <Text style={{ fontWeight: '700', color: '#FF8C61' }}>
                                        Create account
                                    </Text>
                                </Link>
                            </Text>
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
    welcome: {
        fontSize: 21,
        fontWeight: '700',
        marginTop: 35,
        lineHeight: 21,
        letterSpacing: -1
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
    showText: {
        position: 'absolute',
        top: '50%',
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
        marginTop: 40,
        gap: 20,
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