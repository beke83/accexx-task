import { useNavigation, useRouter } from 'expo-router';
import React, { useEffect } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function VerificationSuccess() {
    const navigation = useNavigation();
    const router = useRouter()

    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [navigation]);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.successText}>You’ve successfully created an account. Proceed to login</Text>
            <Pressable style={styles.button} onPress={() => router.push('/home')}>
                <Text style={{ color: 'white', fontFamily: 'NohemiRegular' }}>Go to Home</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#ffffff',
    },
    successText: {
        textAlign: 'center',
        fontSize: 15,
        lineHeight: 20,
        color: '#8D8D8D',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#242450',
        paddingVertical: 20,
        marginTop: 20,
    },
})